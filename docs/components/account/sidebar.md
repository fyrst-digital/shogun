**Example**
``` twig
{% sw_extends '@Storefront/storefront/page/account/sidebar.html.twig' %}

{% block page_account_sidebar_inner %}
    <div class="account-aside">
    
        {% block page_account_sidebar_header %}
        {% endblock %}
        {% block page_account_sidebar_menu %}
            {% block shogun_component_account_dropdown_user_actions %}
                {% sw_include '@Storefront/shogun/component/account/user-actions.html.twig' with {
                    activeRoute: activeRoute
                } %}
            {% endblock %}
        {% endblock %}
        {% block page_account_sidebar_footer %}
        {% endblock %}
    </div>
{% endblock %}
```