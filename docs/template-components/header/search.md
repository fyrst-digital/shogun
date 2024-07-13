**Example implementation**
``` twig
{% sw_extends '@Storefront/storefront/layout/header/header.html.twig' %}

{% block layout_header_search %}
    <div class="header-search-col">
        {% sw_include '@Storefront/shogun/component/header/search.html.twig' %}
    </div>
{% endblock %}
```