module.exports = {
    sourceFiles: './source/api/channel/**/*.md',
    serverPort: 3006,
    public: true,
    disableCORS: true,
    autoOptions: true,
    debugMode: true,
    discover: true,
    watch: true,
    ignoreHeader: ['x-powered-by', 'content-length', 'etag', 'date', 'connection']
};
