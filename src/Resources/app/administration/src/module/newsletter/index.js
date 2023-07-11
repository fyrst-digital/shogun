import meta from "./meta";

Shopware.Module.register('shogun-newsletter', {
    type: 'plugin',
    name: 'shogunNewsletter',
    title: meta.label,
    description: 'shogun.newsletterModule',
    color: meta.color,
    icon: 'regular-cog',
    navigation: [{
        id: 'shogun-newsletter-settings',
        label: meta.label,
        color: meta.color,
        path: 'shogun.newsletter.settings',
        icon: meta.icon,
        parent: 'sw-settings',
        position: 100
    }],
    settingsItem: [{
        group: 'shop', // shop, system, plugins
        to: 'shogun.newsletter.settings',
        icon: meta.icon, // nedds to be changed
        name: 'shogun.newsletterEntry'
    }],
    routes: {
        settings: {
            component: 'shogun-newsletter-settings',
            path: 'settings',
            meta: {
                parentPath: 'sw.settings.index.shop'
            }
        }
    },
});