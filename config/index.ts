const baseConfig = {
    baseUrl: 'http://localhost:9010',
};

const config = {
    development: {
        ...baseConfig,
    },
    staging: {
        ...baseConfig,
    },
    release: {
        ...baseConfig,
    },
    production: {
        ...baseConfig,
    },
};

export default config;