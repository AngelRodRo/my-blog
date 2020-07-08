const languages = [
    'javascript',
    'java',
    'sass',
    'markdown',
    'mysql',
    'json',
    'html',
    'typescript',
    'css'
]

languages.forEach(lang => {
    require(`ace-builds/src-noconflict/mode-${lang}`)
    require(`ace-builds/src-noconflict/snippets/${lang}`)
})

export default languages
