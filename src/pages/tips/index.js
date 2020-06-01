import React from 'react'
import Tip from '../../components/Tip'

const tips = [
    {
        title: "Title 1",
        language: "html",
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
    return (
        <div>
            <Tip
                tip={tips[0]}
            />
        </div>
    )
}