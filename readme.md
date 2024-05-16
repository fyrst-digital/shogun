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