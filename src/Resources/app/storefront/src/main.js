const PluginManager = window.PluginManager

PluginManager.register(
    'ShGallerySlider', 
    () => import('shogun/js/component/gallery-slider'), 
    '[data-sh-component="gallery-slider"]'
)