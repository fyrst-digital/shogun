# Shogun - Boost up your Shopware 6 theme development
This Bundle brings components, twig extensions and scss utilities to your theme development. All functions in this bundle are opt-in. So you can include only what you need. With Shogun you spend more time in building instead of fixing.
You can setup Shogun as a project based bundle or you can use it as dependency in a specifiy Plugin. The advantage for you as a developer or an agency is that no third party dependecy is shown to your customer in the admin panel.

## Install and setup as project based bundle
Add this bundle to your Shopware 6 project via composer `composer require fyrst/shogun`

Check your `config/bundles.php` to activate the bundle

``` php
return [
    ...
    Fyrst\ShogunBundle\ShogunBundle::class => ['all' => true]
    ...
];
```

Now you can use all components from Shogun in your Project

## Install and setup as plugin dependency
As a plugin or theme developer you can add Shogun as a dependency to your plugin.
To do so your need to require `fyrst/shogun` in your plugin `composer.json`.

``` json
{
    "name": "acme/awesome-theme",
    "type": "shopware-platform-plugin",
    ...
    "require": {
        "fyrst/shogun": "^2"
    },
}
```

After that you have to set it as additional bundle in your plugin class and set composer commands to true

```php
<?php

declare(strict_types=1);

namespace Acme\AwesomeTheme;

use Shopware\Core\Framework\Plugin;
use Shopware\Storefront\Framework\ThemeInterface;
use Shopware\Core\Framework\Parameter\AdditionalBundleParameters;
use Fyrst\ShogunBundle\ShogunBundle;

class AcmeAwesomeTheme extends Plugin implements ThemeInterface
{

    public function getAdditionalBundles(AdditionalBundleParameters $parameters): array
    {
        return [
            new ShogunBundle(),
        ];
    }

    public function executeComposerCommands(): bool
    {
        return true;
    }
}
```

Now just install and activate your plugin and you are ready to go.

## Shogun as dependency

### Resolve Shogun Bundle in your Theme

Shogun is aliased in the storefront webpack config. So you can import Javascript modules from Shogun like this:  
`import ...`

In SCSS you can import utilities from Shogun like this:  
`@import '~/shogun/scss/mixins/vars'`

Notice that at the moment you can only import SCSS styles only in a theme because of the scssphp compiler. You also have to resolve shogun in your theme config. So change your `theme.json` style section from:

``` json
{
    "style": [
        "app/storefront/src/scss/base.scss"
    ]
}
```

To:

``` json
{
    "style": [
        {
            "app/storefront/src/scss/base.scss": {
                "resolve": {
                    "shogun": ""
                }
            },
        }
    ]
}
```
