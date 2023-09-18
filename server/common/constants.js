module.exports = Object.freeze({
    SERVER_HOST: process.env.SERVER_HOST || 'http://localhost',
    SERVER_PORT: process.env.SERVER_PORT || 8080,
    SERVER_URL: process.env.SERVER_HOST + ':' + process.env.SERVER_PORT,
    CLIENT_HOST: process.env.CLIENT_HOST || 'http://localhost',
    CLIENT_PORT: process.env.CLIENT_PORT || 3000,
    CLIENT_URL: process.env.CLIENT_HOST + ':' + process.env.CLIENT_PORT,
});