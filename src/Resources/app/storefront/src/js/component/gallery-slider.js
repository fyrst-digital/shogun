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
        thumbnailSelector: '[data-sh-gallery-slider="thumbnail"]',
        nextSelector: '[data-sh-slider-control="next"]',
        prevSelector: '[data-sh-slider-control="prev"]'
    }

    init() {
        this.activeSlide = 0
        this.canvasContainerElement = this.el.querySelector(this.options.canvasContainerSelector)
        this.canvasElement = this.el.querySelector(this.options.canvasSelector)
        this.canvasNextButton = this.canvasContainerElement.querySelector(this.options.nextSelector)
        this.canvasPrevButton = this.canvasContainerElement.querySelector(this.options.prevSelector)
        
        this.thumbnailsElement = this.el.querySelector(this.options.thumbnailsSelector)
        this.thumbnailElements = this.thumbnailsElement.querySelectorAll(this.options.thumbnailSelector)
        this.setThumbnailActive(this.activeSlide)

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

        this.thumbnailElements.forEach((thumbnail, index) => {
            thumbnail.addEventListener("click", (e) => {
                this.canvasSlider.slideTo(index)
            })
        });

        this.canvasSlider.on("slideChange", (slider) => {
            this.resetThumbnailsActiveClass()
            this.setThumbnailActive(slider.activeIndex)
        })
    }

    setThumbnailActive(index) {
        this.activeSlide = index
        this.activeThumbnail = this.thumbnailElements.item(index)
        this.activeThumbnail.classList.add("active")
    }

    resetThumbnailsActiveClass() {
        this.thumbnailElements.forEach((thumbnail) => {
            thumbnail.classList.remove("active")
        })
    }
}