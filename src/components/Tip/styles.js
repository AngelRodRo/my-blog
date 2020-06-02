
import styled from 'styled-components'

const Styled = {}

Styled.Card = styled.div`
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.4);
    transition: 0.3s;
    margin: 10px auto;
    color: var(--textNormal);
    width: 600px;

    @media (max-width: 500px) {
        width: 100%;
    }

    :hover {
        box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.2);
    }
`

Styled.Description = styled.p`
    margin: 0;
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
    margin: 15px;
`
Styled.CopyButton = styled.div`
    color: #999;
    cursor: ${ props => props.isCopied? '' : 'pointer'};
    margin: 0 5px;

    :hover {
        color: white;
    }
`

Styled.Rating = styled.span`
    line-height: 1.5;
    margin-right: 5px;
`
Styled.RatingButton = styled.div`
    display: flex;
    color: #999;
    margin: 0 5px;
    cursor: pointer;

    :hover {
        color: white;
    }
`

export default Styled