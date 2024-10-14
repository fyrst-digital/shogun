const path = require('path')

module.exports = (params) => {

    params.config.resolve.alias['shogun'] = path.resolve(
        path.join(__dirname, '..', 'src')
    )

    params.config.resolve.alias['shogun-bootstrap'] = path.resolve(
        path.join(__dirname, '..', 'node_modules', 'bootstrap')
    )

    params.config.resolve.alias['shogun-modules'] = path.resolve(
        path.join(__dirname, '..', 'node_modules')
    )

    params.config.resolve.modules.push(
        path.resolve(
            path.join(__dirname, '..', 'node_modules')
        )
    )

    return params.config; 
}