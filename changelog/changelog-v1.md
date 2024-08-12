# unreleased

Since this release breaks CSS Styling that could be affect a custom theme it is threated as a minor version.

## Changelog

- Remove `g-col` utility extend from `.filter-panel-item` (_filter.scss) because it produces strange extend behavior. Also defining columns should be a matter of custom theme.
- Hide `.filter-panel-active-container` if there are no child elements
- Switch bootstrap classes for `header-actions-col` from template to SCSS styling