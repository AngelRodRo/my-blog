import React from 'react'
import { useForm } from "react-hook-form";

export default () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = () => {

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" ref={register({ required: true })} />
                <textarea ref={register({ required: true })} />
                <button type="submit"></button>
            </form>
        </>
    )
}