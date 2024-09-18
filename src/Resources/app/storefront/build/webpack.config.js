const path = require('path');

module.exports = (params) => {

    params.config.resolve.alias['shogun'] = path.resolve(
        path.join(__dirname, '..', 'src')
    )

    params.config.resolve.modules.push(
        path.resolve(
            path.join(__dirname, '..', 'node_modules')
        )
    )

    console.log(params.config.resolve.modules)

    return params.config; 
}