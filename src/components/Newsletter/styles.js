import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    overflow: hidden;
`

const Button = styled.button`
    background-color: #104d88;
    color: #ffffff;
    border: 1px solid #104d88;
    transition: all 0.4s;

    :hover{
        cursor: pointer;
        background-color: #0c3358;
        border-color: #0c3358;
    }
`

const Input = styled.input`
    width: 100%;
    float: left;
    padding: 15px 20px;
    text-align: center;
    font-family: inherit;
    font-size: 1.1rem;
    letter-spacing: 0.05rem;
    outline: 0;
    border: 1px solid;
    transition: all 0.4s;
    border-color: ${props => props.error? 'red' : '#bec1c5'};

    :focus {
        border-color: ${props => props.error? 'red' : '#3e4146'};
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const CloseButton = styled.span`
    position: absolute;
    width: 32px;
    height: 32px;
    opacity: 0.3;
    cursor: pointer;

    :hover {
        opacity: 1;
    }

    :before, :after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
    }

    :after{
        transform: rotate(-45deg);
    }

    :before{
        transform: rotate(45deg);

    }
`

export default {
    Button,
    Container,
    Form,
    Input,
    CloseButton
}
