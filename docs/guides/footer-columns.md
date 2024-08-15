## Extend from Shoguns footer column structure

Assume you want to create a new footer column `service.html.twig` inside your theme. You can extend from the `footer/_column.html.twig` component:

In your theme component `@Storefront/storefront/layout/footer/columns/service.html.twig` include this base code:

``` twig
{% sw_extends '@Storefront/shogun/component/footer/_column.html.twig' %}

{% block shogun_component_footer_column_headline_title %}
    This is the footer column headline
{% endblock %}

{% block shogun_component_footer_column_content %}
    This is the footer column content
{% endblock %}
```

## Add adiitional CSS classes

``` twig
{% sw_include '@Storefront/storefront/layout/footer/columns/service.html.twig' with {
    classes: {
        column: ['footer-column-service']
    }
} %}
``` 

### Default classes object

```
{
    column: ['footer-column'],
    headline: ['footer-column-headline', 'footer-headline'],
    content: ['footer-column-content-container']
}
```

## Navigation column

We provide a column for the generic shopware footer navigation. It can be called with the navigation `for` loop like:

``` twig
{% sw_extends '@Storefront/storefront/layout/footer/footer.html.twig' %}

...
{% for root in page.footer.navigation.tree %}
    {% sw_include '@Storefront/shogun/component/footer/column/navigation.html.twig' with {
        navigation: root
    } only %}
{% endfor %}
...
```