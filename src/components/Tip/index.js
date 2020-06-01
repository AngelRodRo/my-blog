import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { anOldHope, github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import simpleIcons from 'simple-icons'
import { Copy, Check } from 'react-feather'

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

export default function Tip ({ tip: { title, code, language, description, user } }){

    //TODO: Add rating to show tip's popularity
    const [copied, setCopied] = React.useState(false)

    const date = utils.formatDate(new Date())
    const icon = simpleIcons.get(mappedIcons[language.toLowerCase()])

    const copiedDelay = () => {
        setCopied(true)

        setTimeout(() => setCopied(false), 3000)
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
                <SyntaxHighlighter language={language} style={anOldHope} >
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
                <Styled.CopyButton isCopied={copied}>
                    <CopyToClipboard
                        text={code}
                        onCopy={() => copiedDelay()}
                    >
                        {copied ? <Check color="#84ffb5" /> : <Copy />}
                    </CopyToClipboard>
                </Styled.CopyButton>
            </Styled.CodeSection>

        </Styled.Card>
    )
}

Tip.displayName = "Tip"