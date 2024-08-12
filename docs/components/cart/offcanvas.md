**Examples**
``` twig
{% sw_extends '@Storefront/storefront/component/checkout/offcanvas-cart.html.twig' %}

{% block component_offcanvas_cart_header %}
    {% sw_include '@Storefront/shogun/component/cart/heading.html.twig' with {
        productsQuantity: page.cart.lineItems|length
    } only %}
{% endblock %}

{% block component_offcanvas_cart_flashbags %}
    {% for type, messages in app.flashes %}
        {% sw_include '@Storefront/shogun/component/alert.html.twig' with {
            type: type,
            list: messages
        } %}
    {% endfor %}
{% endblock %}

{% block component_offcanvas_cart_item %}
    {% sw_include '@Storefront/shogun/component/line-item/' ~ lineItem.type ~ '.html.twig' with {
        lineItem: lineItem,
        redirectTo: 'frontend.cart.offcanvas'
    } only %}
{% endblock %}

{% block component_offcanvas_summary %}
    {% sw_include '@Storefront/shogun/component/cart/summary.html.twig' with {
        summary: page.cart,
        showNetTotal: false,
        showTax: false,
        showGrandTotal: false,
    } only %}
{% endblock %}

{% block component_offcanvas_cart_actions_promotion_form %}
    {% sw_include '@Storefront/shogun/component/cart/promotion-form.html.twig' %}
{% endblock %}
```