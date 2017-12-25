module.exports = {
    sourceFiles: './source/api/dev/**/*.md',
    serverPort: 3009,
    disableCORS: true,
    autoOptions: true,
    debugMode: true,
    discover: true,
    watch: true,
    ignoreHeader: ['x-powered-by', 'content-length', 'etag', 'date', 'connection']
};
