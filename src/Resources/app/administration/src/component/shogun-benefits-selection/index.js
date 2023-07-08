import template from './template.html.twig';
const { Mixin } = Shopware;
Shopware.Component.register('shogun-benefits-selection', {
    template,

    model: {
        prop: 'value'
    },

    props: {

        
        value: {
            type: String,
            required: false,
            default() {
                return '';
            },
        }, 
        
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
            currentValue: this.selection,
        };
    },
    
    computed: {
    },

    watch: {
        selection(value) {
            this.selection = value;
        },
    },

    created() {
        console.dir(this)
    },

    methods: {

    } 
});