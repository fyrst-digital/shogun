const { PluginBaseClass } = window;
import deepmerge from 'deepmerge';

export default class NavigationFlyout extends PluginBaseClass {
    /**
     * default slider options
     *
     * @type {*}
     */
    static options = {
        /**
         * @description path to the navigation flyout controller
         * @type {?string}
         */
        path: null,
        /**
         * @description determinate the placement of the flyout in the DOM
         * @type {'after'|'before'}
         */
        placement: 'after', 
        /**
         * @description selector for the navigation items
         * @type {string}
         */
        itemSelector: '[data-nav-item]',
        /**
         * @description classes for the navigation container
         * @type {Array}
         */
        containerClasses: [],
        /**
         * @description delay for the flyout to close
         * @type {number}
         */
        delay: 500
    }

    _timeout = null

    init() {
        /**
         * merge options
         */
        if (this.el.dataset?.navigationFlyoutOptions) {
            this.options = deepmerge(this.options, JSON.parse(this.el.dataset.navigationFlyoutOptions))
        }

        this.navigationItems = this.el.querySelectorAll(this.options.itemSelector)

        this.cachedNavigations = []

        this.navigationContainer = this._createNavigationContainer()

        this.registerEvents()
    }

    registerEvents() {

        this.navigationItems.forEach((el) => {
            el.addEventListener('mouseover', this.onMouseOver.bind(this))
            el.addEventListener('mouseout', this.onMouseOut.bind(this))
        })

        this._attachNavigationContainerEvents()
    }

    onNavigationEnter(event) {

        console.log('onNavigationEnter', event)

        if (this._timeout) {
            clearTimeout(this._timeout)
            this._timeout = null
        }
    }

    onNavigationLeave(event) {
        console.log('onNavigationLeave', event.toElement, this.el.contains(event.toElement))

        if (!this.el.contains(event.toElement)) {
            //this._removeNavigationContainer()
        }
    }

    onMouseOver(event) {
        const navigationId = event.target.dataset?.navItem ?? null
        const navigation = this.cachedNavigations.find(item => item.id === navigationId)

        if (this._timeout) {
            clearTimeout(this._timeout)
            this._timeout = null
        }

        this.el.insertAdjacentElement('afterend', this.navigationContainer)

        if (navigationId && navigation === undefined) {
            fetch(`${this.options.path}?navigationId=${navigationId}`)
            .then(response => response.text())
            .then(content => {
                const parser = new DOMParser()
                const doc = parser.parseFromString(content, 'text/html')

                this.cachedNavigations.push({
                    id: navigationId,
                    element: doc.body.children[0]
                })

                this._addNavigationElement(doc.body.children[0]);
            })
            .catch(error => {
                console.error('Error:', error)
            })
        } else if (navigation) {
            this._addNavigationElement(navigation.element);
        } else {
            console.warn('No navigationId found. Request will not be send.')
        }
    }

    onMouseOut(event) {
        event.preventDefault()

        if (event.toElement !== this.navigationContainer) {
            // this._removeNavigationContainer(event)
        }
    }

    _createNavigationContainer() {
        const element = document.createElement('div');
        element.classList.add('navigation-flyout-container', ...this.options.containerClasses);
        element.innerHTML = '<div class="loader"></div>'
        return element
    }

    _addNavigationElement(element) {
        this.navigationContainer.innerHTML = element.innerHTML
    }

    _removeNavigationContainer() {
        this._timeout = setTimeout(() => {
            this.navigationContainer.remove()
            this.navigationContainer = this._createNavigationContainer()
            this._attachNavigationContainerEvents()
            this._timeout = null
        }, this.options.delay)
    }

    _attachNavigationContainerEvents() {
        this.navigationContainer.addEventListener('mouseover', this.onNavigationEnter.bind(this))
        this.navigationContainer.addEventListener('mouseout', this.onNavigationLeave.bind(this))
    }
}