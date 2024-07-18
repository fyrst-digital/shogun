import Plugin from 'src/plugin-system/plugin.class'
// import { tns } from 'tiny-slider';
import Swiper from 'swiper';

export default class GallerySlider extends Plugin {
    /**
     * default slider options
     *
     * @type {*}
     */
    static options = {
        canvasContainerSelector: '.gallery-slider-canvas-container',
        canvasSelector: '[data-sh-gallery-slider="canvas"]',
        thumbnailsSelector: '[data-sh-gallery-slider="thumbnails"]',
        nextSelector: '[data-sh-slider-control="next"]',
        prevSelector: '[data-sh-slider-control="prev"]'
    }

    init() {
        this.canvasContainerElement = this.el.querySelector(this.options.canvasContainerSelector)
        this.canvasElement = this.el.querySelector(this.options.canvasSelector)
        this.canvasNextButton = this.canvasContainerElement.querySelector(this.options.nextSelector)
        this.canvasPrevButton = this.canvasContainerElement.querySelector(this.options.prevSelector)
        
        this.canvasSlider = new Swiper(this.canvasElement, {
            loop: false,
            rewind: true,
        })

        this.canvasNextButton.addEventListener("click", (e) => {
            this.canvasSlider.slideNext();
        })

        this.canvasPrevButton.addEventListener("click", (e) => {
            this.canvasSlider.slidePrev();
        })

        console.log(this.canvasNextButton, this.canvasSlider)
    }
}