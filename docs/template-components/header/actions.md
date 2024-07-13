**Example implementation**
``` twig
{% sw_extends '@Storefront/storefront/layout/header/header.html.twig' %}

{% block layout_header_actions %}
    {% sw_include '@Storefront/shogun/component/header/actions.html.twig' %}
{% endblock %}
```