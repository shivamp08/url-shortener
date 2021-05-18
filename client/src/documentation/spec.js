const Spec = {
  openapi: "3.0.4",
  info: {
    description:
      "The API endpoints documented below is all that is needed to communicate with the back-end server. Although there are only two endpoints, my goal with this project was to learn more about different tools that help document APIs, the example below was created using OpenAPI/SwaggerUI. The “try it out” option essentially does the same as the two input fields above, but in JSON format.",
    title: "Application Programming Interface (API)",
  },
  host: window.location.host,
  paths: {
    "/api/url/shrink": {
      post: {
        tags: ["URL"],
        summary: "creates short url",
        produces: ["application/json"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: Object,
                properties: {
                  longURL: {
                    type: String,
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "successful operation",
            content: {
              "application/json": {
                schema: {
                  type: Object,
                  properties: {
                    _id: {
                      type: String,
                    },
                    slug: {
                      type: String,
                    },
                    longURL: {
                      type: String,
                    },
                    shortURL: {
                      type: String,
                    },
                    date: {
                      type: String,
                    },
                    __v: {
                      type: String,
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "invalid long url",
          },
          500: {
            description: "server error",
          },
        },
      },
    },
    "/{slug}": {
      get: {
        tags: ["URL"],
        summary: "redirects to long url",
        produces: ["application/json"],
        parameters: [
          {
            name: "slug",
            in: "path",
            description: "ID of short url",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "successful redirection",
          },
          404: {
            description: "no url found",
          },
          500: {
            description: "server error",
          },
        },
      },
    },
  },
};

export default Spec;
