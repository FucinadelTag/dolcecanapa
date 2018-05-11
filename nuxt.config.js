module.exports = {
    head: {
        title: 'Dolce Canapa - CBD',
        htmlAttrs: {
            lang: 'it',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700' },
            //{ rel: 'script', src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js' },
            //{ rel: 'script', src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js' , 'data-api-key':'ZTRhNzNmNTktMjU1My00YWZlLWExZDctNTczN2Y5NmM2NGNmNjM2NjE1Nzk1Njg1OTI3MzI5', id:'snipcart'},
            { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css' },
        ]
    },
    loading: { color: '#3B8070' },
    modules: [
        [
            'nuxt-sass-resources-loader',
            './assets/scss/variables.scss',
        ]
    ],
    css: [
        {src: '~/assets/scss/main.scss', lang: 'scss'}
    ],
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type)
            }
        }
    },
    serverMiddleware: [
        'redirect-ssl',
    ],
    plugins: [
        { src: '~plugins/iconFont.js', ssr: false },

    ],
    router: {
        middleware: ['ActiveMenu', 'getSettings']
    },
    build: {
        postcss: {
            plugins: {
                'postcss-custom-properties': false,
            }
        }
    }
}
