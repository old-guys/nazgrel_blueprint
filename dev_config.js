module.exports = {
    sourceFiles: './source/api/dev/**/*.md',
    serverPort: 3009,
    public: true,
    disableCORS: false,
    autoOptions: true,
    debugMode: true,
    discover: true,
    watch: true,
    ignoreHeader: ['x-powered-by', 'content-length', 'etag', 'date', 'connection']
};
