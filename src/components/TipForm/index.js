import React from 'react'
import { useForm } from "react-hook-form"
import AceEditor from "react-ace"

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
            <Styled.Form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Titulo" type="text" ref={register({ required: true })} />
                <textarea placeholder="Descripcion" ref={register({ required: true })} />
                <div className="field">
                    <label>Lenguaje:</label>
                    <p className="control">
                    <span className="select">
                        <select
                        name="mode"
                        onChange={changeLng}
                        value={lang}
                        >
                        {languages.map(lang => (
                            <option key={lang} value={lang}>
                                {lang}
                            </option>
                        ))}
                        </select>
                    </span>
                    </p>
                </div>
                <AceEditor
                    mode={lang}
                    theme="monokai"
                    onChange={onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                />
                <button type="submit">Crear</button>
            </Styled.Form>
        </>
    )
}