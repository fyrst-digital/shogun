import template from './template.html.twig';
import './style.scss';

const { Mixin } = Shopware;

Shopware.Component.register('shogun-benefits-selection', {
    template,

    model: {
        prop: 'selection',
        event: 'change'
    },

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
    
    computed: {
    },

    watch: {
        selection(value) {
            // this.selection = value;
        },
    },

    created() {
        // console.dir(this.selection)
    },

    methods: {

        addItem(item) {
            if (this.newItem.text === '') {
                console.log("Empty :(");
                this.newItem.error = true
                return
            }
            this.selection.push(item);
            this.newItem = {
                icon: '',
                text: '',
            }
            console.log(this.selection);
            console.log(this.newItem);
            this.$emit('change', this.selection);
        },

        removeItem(index) {
            this.selection.splice(index,1)
            console.log(this.selection[index]);
        },

        purgeSelection() {
            this.selection = [];
            this.$emit('change', this.selection);
        }
    } 
});