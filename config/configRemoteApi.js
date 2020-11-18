const remoteCountryService = {
    basePath: process.env.REMOTE_COUNTRY_BASE_PATH || "https://postcodes.io/",
}

module.exports = Object.assign({}, { remoteCountryService })