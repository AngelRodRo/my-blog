
import React from 'react';
import Modal from 'react-modal';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Styled from './styles';
import { useForm } from "react-hook-form";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

export default (props) => {
    const { register, errors, handleSubmit } = useForm();

    const [email, setEmail] = React.useState('');
    const [modalIsOpen, setIsOpen] = React.useState(props.isOpen);

    function closeModal(){
        setIsOpen(false);
    }

    function _changeHandler (e) {
        setEmail(e.target.value);
    }

    function onSubmit (data) {
        debugger
        addToMailchimp(email); // listFields are optional if you are only capturing the email address.
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                >
                <Styled.Container>
                    <Styled.CloseButton onClick={closeModal}></Styled.CloseButton>
                    <h2>Suscríbete para obtener las últimas <span>novedades</span></h2>
                    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
                        <Styled.Input
                            placeholder="Añade tu correo"
                            value={email}
                            name="email"
                            type="email"
                            ref={register({required: true, pattern: /^\S+@\S+$/i})}
                            onChange={_changeHandler}
                        />
                        {errors.email}
                        <Styled.Button
                            type="submit">
                            Suscribirse
                        </Styled.Button>
                    </Styled.Form>
                </Styled.Container>
            </Modal>
        </div>
    );
}
