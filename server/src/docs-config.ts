import * as swaggerJsdoc from 'swagger-jsdoc'
import { Options } from 'swagger-jsdoc'

const options: Options = {
    swaggerDefinition: {
        openapi: '3.0.1',
        components: {},
        info: {
            title: 'wige-dev-site-api',
            version: '1.0.0',
            description: 'back-end API for wige-dev-site'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local environment'
            },
            {
                url: 'https://mystagingserver.com',
                description: 'Staging environment'
            },
            {
                url: 'https://myprodserver.com',
                description: 'Production environment'
            }
        ]
    },
    apis: [
        '**/v1/routes/*.js'
    ]
}

export const specs = swaggerJsdoc(options)