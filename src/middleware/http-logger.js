import Debug from 'debug';

const debugHttp = new Debug('express:http');

export default (request, response, next) => {
  debugHttp(`${request.method} ${request.url}`);
  debugHttp(`body: ${JSON.stringify(request.body)}`);
  next();
};
