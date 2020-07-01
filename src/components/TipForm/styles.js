import styled from 'styled-components'

const styles = {}

styles.Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
`
styles.Select = styled.select`
    margin: 10px 0px !important;
`

styles.Input = styled.input`
    margin: 10px 0px;
    padding: 10px;
`

styles.TextArea = styled.textarea`
    margin: 10px 0px;
    padding: 10px;
`

styles.Button = styled.button`
    margin: 10px 0px;
`

export default styles
