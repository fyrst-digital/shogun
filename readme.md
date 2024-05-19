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

## Clean Bootstrap styling
Shogun brings the very basic Bootstrap styles without adding additional styling. Just add it to the style property of your `theme.json`:

``` json
{
    "style": [
        "@ShogunBundle",
        "app/storefront/src/scss/base.scss"
    ],
}
```

## Template components
You can include template components from Shogun like this:

``` twig
{% sw_include '@Storefront/shogun/layout/header/header.html.twig' %}
```

Note that all Shogun templates stores under the `/shogun/` directory.

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

## Icons
Icons will be pure SVG in CSS icons because of some advantages over SVG in HTML.  
All icons coming from shogun are prefixed with `sh` so the common class for shogun icons is `.sh-icon`.
@todo: There will be a `sh_icon('name')` twig function that will render `<span class="sh-icon icon-name"></span>` to simplify markup.