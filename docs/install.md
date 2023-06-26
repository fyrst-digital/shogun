## install as static-plugin

``` bash
cd shopware-project/custom/static-plugins
git clone git@gitlab.com:fyrst/shogun.git FyrstShogunBundle
```

Now you can add it to your composer 

``` bash
composer require fyrst/shogun
```

## optional: enable the bundle

It should auto enabled in the `config/bundles.php` if you are using symfony flex. However, sometimes it can be necessary to enable it by yourself. So check your `config/bundle.php` for the follwing line and at it to the array.

``` php
return [
    ...
    FyrstShogun\FyrstShogun::class => ['all' => true]
    ...
];
```

## use as composer dependency in your plugin

If you want to use Shogun as a foundation of your theme you want to ship in the shopware store, you can do this as a composer dependency.  
...  

[More info in shopware doc]("https://developer.shopware.com/docs/guides/plugins/plugins/plugin-fundamentals/using-composer-dependencies")