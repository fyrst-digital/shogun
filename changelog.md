# 1.5.0

Since there are breaking changes, this will be a minor release.

## Breaking Changes

We introduce a new navigation flyout navigation that works async and on demand. **Therefore things have changed in navigation templates and styling.** most breaking is the removal of navigation styles and a rework of the `navigation/flyout` and `navigation/main` component template.

## Changelog

- **Style**: Remove navigation skin/minimal styling
- **Component**: Rework `navigation/flyout` and `navigation/main` template
- **Component**: Adding `navigation/categories` template
- **Javascript**: Adding `navigation-flyout` module to handle the new flyout navigation behavior

# 1.4.0

Since there are breaking changes, this will be a minor release.

## Breaking Changes

- The Bootstrap style inclusion is now opt-in. We removed it from `theme.json` and provide a `shogun-bootstrap` alias that points to `app/storefront/node_modules/bootstrap/`.
  This means you must include the Bootstrap styles in your custom theme's `base.scss` (**not in the `theme.json`**).
  Why are we making this change? To have better control over which Bootstrap components you include and how you override them, as well as to utilize Bootstrap's utilities API.
  So, the `@import` statements in your custom theme's `base.scss` should look like this:
  
  ```scss
  /** Bootstrap dependencies **/
  @import '~shogun-bootstrap/scss/bootstrap';

  /** Shogun dependencies **/
  @import '~shogun/scss/utilities/index';
  @import '~shogun/scss/modules/index';
  @import '~shogun/scss/components/index';
  @import '~shogun/scss/icons';
  @import '~shogun/scss/tiny-slider';
  @import '~shogun/scss/skin/minimal/index';
  ```

  Additionally, you can only include single Bootstrap script modules in your `main.js` if you start from scratch (without the `@Storefront` script dependency in your `theme.json`).

- Rename `account/account-widget` component to `account/action`.

## Changelog

- **Style**: Add `$enable-shogun-spacers` setting with default `false`. Must be opt-in in custom theme.
- **Style**: Change Bootstrap inclusion to be opt-in. See `Breaking Changes` for details.
- **Style**: Add font-size utility `~shogun/utilities/font-size`.
- **Style**: Add `form` module.
- **Style**: Overall improvement of styling and CSS property definitions.
- **Style**: Extend icons.
- **Style**: Add property-only icon build script `build.icons-property.mjs`. Useful if you want to build only the SVG CSS property of an icon.
- **Component**: Rename `account/account-widget` component to `account/action`.
- **Component**: Improve `wishlist/action`, add `showLabel` property.
- **Component**: Add `search/action`.
- **Component**: Add `search/form`.
- **Component**: Add `navigation/main`.
- **Component**: Add `filter/button`.
- **Component**: Add `product/tax`.
- **Component**: Add `product/review`.
- **Component**: Add `account/card`.
- **Component**: Add `card`.
- **Component**: Improve `order/item`.
- **Component**: Deprecate `product/buy-container`.
- **Component**: Implement CSS class definitions in `filter` and `product-box`.
- **Component**: Improve `action` components in general.
- **Twig**: Add `sh_define_classes` Twig function to simplify and streamline CSS class definitions in Twig templates.
- **Twig**: Add `sh_values_length` Twig filter. It's like the `length` filter but ignores entries that have null values.
- **Twig**: Add `address_form` macro that handles repetitive input markup in address forms.

# 1.3.0

## Breaking Changes

- Removal of some CSS classes in `search/suggest-item` component.
- Rename item pricing Twig block in `search/suggest-item` component due to a typo error.

## Changelog

- Decorate `ThemeFileResolver` to add `ThemeResolveFilesEvent`, which can be used to modify theme scripts and styles file collection.
- `search/suggest-item` component changes:
  - Change to programmatic CSS class definitions.
  - Removal of some CSS classes. **This could be breaking in your custom theme**. Review the search suggest layout and set necessary classes.
  - Add more Twig blocks.
  - Add CSS property `product-image-max-w` to image element.
- Change webpack config to set an alias for Splide dependency.

# 1.2.10

## Changelog

- Change `checkout-progress` component styling from grid to flexbox.
- Add `npm install storefront` script to composer, which will be triggered on post-install and post-update.

# 1.2.9

## Changelog

- Add cart-title font size and weight CSS properties.
- Add cart-summary-item color CSS properties.
- Add method-option name and description color CSS properties.

# 1.2.8

## Changelog

- Add `line-item` component for predictable template type control.

# 1.2.7

## Changelog

- Fix `gallery-slider` arrow controls behavior and style.

# 1.2.6

## Changelog

- Fix `gallery-slider` focus mode if there are no hidden slides.

# 1.2.5

## Changelog

- Remove `swiper-slider`, add `splide-slider`, and rework `gallery-slider` component.
- Set color and size properties in `product/action-wishlist` component. Set `btn-icon-size` CSS property to wishlist button.
- Add optional `form` attribute to `quantity-input` component.
- Adjust webpack config.

# 1.2.4

## Changelog

- Remove `@Plugins` keyword from `style` and `script` properties of theme config.

# 1.2.3

## Changelog

- Add 'percent' icon.

# 1.2.2

## Changelog

- Add `@Plugins` keyword to `style` and `script` properties of theme config.

# 1.2.1

## Changelog

- Add more icons.
- Change webpack config.

# 1.2.0

Since this release breaks CSS styling that could affect a custom theme, it is treated as a minor version.

## Changelog

- **Breaking**: Remove `g-col` utility extend from `.filter-panel-item` (`_filter.scss`) because it produces strange extend behavior. Also, defining columns should be handled by the custom theme.
- **Breaking**: Remove `.footer-link` from style module.
- Add `--footer-color` to `.footer-main`.
- Add CSS properties to `a` elements within `.footer-main`.
- Hide `.filter-panel-active-container` if there are no child elements.
- Switch Bootstrap classes for `header-actions-col` from template to SCSS styling.
- Remove orphaned closing tag in `buy-form` template.
