import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { anOldHope, github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Copy, Check, Star } from 'react-feather'
import './bounce.css'

import simpleIcons from 'simple-icons'

import UserInfo from '../../components/UserInfo'

import Styled from './styles'
import utils from '../../utils'

const mappedIcons = {
    javascript: 'JavaScript',
    react: 'React',
    php: 'PHP',
    laravel: 'Laravel',
    vue: 'Vue.js',
    html: 'HTML5'
}

export default function Tip ({ tip: { id = "", title, code, language, description, user, created } }){
    const localRating =  Number(localStorage.getItem(id, 0))
    console.log(localRating)
    const MAX_LOCALRATING = 5

    const ratingButton = React.useRef(null);

    //TODO: Add rating to show tip's popularity
    const [copied, setCopied] = React.useState(false)
    const [rating, setRating] = React.useState(0)

    const date = utils.formatDate(created)
    const icon = simpleIcons.get(mappedIcons[language.toLowerCase()])

    const copiedDelay = () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
    }

    const increaseRating = () => {
        // updateTipRating()
        ratingButton.current.classList.remove('bounce')
        ratingButton.current.classList.add('bounce')
        const newRating = rating + 1;
        localStorage.setItem(id, newRating)
        setRating(newRating)
    }

    return (
        <Styled.Card>
            <Styled.Info>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Details>
                    <UserInfo user={user} />
                    <Styled.Date>{date}</Styled.Date>
                </Styled.Details>
                <p>{description}</p>
            </Styled.Info>
            <Styled.CodeSection>
                <SyntaxHighlighter customStyle={{height: '200px'}} language={language} style={anOldHope} >
                    {code}
                </SyntaxHighlighter>
                <Styled.LngIcon>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: icon.svg
                        }}
                        style={{ fill: `#${icon.hex}` }}
                    />
                </Styled.LngIcon>
                <Styled.ActionsSection>
                    {
                        localRating < MAX_LOCALRATING ?
                            (<Styled.RatingButton ref={ratingButton} onClick={increaseRating}>
                                <Styled.Rating >{rating}</Styled.Rating>
                                <Star/>
                            </Styled.RatingButton>) : null

                    }
                    <Styled.CopyButton isCopied={copied}>
                        <CopyToClipboard
                            text={code}
                            onCopy={() => copiedDelay()}
                        >
                            {copied ? <Check color="#84ffb5" /> : <Copy />}
                        </CopyToClipboard>
                    </Styled.CopyButton>
                </Styled.ActionsSection>
            </Styled.CodeSection>
        </Styled.Card>
    )
}

Tip.displayName = "Tip"