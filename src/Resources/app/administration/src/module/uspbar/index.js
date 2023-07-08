import meta from "./meta";

Shopware.Module.register('shogun-uspbar', {
    type: 'plugin',
    name: 'shogunUspbar',
    title: meta.label,
    description: 'shogun.uspbarModule',
    color: meta.color,
    icon: meta.icon,
    navigation: [{
        id: 'shogun-uspbar-settings',
        label: meta.label,
        color: meta.color,
        path: 'shogun.uspbar.settings',
        icon: meta.icon,
        parent: 'sw-settings',
        position: 100
    }],
    settingsItem: [{
        group: 'shop', // shop, system, plugins
        to: 'shogun.uspbar.settings',
        icon: meta.icon, // nedds to be changed
        name: 'shogun.uspbarEntry'
    }],
    routes: {
        settings: {
            component: 'shogun-uspbar-settings',
            path: 'settings',
            meta: {
                parentPath: 'sw.settings.index.shop'
            }
        }
    },
});