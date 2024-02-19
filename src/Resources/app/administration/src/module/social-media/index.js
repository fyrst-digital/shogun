import meta from "./meta";

Shopware.Module.register('shogun-social-media', {
    type: 'plugin',
    name: 'shogunSocialMedia',
    title: meta.label,
    description: 'shogun.socialMediaModule',
    color: meta.color,
    icon: 'regular-cog',
    navigation: [{
        id: 'shogun-social-media-settings',
        label: meta.label,
        color: meta.color,
        path: 'shogun.social.media.settings',
        icon: meta.icon,
        parent: 'sw-settings',
        position: 100
    }],
    settingsItem: [{
        group: 'shop', // shop, system, plugins
        to: 'shogun.social.media.settings',
        icon: meta.icon, // nedds to be changed
        name: 'shogun.socialMediaEntry'
    }],
    routes: {
        settings: {
            component: 'shogun-social-media-settings',
            path: 'settings',
            meta: {
                parentPath: 'sw.settings.index.shop'
            }
        }
    },
});