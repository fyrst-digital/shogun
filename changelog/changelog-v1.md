# 1.2.9

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