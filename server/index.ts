import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';

import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import schema from './schema';

const app = express();
const PORT = 3000;

app.use(express.static(appRoot('dist/public')));

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.get('*', (req, res) => {
  res.sendFile(appRoot('client/index.html'));
});

app.listen(PORT, () => console.log(
  `API Server is now running on http://localhost:${PORT}`
));

function appRoot(relPath: string): string {
  return path.join(__dirname, '../../', relPath);
}
