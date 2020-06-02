import React from 'react'
import { useForm } from "react-hook-form"
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const languages = [
    "javascript",
    "java",
    "python",
    "xml",
    "ruby",
    "sass",
    "markdown",
    "mysql",
    "json",
    "html",
    "handlebars",
    "golang",
    "csharp",
    "elixir",
    "typescript",
    "css"
];

languages.forEach(lang => {
    require(`ace-builds/src-noconflict/mode-${lang}`);
    require(`ace-builds/src-noconflict/snippets/${lang}`);
});

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" ref={register({ required: true })} />
                <textarea ref={register({ required: true })} />
                <div className="field">
                    <label>Mode:</label>
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
                <button type="submit"></button>
            </form>
        </>
    )
}