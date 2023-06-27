## Calling Storefront Javascript plugins from your Theme or Storefront Plugin

The Shogun Javascript storefront plugins are registered in the `webpack.config.js` as `@fyrst/shogun/plugins`. So you can use the plugins in all of your Themes and storefront plugins under that namespace. We not register any javascript plugin in the Shogun `main.js`. Why? Because we care the filesize of your javascript build. For example, you don't use the Uspbar component in your project. So you don't get it. If you need the component you have to implement [the Twig inclusion](placeholder-how-to-include-twig-components) and registration of the javascript plugin by yourself. You can register plugins (even your own javascript plugins) with the `definePlugins()` function of `@fyrst/shogun/plugins/core`.

## Register your plugins with `definePlugins()`

Why should you use this function to register your storefront javascript plugins? Because its simple and safe. It checks if the window object is present and if the plugin is already registered.  

Let's see an example with the Uspbar Plugin. In you `main.js` you can import `definePlugins()` from `@fyrst/shogun/plugins` and provide an object with your plugins.

``` js
import { definePlugins } from "@fyrst/shogun/plugins/core";
import ShogunUspbarSlider from "@fyrst/shogun/plugins/usp-bar/slider";

definePlugins([
    {
        name: 'ShogunUspbarSlider',
        class: ShogunUspbarSlider,
        selector: '[data-shogun="uspbar-slider"]' 
    }
]);
```

Thats it. Here is a reference of the full plugin Object.  

``` js
{
    name: 'PluginName', // string: name of the plugin. used as identifier on the plugin registry
    class: ShogunUspbarSlider, // class: the plugin class with the logic
    selector: '[data-shogun="uspbar-slider"]'  // (optional) string: will bind the plugin on given selector. if not provided it will bind on the document
    options: {...} // (optional) object: provide plugin options
}
```