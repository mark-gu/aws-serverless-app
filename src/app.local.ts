import winston from 'winston';
import { localServer } from './app';

const port = 3000;
localServer.listen(port, () => winston.info(`Local server is listening on port ${port}`));
