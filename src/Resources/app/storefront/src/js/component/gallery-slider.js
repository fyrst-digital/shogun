import Plugin from 'src/plugin-system/plugin.class'
import { tns } from 'tiny-slider';
import Swiper from 'swiper';

export default class GallerySlider extends Plugin {
    /**
     * default slider options
     *
     * @type {*}
     */
    static options = {
        initializedCls: 'js-slider-initialized',
        containerSelector: '[data-base-slider-container=true]',
        controlsSelector: '[data-base-slider-controls=true]',
        slider: {
            enabled: true,
            responsive: {
                xs: {},
                sm: {},
                md: {},
                lg: {},
                xl: {},
                xxl: {},
            },
        },
    }

    init() {
        console.log(Swiper);
        this.canvasSliderElement = this.el.querySelector('[data-sh-gallery-slider="canvas"]')
        this.thumbnailSliderElement = this.el.querySelector('[data-sh-gallery-slider="thumbnails"]')
        this.thumbnailSlider = tns({
            container: this.thumbnailSliderElement,
            axis: "vertical",
            nav: false,
            loop: false,
            rewind: true,
            items: 4
        })
        this.canvasSlider = tns({
            container: this.canvasSliderElement,
            nav: false,
            loop: false,
            rewind: true,
        })
    }
}