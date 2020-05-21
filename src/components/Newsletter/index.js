
import React from 'react';
import Modal from 'react-modal';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Styled from './styles';
import { useForm } from "react-hook-form";
import SweetAlert from 'sweetalert2-react';

const customStyles = {
    content : {
        boxShadow: '0px 5px 6px #00000029',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, .5)',
        transition: 'opacity 300ms ease-in-out',
    },
};

Modal.setAppElement('#main')

export default () => {
    const { register, errors, handleSubmit } = useForm();

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [alertIsOpen, setIsAlertOpen] = React.useState(false);
    const timeout = 4000;

    setTimeout(() => {
        setIsOpen(true);
    }, timeout);

    function closeModal(){
        setIsOpen(false);
    }

     function onSubmit (data) {
        console.log(data)
        addToMailchimp(data.email); 
        closeModal();
        setIsAlertOpen(true);
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                >
                <Styled.Container>
                    <Styled.CloseButton onClick={closeModal}></Styled.CloseButton>
                    <h2>Suscríbete para obtener las últimas <span>novedades</span></h2>
                    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
                        <Styled.Input
                            placeholder="Añade tu correo"
                            name="email"
                            type="email"
                            error={errors.email}
                            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                        />
                        <Styled.Button
                            type="submit">
                            Suscribirse
                        </Styled.Button>
                    </Styled.Form>
                </Styled.Container>
            </Modal>
            <SweetAlert
                show={alertIsOpen}
                title="Demo"
                text="SweetAlert in React"
                onConfirm={() => setIsAlertOpen(false)}
            />
        </div>
    );
}
