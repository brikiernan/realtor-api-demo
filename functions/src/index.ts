import * as functions from 'firebase-functions';

export const api_v1 = functions.https.onRequest(async (request, response) => {
  await (await import('./api-v1')).default(request, response);
});
