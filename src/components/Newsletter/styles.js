import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    overflow: hidden;
`;

const Button = styled.button`
    background-color: #f66867;
    color: #ffffff;
    border: 1px solid #f66867;
    transition: all 0.4s;

    :hover{
        cursor: pointer;
        background-color: #2ab1ce;
        border-color: #2ab1ce;
    }
`;

const Input = styled.input`
    width: 100%;
    float: left;
    padding: 15px 20px;
    text-align: center;
    font-family: inherit;
    font-size: 1.1rem;
    letter-spacing: 0.05rem;
    outline: 0;
    border: 1px solid #bec1c5;
    transition: all 0.4s;
    border-color: ${props => props.error? 'red' : null};

    :focus {
        border-color: #3e4146;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

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
`;

export default {
    Button,
    Container,
    Form,
    Input,
    CloseButton
}