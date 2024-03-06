import template from './template.html.twig';

const { Mixin } = Shopware;

Shopware.Component.register('shogun-social-media-channel-field', {
    template,

    model: {
        prop: 'channel',
        event: 'change'
    },

    mixins: [
        /** 
        Mixin.getByName('notification'),
        */
    ],

    props: {
        label: {
            type: String
        },
        channel: {
            type: Object,
            required: false,
            default: () => {
                return {
                    label: '',
                    url: '',
                    icon: '',
                    position: null
                };
            },
        }
    },

    computed: {
    },

    data() {
        return {
            /** 
            channel: {
                label: 'test',
                url: '#test',
                icon: '',
                position: null,
            }
            */
        }
    },

    methods: {
        initField () {
            if (this.channel.position === null) {
                if (this.$attrs.position) {
                    this.channel.position = this.$attrs.position
                } else {
                    this.channel.position = 1
                }
            }
        }
    },

    created () {
        console.log(this)
        this.initField()
        // change to parent config component
        this.$emit('change', this.channel);
    }
});