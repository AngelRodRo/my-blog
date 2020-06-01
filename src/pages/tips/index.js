import React from 'react'
import Tip from '../../components/Tip'

const tips = [
    {
        id: 1,
        title: "Title 1",
        language: "html",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies magna placerat, donec rutrum quam himenaeos lacinia at condimentum platea penatibus elementum facilisi, posuere ultrices vivamus nulla per eros eleifend nibh neque",
        user: {
            firstName: "Angel",
            lastName: "Rodriguez",
            profileLink: "/some-url",
            profileImg: "https://picsum.photos/200/300"
        },
        code: `
            <h1>Test</h1>
            <p>
                Hello world!
            </p>
            <h1>Test</h1>
            <p>
                Hello world!
            </p>
            <h1>Test</h1>
            <p>
                Hello world!
            </p>
            <h1>Test</h1>
            <p>
                Hello world!
            </p>
            <h1>Test</h1>
            <p>
                Hello world!
            </p>
            <h1>Test</h1>
            <p>
                Hello world!
            </p>
            <h1>Test</h1>
            <p>
                Hello world!
            </p>
        `,
        created: new Date
    },
    {
        id: 2,
        title: "Title 1",
        language: "javascript",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies magna placerat, donec rutrum quam himenaeos lacinia at condimentum platea penatibus elementum facilisi, posuere ultrices vivamus nulla per eros eleifend nibh neque. A pretium non viverra vehicula lobortis facilisi senectus mus",
        user: {
            firstName: "Angel",
            lastName: "Rodriguez",
            profileLink: "/some-url",
            profileImg: "https://picsum.photos/200/300"
        },
        code: `
        function fn() {
            console.log('asdasd')
        }
        `,
        created: new Date
    },
    {
        id: 3,
        title: "Title 1",
        language: "php",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies magna placerat, donec rutrum quam himenaeos lacinia at condimentum platea penatibus elementum facilisi, posuere ultrices vivamus nulla per eros eleifend nibh neque. A pretium non viverra vehicula lobortis facilisi senectus mus",
        user: {
            firstName: "Angel",
            lastName: "Rodriguez",
            profileLink: "/some-url",
            profileImg: "https://picsum.photos/200/300"
        },
        code: `
            <h1>Test</h1>
            <p>
                Hello world!
            </p>
        `,
        created: new Date
    }
]

export default () => {
    const TipsList = () => tips.map(tip => <Tip tip={tip} />)
    return (
        <div>
            <TipsList></TipsList>
        </div>
    )
}