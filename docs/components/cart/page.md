**Examples**
``` twig
{% sw_extends '@Storefront/storefront/page/checkout/cart/index.html.twig' %}

{% block page_checkout_cart_add_promotion %}
    {% sw_include '@Storefront/shogun/component/cart/promotion-form.html.twig' %}
{% endblock %}

{% block page_checkout_cart_table_header %}
{% endblock %}

{% block page_checkout_cart_table_items %}
    <div class="line-item-grid">
        {{ parent() }}
    </div>
{% endblock %}

{% block page_checkout_item %}
    {% sw_include '@Storefront/shogun/component/line-item/' ~ lineItem.type ~ '.html.twig' with {
        lineItem: lineItem,
        autoSubmit: true
    } only %}
{% endblock %}

{% block page_checkout_aside_main %}
    {{ parent() }}

    {% block page_checkout_cart_aside_cart_actions %}
        <div class="side-card card">
            <div class="card-body">
                {% block page_checkout_cart_aside_cart_add_product %}
                    {% sw_include '@Storefront/shogun/component/cart/add-product-form.html.twig' %}
                {% endblock %}

                {% block page_checkout_cart_aside_cart_add_shipping_calculation %}
                    {% sw_include '@Storefront/shogun/component/cart/shipping-calculation.html.twig' %}
                {% endblock %}
            </div>
        </div>
    {% endblock %}
{% endblock %}
```