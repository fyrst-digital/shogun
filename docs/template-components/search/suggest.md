**Example**
``` twig
{% sw_extends '@Storefront/storefront/layout/header/search-suggest.html.twig' %}

{% block layout_search_suggest_results %}
    {% for product in page.searchResult %}
        {% block layout_search_suggest_result_product %}
            {% sw_include '@Storefront/shogun/component/search/suggest-item.html.twig' %}
        {% endblock %}
    {% endfor %}
{% endblock %}

{% block layout_search_suggest_result_total %}
    {% sw_include '@Storefront/shogun/component/search/suggest-summary.html.twig' %}
{% endblock %}
```

**Full search suggest example**
``` twig
{% sw_extends '@Storefront/storefront/layout/header/search-suggest.html.twig' %}

{% block layout_search_suggest %}
    {% sw_include '@Storefront/shogun/component/search/suggest.html.twig' %}
{% endblock %}
```