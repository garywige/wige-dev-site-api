import * as swaggerJsdoc from 'swagger-jsdoc'
import { Options } from 'swagger-jsdoc'

const options: Options = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: 'wige-dev-site-api',
      version: '1.0.0',
      description: 'back-end API for wige-dev-site',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local environment',
      },
    ],
    components: {
      schemas: {
        ContactUsForm: {
          type: 'object',
          properties: {
            email: {
              type: 'string',
            },
            subject: {
              type: 'string',
            },
            message: {
              type: 'string',
            },
          },
        },
        ServerMessage: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
            },
          },
        },
      },
      responses: {
        BadFormatError: {
          description: 'Request body is improperly formatted',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ServerMessage',
              },
            },
          },
        },
        InternalError: {
          description: 'An internal server error occurred',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ServerMessage',
              },
            },
          },
        },
      },
    },
    paths: {
      '/v1/contactus': {
        post: {
          description: 'Sends an email to site owner containing the specified content.',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ContactUsForm',
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/ContactUsForm',
                  },
                },
              },
            },
            400: {
              description: 'Request body is in improper format',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/responses/BadFormatError',
                  },
                },
              },
            },
            500: {
              description: 'Message failed to send',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/responses/InternalError',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ['**/v1/routes/*.js'],
}

export const specs = swaggerJsdoc(options)
