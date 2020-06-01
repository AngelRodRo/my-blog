
import styled from 'styled-components'

const Styled = {}

Styled.Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    background: white;
    margin: 10px auto;

    width: 600px;

    @media (max-width: 500px) {
        width: 100%;
    }

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

Styled.Info = styled.div`
    padding: 10px 25px 0px 25px;
`

Styled.Title = styled.h2`
    margin: 20px 0px 15px 5px;
`

Styled.Details = styled.div`
    display: flex;
    flex-direction: row;
`

Styled.Date = styled.span`
    color: #6e6e6e;
    line-height: 50px;
`

Styled.LngIcon = styled.div`
    background: white;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 15px;
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 5px;
`
Styled.CodeSection = styled.div`
    position: relative;
`
Styled.ActionsSection = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
`
Styled.CopyButton = styled.div`
    margin: 15px;
    color: #999;
    cursor: ${ props => props.isCopied? '' : 'pointer'};
`
Styled.RatingButton = styled.div`
    color: #999;
    vertical-align: center;
    margin: 15px;
`

export default Styled