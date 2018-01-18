module.exports = {
    sourceFiles: './source/api/web/**/*.md',
    serverPort: 3008,
    public: true,
    disableCORS: false,
    autoOptions: true,
    debugMode: true,
    discover: true,
    watch: true,
    ignoreHeader: ['x-powered-by', 'content-length', 'etag', 'date', 'connection']
};
