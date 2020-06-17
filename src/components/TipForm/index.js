import React from 'react'
import { useForm } from "react-hook-form"
import AceEditor from "react-ace"
import Select from 'react-select';

import "./form.css"

import Styled from './styles'

import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-monokai"

import languages from './ace-lngs-installer'

const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest;

import tipDS from '../../datasources/tips';


//TODO: Implement well-built validations
export default () => {
    const { register, handleSubmit, watch, errors } = useForm();
    let code = "";
    const colourOptions = [
        { value: 'snippet', label: 'Snippet' },
        { value: 'tip', label: 'Tip', },
    ];
    const [lang, setLang] = React.useState('javascript');

    const changeLng = (e) => {
        setLang(e.target.value)
    }

    const onSubmit = async ({ title, description }) => {
        if (!code) {
            alert('Añade codigo antes de continuar')
            return;
        }
        await tipDS.create({ title, description, code });
    }
    function onChange(newValue) {
        code = newValue;
    }
    return (
        <>
            <Styled.Form className="form" onSubmit={handleSubmit(onSubmit)}>
                <Styled.Input name="title" className="form" placeholder="Titulo" type="text" ref={register({ required: true })} />
                <Styled.TextArea name="description" className="form" placeholder="Descripción" ref={register({ required: true })} />
                <Styled.Select
                    className="form"
                    name="mode"
                    onChange={changeLng}
                    value={lang}
                    >
                    {languages.map(lang => (
                        <option key={lang} value={lang}>
                            { lang? capitalize(lang) : ''}
                        </option>
                    ))}
                </Styled.Select>
                <AceEditor
                    style={{ width: '100%' }}
                    mode={lang}
                    fontSize={20}
                    theme="monokai"
                    onChange={onChange}
                    name="ace-code-editor"
                    editorProps={{ $blockScrolling: true }}
                />
                <div
                    style={{ margin: '10px 0' }}
                >
                    <Select
                        isMulti
                        defaultValue={[colourOptions[2], colourOptions[3]]}
                        name="colors"
                        options={colourOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>
                <Styled.Button className="form" type="submit">Crear</Styled.Button>
            </Styled.Form>
        </>
    )
}
