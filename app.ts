import { IncomingMessage, ServerResponse } from "http";

import * as Http from 'http';
import * as Url from 'url';

Http.createServer((req: IncomingMessage, res: ServerResponse) => {

  const data = Url.parse(req.url, true).query;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.write('HALLO');

}).listen(8080, () => {
  console.log(`Running API on port 8080...`);
});