const path = require('path')
const webpack = require('webpack')

module.exports = (params) => {

    params.config.resolve.alias['shogun'] = path.resolve(
        path.join(__dirname, '..', 'src')
    )

    params.config.resolve.modules.push(
        path.resolve(
            path.join(__dirname, '..', 'node_modules')
        )
    )

    const hasSplidePlugin = params.config.plugins.some(plugin => {
        return plugin instanceof webpack.ProvidePlugin && plugin.definitions.Splide;
    });

    if (!hasSplidePlugin) {
        params.config.plugins.push(
            new webpack.ProvidePlugin({
                Splide: '@splidejs/splide',
            })
        )
    }

    return params.config; 
}