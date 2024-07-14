**Example**
``` twig
{% sw_extends '@Storefront/storefront/page/checkout/summary.html.twig' %}

{% block page_checkout_summary_inner %}
    {% sw_include '@Storefront/shogun/component/cart/summary.html.twig' with {
        summary: summary
    } only %}
{% endblock %}
```