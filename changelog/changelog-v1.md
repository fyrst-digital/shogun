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