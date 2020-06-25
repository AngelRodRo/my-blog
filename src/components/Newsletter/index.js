
import React from 'react'
import Modal from 'react-modal'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { useForm } from 'react-hook-form'
import { reactLocalStorage } from 'reactjs-localstorage'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Styled from './styles'

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
}

export default function Newsletter () {
    const { register, errors, handleSubmit } = useForm()
    const MySwal = withReactContent(Swal)

    const [modalIsOpen, setIsOpen] = React.useState(false)
    const timeout = 10000

    React.useEffect(() => {
        Modal.setAppElement('#main')
        const suscribed = reactLocalStorage.get('suscribed')
        const notInterested = reactLocalStorage.get('notInterested')

        if (!(suscribed || notInterested)) {
            setTimeout(() => setIsOpen(true), timeout)
        }
    }, [])

    function closeModal(){
        setIsOpen(false)
        reactLocalStorage.set('notInterested', true)
    }

    function showSuccessAlert() {
        MySwal.fire({
            icon: 'success',
            title: <p>Suscrito!</p>,
            text: 'Tu email se ha añadido exitosamente!',
        })
    }

    function onSubmit (data) {
        addToMailchimp(data.email)
        reactLocalStorage.set('suscribed', true)
        closeModal()
        showSuccessAlert();
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
        </div>
    );
}

Newsletter.displayName = "Newsletter"
