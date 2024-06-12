const path = require('path');

module.exports = (params) => {

    Object.assign(params.config.resolve.alias, {
        '@fyrst/shogun': path.resolve(
            path.join(__dirname, '..', 'src')
        ),
    })
    Object.assign(params.config.resolve.alias, {
        'shogun': path.resolve(
            path.join(__dirname, '..', 'src', 'scss')
        ),
    })

    return { 
        /** 
        resolve: { 
            alias: params.config.resolve.alias
        } 
        */
    }; 
}