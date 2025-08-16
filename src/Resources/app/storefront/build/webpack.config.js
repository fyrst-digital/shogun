const path = require('path')

module.exports = (params) => {

    params.config.resolve.alias['shogun'] = path.resolve(
        path.join(__dirname, '..', 'src')
    )

    return params.config;
}