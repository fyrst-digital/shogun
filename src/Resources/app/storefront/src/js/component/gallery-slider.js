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
            focus: 'center',
            isNavigation: true,
            arrows: false,
            pagination: false,
            wheel: true,
        })

        this.canavsSlider.sync(this.thumbnailSlider)
        this.canavsSlider.mount()
        this.thumbnailSlider.mount()

        this.canavsSlider.on('resize', () => {
            this.setHeight()
        })
    }

    setHeight() {
        this.thumbnailContainerElement.style.height = `${this.canavsSliderElement.offsetHeight}px`
    }
}