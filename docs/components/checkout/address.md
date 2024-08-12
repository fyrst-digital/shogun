**Example**
``` twig
{% sw_extends '@Storefront/storefront/page/checkout/address/index.html.twig' %}

{% block page_checkout_address_login_toggle %}
{% endblock %}

{% block page_checkout_address_login %}
    {% block page_checkout_address_login_card %}
        {% sw_include '@Storefront/shogun/component/account/login-card.html.twig' %}
    {% endblock %}
{% endblock %}

{% block page_checkout_address_register_card %}
    {% sw_include '@Storefront/shogun/component/account/register-card.html.twig' with {
        cardTitle: 'checkout.addressRegisterCardTitle'|trans|sw_sanitize,
        guestMode: {
            active: true,
            default: true
        }
    } %}
{% endblock %}

{% block page_checkout_address_products_header %}
    {% sw_include '@Storefront/shogun/component/cart/heading.html.twig' with {
        productsQuantity: page.cart.lineItems|length
    } only %}
{% endblock %}

{% block page_checkout_address_product_summary_item %}
    {% sw_include '@Storefront/shogun/component/line-item/' ~ lineItem.type ~ '.html.twig' with {
        lineItem: lineItem,
        autoSubmit: true
    } only %}
{% endblock %}
```