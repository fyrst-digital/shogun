import template from './template.html.twig';

const { Mixin } = Shopware;

Shopware.Component.register('shogun-social-media-channels', {
    template,

    model: {
        prop: 'channels',
        event: 'change'
    },

    mixins: [
        Mixin.getByName('notification'),
    ],

    props: {
        
        channels: {
            type: Object,
            required: false,
            default: () => {
                return {};
            },
        },
    },

    data() {
        return {
            channelList: {
                facebook: {
                    url: "",
                    position: 1,
                    icon: ""
                },
                instagram: {
                    url: "",
                    position: 2,
                    icon: ""
                },
                youtube: {
                    url: "",
                    position: 3,
                    icon: ""
                }
            },
        }
    },

    methods: {
        label(value) {
            let snippet = `shogun.socialMedia.${value}`
            return this.$tc(snippet)
        },
        set(property, channel, value) {
            this.channelList[channel][property] = value
            this.$emit('change', this.channelList);
        }
    },

    created () {
        this.channelList = {...this.channelList, ...this.channels}
        // change to parent config component
        this.$emit('change', this.channelList);
    }
});