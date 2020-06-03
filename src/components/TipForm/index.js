import React from 'react'
import { useForm } from "react-hook-form"
import AceEditor from "react-ace"

import "./form.css"

import Styled from './styles'

import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-monokai"

import languages from './ace-lngs-installer'

export default () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [lang, setLang] = React.useState('javascript');

    const changeLng = (e) => {
        setLang(e.target.value)
    }

    const onSubmit = () => {

    }
    function onChange(newValue) {
        console.log("change", newValue);
    }
    return (
        <>
            <Styled.Form className="form" onSubmit={handleSubmit(onSubmit)}>
                <Styled.Input className="form" placeholder="Titulo" type="text" ref={register({ required: true })} />
                <Styled.TextArea className="form" placeholder="Descripcion" ref={register({ required: true })} />
                <Styled.Select
                    className="form"
                    name="mode"
                    onChange={changeLng}
                    value={lang}
                    >
                    {languages.map(lang => (
                        <option key={lang} value={lang}>
                            {lang}
                        </option>
                    ))}
                </Styled.Select>
                <AceEditor
                    mode={lang}
                    theme="monokai"
                    onChange={onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                />
                <Styled.Button className="form" type="submit">Crear</Styled.Button>
            </Styled.Form>
        </>
    )
}