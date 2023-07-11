import template from './template.html.twig';

const { Mixin } = Shopware;

Shopware.Component.register('shogun-newsletter-settings', {
    template,

    mixins: [
        Mixin.getByName('notification'),
    ],

    methods: {

        // @TODO: language awareness
        /*
        onChangeLanguage() {
            console.log("vycv");
        },
        */

        async onSave(){
            await this.$refs.systemConfig.saveAll();
        },
    } 


});