module.exports = {
    sourceFiles: './source/api/mobile/**/*.md',
    serverPort: 3007,
    public: true,
    disableCORS: false,
    autoOptions: true,
    debugMode: true,
    discover: true,
    watch: true,
    ignoreHeader: ['x-powered-by', 'content-length', 'etag', 'date', 'connection']
};
