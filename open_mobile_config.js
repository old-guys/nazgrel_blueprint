module.exports = {
    sourceFiles: './source/api/open/mobile/**/*.md',
    serverPort: 3106,
    disableCORS: true,
    autoOptions: true,
    debugMode: true,
    discover: true,
    watch: true,
    ignoreHeader: ['x-powered-by', 'content-length', 'etag', 'date', 'connection']
};
