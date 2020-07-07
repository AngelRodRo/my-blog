const languages = [
    'javascript',
    'java',
    'python',
    'xml',
    'ruby',
    'sass',
    'markdown',
    'mysql',
    'json',
    'html',
    'handlebars',
    'golang',
    'csharp',
    'elixir',
    'typescript',
    'css'
]

languages.forEach(lang => {
    require(`ace-builds/src-noconflict/mode-${lang}`)
    require(`ace-builds/src-noconflict/snippets/${lang}`)
})

export default languages
