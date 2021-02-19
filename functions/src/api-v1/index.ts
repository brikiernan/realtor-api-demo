import * as functions from 'firebase-functions';

export default async (request: functions.https.Request, response: functions.Response) => {
  const express = await import('express');
  const { graphqlHTTP } = await import('express-graphql');
  const { schema } = await import('../schema');

  const app = express();

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true
    })
  );

  return app(request, response);
};
