import React from 'react'
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'


import { getUser } from 'src/utils/auth'

import AceEditor from 'react-ace'
import Select from 'react-select'

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'

import './form.css'

import Styled from './styles'

import languages from './ace-lngs-installer'

const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest

import tipDS from 'src/datasources/tips'

const tagOptions = [
    { value: 'snippet', label: 'Snippet' },
    { value: 'tip', label: 'Tip', },
]

//TODO: Implement well-built validations
export default function TipForm () {
    const { register, handleSubmit } = useForm()
    const user = getUser()

    const dispatch = useDispatch()
    const toggleIsLoading = () => dispatch({ type: 'TOGGLE_ISLOADING' })

    let code = ''
    let tags = []


    const [lang, setLang] = React.useState('javascript')

    const changeLng = (e) => {
        setLang(e.target.value)
    }

    const onSubmit = async ({ title, description }) => {
        try {
            if (!code) {
                toast.warning('Añade codigo antes de continuar')
                return
            }
            toggleIsLoading()
            await tipDS.create({ title, description, language: lang, code, tags, uid: user.uid })
            navigate('/tips')
            toggleIsLoading()
            toast.success('Se añadio tu tip!')
        } catch (e) {
            toast.error('Error al crear un nuevo tip, intentelo de nuevo')
        }
    }
    function onChange(newValue) {
        code = newValue
    }

    function handleTagChange(values) {
        tags = values.map(val => val.value)
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
                        name="tags"
                        onChange={handleTagChange}
                        options={tagOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>
                <Styled.Button className="form" type="submit">Crear</Styled.Button>
            </Styled.Form>
        </>
    )
}

TipForm.displayName = 'TipForm'
