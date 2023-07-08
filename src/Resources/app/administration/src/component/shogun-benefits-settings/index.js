import template from './template.html.twig';

const { Mixin } = Shopware;

Shopware.Component.register('shogun-benefits-settings', {
    template,

    mixins: [
        Mixin.getByName('notification'),
    ],

    props: {
        config: {
            type: Object,
            required: false,
            default() {
                return {};
            },
        }
    },

    methods: {

        async onSave(){
            try {
                // @ts-expect-error
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                await this.$refs.systemConfig.saveAll();
    
                // @ts-expect-error
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                this.createNotificationSuccess({
                    message: this.$tc('sw-extension-store.component.sw-extension-config.messageSaveSuccess'),
                });
            } catch (err) {
                // @ts-expect-error
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                this.createNotificationError({
                    message: err,
                });
            }
        },
    } 


});