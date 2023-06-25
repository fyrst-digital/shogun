import deepmerge from 'deepmerge';
import BaseSliderPlugin from  'src/plugin/slider/base-slider.plugin';

export default class ShogunUspbarSlider extends BaseSliderPlugin {
    static options = deepmerge(BaseSliderPlugin.options, {
        containerSelector: '[data-uspbar-slider-container]',
        slider: {
            controls: false,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayButtonOutput: false,
            loop: false,
            items: 1,
            rewind: true,
            responsive: {
                sm: {
                    items: 2
                },
                md: {
                    items: 3
                },
                lg: {
                    items: 3
                },
                xl: {
                    items: 4
                },
                xxl: {
                    items: 5,
                    disable: true
                }
            }
        }
    });
}