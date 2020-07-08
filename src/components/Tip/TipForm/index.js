import React from 'react'
import { navigate } from 'gatsby'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

import AceEditor from 'react-ace'
import Select from 'react-select'
import { Formik, Field } from 'formik'

import { getUser } from 'src/utils/auth'

import tipDS from 'src/datasources/tips'

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'

import './form.css'

import Styled from './styles'

import languages from './ace-lngs-installer'

const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest

export default function TipForm () {

    const dispatch = useDispatch()
    const toggleIsLoading = () => dispatch({ type: 'TOGGLE_ISLOADING' })

    const user = getUser()

    const selectableTags = [
        { value: 'snippet', label: 'Snippet' },
        { value: 'tip rapido', label: 'Tip rapido' },
    ]

    const initialValues = {
        title: '',
        description: '',
        lang: 'javascript',
        code: '',
        tags: [],
    }

    const onSubmit = async ({ title, description, lang, code, tags }) => {
        try {
            toggleIsLoading()
            await tipDS.create({
                title,
                description,
                language: lang,
                code,
                tags: [
                    ...tags.map(val => val.value),
                    lang,
                ],
                uid: user.uid
            })
            navigate('/tips')
            toggleIsLoading()
            toast.success('Se añadio tu tip!')
        } catch (e) {
            toast.error('Error al crear un nuevo tip, intentelo de nuevo')
        }
    }

    const validate = ({ title, lang, code, tags }) => ({
        ...(!title ? { title: 'Required' } : {}),
        ...(!lang ? { lang: 'Required' } : {}),
        ...(!code ? { code: 'Required' } : {}),
        ...(tags && tags.length === 0? { tags: 'Required' } : {})
    })

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
        >
            {({
                values,
                errors,
                setFieldValue,
                handleSubmit
            }) => (
                <Styled.Form onSubmit={handleSubmit} className="form">
                    <Field
                        className="form"
                        name="title"
                        type="text"
                        as={Styled.Input}
                        error={errors.title}
                        placeholder="Titulo"
                    />
                    <Field
                        className="form"
                        name="description"
                        placeholder="Descripción"
                        as={Styled.TextArea}
                    />
                    <Field
                        className="form"
                        name="lang"
                        as={Styled.Select}
                        error={errors.lang}
                    >
                        {languages.map(lang => (
                            <option key={lang} value={lang}>
                                { lang? capitalize(lang) : ''}
                            </option>
                        ))}
                    </Field>
                    <AceEditor
                        style={{ width: '100%', ...(errors.code? { border : '1px solid red' } : {}) }}
                        mode={values.lang}
                        fontSize={20}
                        theme="monokai"
                        onChange={code => setFieldValue('code', code)}
                        name="ace-code-editor"
                        editorProps={{ $blockScrolling: true }}
                    />
                    <div
                        style={{ margin: '10px 0', ...(errors.tags? { border : '1px solid red' } : {}) }}
                    >
                        <Select
                            isMulti
                            name="tags"
                            onChange={tags => setFieldValue('tags', tags)}
                            options={selectableTags}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </div>
                    <Styled.Button
                        className="form"
                        type="submit"
                    >
                        Crear
                    </Styled.Button>
                </Styled.Form>
            )}
        </Formik>
    )
}

TipForm.displayName = 'TipForm'
