import template from './template.html.twig';

const { Mixin } = Shopware;

Shopware.Component.register('shogun-benefits-settings', {
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
            try {

                await this.$refs.systemConfig.saveAll();

                this.createNotificationSuccess({
                    message: this.$tc('sw-extension-store.component.sw-extension-config.messageSaveSuccess'),
                });
            } catch (err) {

                this.createNotificationError({
                    message: err,
                });
            }
        },
    } 


});