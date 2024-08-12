export default {
    // site-level options
    title: 'Shogun',
    description: 'Just playing around.',
    themeConfig: {
        // theme-level options
        nav: [
            { text: 'Guides', link: '/guides' },
            { text: 'Components', link: '/components' }
        ],
        sidebar: {
            '/components/': [
                {
                    text: 'Components',
                    items: [
                        { text: 'Index', link: '/components/' }
                    ]
                }
            ],
            '/guides/': [
                {
                    text: 'Guides',
                    items: [
                        { text: 'Product Gallery', link: '/guides/product-gallery' }
                    ]
                }
            ],
        }
    }
  }