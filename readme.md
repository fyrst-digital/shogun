# Shogun - Boost up your Shopware 6 theme development
This Bundle brings some boilerplates, components and styling to your theme development. All functions in this bundle are opt-in. So you can include only what you need

## Install and setup
Add this bundle to your Shopware 6 project via composer `composer require fyrst/shogun`

Check your `config/bundles.php` to activate the bundle

``` php
return [
    ...
    Fyrst\ShogunBundle\ShogunBundle::class => ['all' => true]
    ...
];
```

## Include clean Bootstrap styling in your Theme config
Shogun brings the very basic Bootstrap styles without adding additional styling. Just add it to the style property of your `theme.json`:

``` json
{
    "style": [
        "@ShogunBundle",
        "@Plugins",
        "app/storefront/src/scss/base.scss"
    ],
}
```

## Include style components in your Theme scss files
`~shogun` serves as an alias to import specific files from Shogun. This alias points to `src/Resources/app/storefront/src/`. Because it points to the `src` directory to be unified with js imports, you always have to add the scss path. This results in SCSS import statements like `@import '~shogun/scss'` in your custom theme. This works in the build (`bin/build-storefront.sh`) and also in the watch (`bin/watch-storefront.sh`) process.
```scss
@import '~shogun/scss/some-file-from-shogun';
@import '~shogun/scss/some-folder/some-file';
```

### Style modules
Style modules provide styling for shopware specific components. For example listing, product components, search and so on. Mostly this styles add CSS variables to shopwares storefront default classes you can and should use to customize your theme. This approach will avoid heavy CSS.  
As always these modules are opt-in. You can set them all in once with `@import '~shogun/modules/index'` or you can import specific modules with `@import '~shogun/modules/listing'` for example.

#### shogun/modules/listing
Provides additional CSS variables to listing classes

### Icons
Icons will be pure SVG in CSS icons because of some advantages over SVG in HTML.  
All icons coming from shogun are prefixed with `sh` so the common class for shogun icons is `.sh-icon`.
There is also a `sh_icon('name')` twig function that will render `<span class="sh-icon icon-name"></span>` to simplify markup.
As always the icon styles are opt-in and can be included with `@import '~shogun/icons'`. The used iconset is **phosphor**. But with iconify you can provide your own SVG in CSS icons.

## Include template components in your Theme config
To use the Shogun template components you have to include it in your `theme.json` Theme config under the `views` property:

``` json
{
    "views": [
        "@Storefront",
        "@ShogunBundle",
        "@YourTheme",
        "@Plugins"
    ]
}
```

## Include javascript modules
As mentioned in the style components section there is the `shogun` alias pointing to Shoguns `src` directory. To import javascript modules from Shogun you can import them like this:
``` js
import 'shogun/js/test'
```
This works in build and watch process as well.

## Template components
You can include template components from Shogun like this:

``` twig
{% sw_include '@Storefront/shogun/layout/header/header.html.twig' %}
```

Note that all Shogun templates stores under the `/shogun/` directory.

### Third-party plugin compatility
Most of Shoguns template components extends from shopwares default components via `sw_extends`. So in theory this includes plugin templates also. But in the real world plugin templates are overriden by the Shogun template component if the same block is present.

Example third-plugin template (box-standard.html.twig):
``` twig
{% sw_extends '@Storefront/storefront/component/product/card/box-standard.html.twig' %}

{% block component_product_box %}

    I come from third-part plugin

    {{ parent() }}  
{% endblock %}
```

Shogun Template component (product/box/default.html.twig)
```
{% sw_extends '@Storefront/storefront/component/product/card/box-standard.html.twig' %}

{% block component_product_box %}
    ....
{% endblock %}
```

As a result `I come from third-part plugin` will be overriden. In best case (this should be convinience dear developer) the third-party plugin provides a wrapper block:
``` twig
{% sw_extends '@Storefront/storefront/component/product/card/box-standard.html.twig' %}

{% block component_product_box %}

    {% block awesome_extension_block %}
        I come from third-part plugin
    {% endblock %}

    {{ parent() }}  
{% endblock %}
```

Then you can reuse this block anywhere (if it's in the inheritance chain) with Twigs block function. for example `{{ block('awesome_extension_block') }}`

**However, Shogun is designed to be used as a Theme foundation in custom projects. So you have to handle the third-party plugin templates by yourself.**

### Programmatic CSS classes in components
Most of components CSS classes are programmatic. That means the classes are stored in an array and can be overriden by a new array or can be extended. So you don't need to touch the whole template if you want to override some CSS classes. Nor no need to override styles in your SCSS files.

Lets take the cookie banner component `shogun/component/cookie/cookie-permission.html.twig` for example. 
``` twig
<div
    class="{% block shogun_component_cookie_banner_classes %}{{cookieBannerClasses|join(' ')}}{% endblock %}"
    data-cookie-permission="true">
    ...
</div>
```

As you can see there are two major hookpoint. Number one is the `cookieBannerClasses` array. You can override it in your template inclusion. Number two is the wrapping block. So you can extend the component in your own template.
