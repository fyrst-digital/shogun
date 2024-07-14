**Example**
``` twig
{% sw_extends '@Storefront/storefront/page/account/index.html.twig' %}

{% block page_account_overview_main %}
    <div class="grid">
        {% block page_account_overview_profile %}

            {% block page_account_overview_profile_card %}
                {% sw_include '@Storefront/shogun/component/account/personal-card.html.twig' %}
            {% endblock %}

        {% endblock %}

        {% block page_account_overview_payment %}

            {% block page_account_overview_payment_card %}
                {% sw_include '@Storefront/shogun/component/account/payment-info-card.html.twig' %}
            {% endblock %}

        {% endblock %}
    </div>
{% endblock %}
```