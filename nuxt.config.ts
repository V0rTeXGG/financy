export default defineNuxtConfig({
    // Modules
    modules: ['@nuxt/eslint', 'nuxt-icons', '@pinia/nuxt', '@primevue/nuxt-module'],
    components: [
        {
            path: '~/components/ui',
            extensions: ['.vue'],
            pathPrefix: false,
            global: true,
        },
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            title: 'Fanancy',
        },
    },
    // Global CSS
    css: [
        '~/assets/scss/common.scss',
    ],
    runtimeConfig: {
        PROXY_URL: process.env.PROXY_URL,
        public: {
            PROXY_URL: process.env.PROXY_URL,
        },
    },

    experimental: {
        emitRouteChunkError: 'automatic',
        inlineRouteRules: true,
    },
    compatibilityDate: '2025-07-15',

    // Vite
    vite: {
        vue: {
            script: {
                defineModel: true,
                propsDestructure: true,
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "~/assets/scss/shared.scss" as *;
                    `,
                },
            },
        },
    },
});
