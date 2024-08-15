
## Template adjustment in custom theme
Add the following to your custom theme's `/storefront/block/cms-block-gallery-buybox.html.twig`

``` twig
{% sw_extends '@Storefront/storefront/block/cms-block-gallery-buybox.html.twig' %}

{# this includes the gallery cms-element component #}
{% block block_gallery_buybox_column_left_inner %}  
    {% set templatePath = 'storefront' %}

    {% if element.type is same as('image-gallery') %}
        {% set templatePath = 'shogun' %}
    {% endif %}

    {% sw_include '@Storefront/' ~ templatePath ~ '/element/cms-element-' ~ element.type ~ '.html.twig' ignore missing
    with {
        isProduct: config.sliderItems.value == 'product.media' and config.sliderItems.source == 'mapped',
        startIndexThumbnails: 1,
        startIndexSlider: 1
    } %}
{% endblock %}

{# this includes the buybox cms-element component #}
{% block block_gallery_buybox_column_right_inner %}
    {% set templatePath = 'storefront' %}

    {% if element.type is same as('buy-box') %}
        {% set templatePath = 'shogun' %}
    {% endif %}

    {% sw_include '@Storefront/' ~ templatePath ~ '/element/cms-element-' ~ element.type ~ '.html.twig' ignore missing %}
{% endblock %}

```

# Inject JS Plugin

In your `main.js` you have to include the relates Javascrpt Plugin to make the gallery work

``` js
const PluginManager = window.PluginManager;
PluginManager.register('ShGallerySlider', () => import('shogun/js/component/gallery-slider'), '[data-sh-component="gallery-slider"]')
```