import { build } from './app';

const server = build();
const port = process.env.PORT || 3000;

server.listen(port, function (err, address) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
