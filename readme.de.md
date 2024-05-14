# Shogun - Boost up your Shopware 6 theme development
This Bundle brings some boilerplates, components and styling to your theme development. All functions in this bundle are opt-in. So you can include only what you need

## Install and setup
Add this bundle to your Shopware 6 project via composer `composer require fyrst/shogun`

Check your `bundles.php` to activate the bundle

``` php
return [
    ...
    Fyrst\ShogunBundle\ShogunBundle::class => ['all' => true]
    ...
];
```
