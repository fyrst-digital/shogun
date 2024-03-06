import template from './template.html.twig';

const { Mixin } = Shopware;

Shopware.Component.register('shogun-social-media-settings', {
    template,

    mixins: [
        Mixin.getByName('notification'),
    ],

    data() {
        return {
            salesChannelId: null
        }
    },

    methods: {

        // @TODO: language awareness
        /*
        onChangeLanguage() {
            console.log("vycv");
        },
        */

        async onSave(){
            console.log(this.$refs.systemConfig)
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

        meddl (value) {
            console.log('meddl', value)
        }
    }
});