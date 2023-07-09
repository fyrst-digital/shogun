import template from './template.html.twig';

const { Mixin } = Shopware;

Shopware.Component.register('shogun-benefits-selection', {
    template,

    model: {
        prop: 'selection',
        event: 'change'
    },

    mixins: [
        Mixin.getByName('notification'),
    ],

    props: {
        
        selection: {
            type: Array,
            required: false,
            default() {
                return [];
            },
        },
    },

    data() {
        return {
            currentSelection: this.selection,
            newItem: {
                icon: '',
                text: '',
                error: false
            }
        };
    },

    methods: {

        addItem(item) {

            // check if required description property is missing
            // if so, throw notification
            if (this.newItem.text === '') {
                this.newItem.error = true
                this.createNotificationError({
                    message: this.$tc('shogun.benefits.error.missingDescription'),
                });
                return
            }

            // push new item input to selection array
            // and reset new item value
            this.selection.push(item);
            this.newItem = {
                icon: '',
                text: '',
            }

            // change to parent config component
            this.$emit('change', this.selection);
        },

        removeItem(index) {
            this.selection.splice(index,1)
        },
    } 
});