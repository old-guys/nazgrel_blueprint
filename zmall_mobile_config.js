module.exports = {
    sourceFiles: './source/api/zmall/mobile/**/*.md',
    serverPort: 3005,
    public: true,
    disableCORS: false,
    autoOptions: true,
    debugMode: true,
    discover: true,
    watch: true,
    ignoreHeader: ['x-powered-by', 'content-length', 'etag', 'date', 'connection']
};
