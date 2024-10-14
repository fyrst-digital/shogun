# unreleased

## Breaking changes
- The bootstrap style inclusion is now opt-in. We removed it from theme.json and just provide a `shogun-bootstrap` alias that points to `app/storefront/node_modules/bootstrap/`.
  That means from now on you must include the bootstrap styles in your custom themes `base.scss` (**not the `theme.json`**). 
  Why we are making this? Better control what bootstrap components you want to include and override handling, make use of Bootstraps utilities API.
  So the `@import` in you custom theme `base.scss` could look like this:
  ``` scss
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

  Also you can only include single Bootstrap script modules in your `main.js` if you start from scratch (without `@Storefront` script dependecy in your `theme.json`)
- Rename `account/account-widget` component to `account/action`

## Changelog
- Add `$enable-shogun-spacers` setting with default `false`. Must be opt-in in custom theme
- Change bootstrap inclusion to be opt-in. See `Breaking changes` for details.
- Add font-size utility `~shogun/utilites/font-size`
- Rename `account/account-widget` component to `account/action`

# 1.3.0

## Breaking changes
- Removal of some CSS classes in `search/suggest-item` component
- Rename item pricing Twig block in `search/suggest-item` component because of typo error

## Changelog
- Decorating `ThemeFileResolver` to add `ThemeResolveFilesEvent` which can be used to modify theme scripts and styles file collection
- `search/suggest-item` component changes
  - Change to programatic CSS class definition
  - Removal of some CSS classes. **This could be breaking in your custom theme**. Review the search suggest layout and set needed classes.
  - Add more Twig blocks
  - Add CSS property `product-image-max-w` to image element
- Change webpack config to set an alias for Splide dependecy

# 1.2.10

## Changelog
- Change checkout-progress component styling from grid to flexbox
- Add npm install storefront script to composer, which will be triggered on post-install and post-update

# 1.2.9

## Changelog
- Add cart-title font size and weight CSS properties
- Add cart-summary-item color CSS properties
- Add method-option name and description color CSS properties

# 1.2.8

## Changelog
- Add line-item component for predictable template type control

# 1.2.7

## Changelog
- Fix gallery-slider arrow controls behavior and style

# 1.2.6

## Changelog
- Fix gallery-slider focus mode if there are no hidden slides

# 1.2.5

## Changelog
- Remove swiper-slider, add splide-slider and rework gallery-slider component
- Set color and size properties in product/action-wishlist component. Set btn-icon-size CSS property to wishlist button
- Add optional form attribute to quantit-input component
- Adjust webpack config

# 1.2.4

## Changelog
- Remove @Plugins keyword to `style` and `script` property of theme config

# 1.2.3

## Changelog
- Add 'percent' icon

# 1.2.2

## Changelog
- Add @Plugins keyword to `style` and `script` property of theme config

# 1.2.1

## Changelog
- Add more icons
- Change webpack config

# 1.2.0

Since this release breaks CSS Styling that could be affect a custom theme it is threated as a minor version.

## Changelog
- **Breaking:** Remove `g-col` utility extend from `.filter-panel-item` (_filter.scss) because it produces strange extend behavior. Also defining columns should be a matter of custom theme.
- **Breaking:** Remove `.footer-link` from style module
- Add `--footer-color` to `.footer-main`
- Add CSS properties to `a` elements within `.footer-main`
- Hide `.filter-panel-active-container` if there are no child elements
- Switch bootstrap classes for `header-actions-col` from template to SCSS styling
- Remove orphaned closing tag in `buy-form` template