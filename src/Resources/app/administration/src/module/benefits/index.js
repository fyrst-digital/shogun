import meta from "./meta";

Shopware.Module.register('shogun-benefits', {
    type: 'plugin',
    name: 'shogunUspbar',
    title: meta.label,
    description: 'shogun.uspbarModule',
    color: meta.color,
    icon: 'regular-cog',
    navigation: [{
        id: 'shogun-benefits-settings',
        label: meta.label,
        color: meta.color,
        path: 'shogun.benefits.settings',
        icon: meta.icon,
        parent: 'sw-settings',
        position: 100
    }],
    settingsItem: [{
        group: 'shop', // shop, system, plugins
        to: 'shogun.benefits.settings',
        icon: meta.icon, // nedds to be changed
        name: 'shogun.uspbarEntry'
    }],
    routes: {
        settings: {
            component: 'shogun-benefits-settings',
            path: 'settings',
            meta: {
                parentPath: 'sw.settings.index.shop'
            }
        }
    },
});