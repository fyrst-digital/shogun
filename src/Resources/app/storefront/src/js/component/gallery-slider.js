import Plugin from 'src/plugin-system/plugin.class'

export default class GallerySlider extends Plugin {
    /**
     * default slider options
     *
     * @type {*}
     */
    static options = {
        canavsSliderSelector: '.gallery-slider-canvas',
        thumbnailSliderSelector: '.gallery-slider-thumbnails',
        thumbnailContainerSelector: '.gallery-slider-thumbnails-container',
    }

    init() {
        this.canavsSliderElement = this.el.querySelector(this.options.canavsSliderSelector)
        this.thumbnailSliderElement = this.el.querySelector(this.options.thumbnailSliderSelector)
        this.thumbnailContainerElement = this.el.querySelector(this.options.thumbnailContainerSelector)
        this.setHeight()

        this.canavsSlider = new Splide.Splide(this.canavsSliderElement, {
            rewind: true,
            pagination: false,
            arrows: true,
        })
        
        this.thumbnailSlider = new Splide.Splide(this.thumbnailSliderElement, {
            fixedWidth: 64,
            fixedHeight: 64,
            heightRatio: 1,
            direction: 'ttb',
            rewind: true,
            gap: 10,
            focus: 1,
            trimSpace: true,
            isNavigation: true,
            arrows: false,
            pagination: false,
            wheel: true,
        })

        this.thumbnailSlider.on('ready', (v) => {
            this.changeFocusMode()
        })

        this.canavsSlider.sync(this.thumbnailSlider)
        this.canavsSlider.mount()
        this.thumbnailSlider.mount()

        this.canavsSlider.on('resize', () => {
            this.setHeight()
            this.changeFocusMode()
        })

    }

    setHeight() {
        this.thumbnailContainerElement.style.height = `${this.canavsSliderElement.offsetHeight}px`
    }

    changeFocusMode() {
        const hiddenSlides = this.thumbnailSlider.Components.Elements.slides.filter((slide) => {
            return !slide.classList.contains('is-visible')
        })
        
        if (hiddenSlides.length < 1) {
            /**
             * @type {HTMLElement}
             */
            this.thumbnailSlider.options = {
                focus: false
            }
        } else {
            this.thumbnailSlider.options = {
                focus: true
            }
        }
    }
}