# basic-express-server

This project is a basic Express server implementation with modularization, middleware usage, and tests.

## Testing

The tests cover the following scenarios:

- 404 on a bad route.
- 404 on a bad method.
- 500 if no name is provided in the query string.
- 200 if the name is in the query string.
- Given a name in the query string, the output object is correct.
  