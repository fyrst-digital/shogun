const definePlugins = ( plugins ) => {

    if (window) {

        plugins.forEach(plugin => {
            
            if ( !Object.keys(window.PluginManager.getPluginList()).find((element) => element === plugin.name) ) {
                window.PluginManager.register(plugin.name, plugin.class, plugin.selector ?? document, plugin.options ?? {});
            }
        });
    } else {
        console.warn("No window object. Plugins won't be registered");
    }
}

export {
    definePlugins
}