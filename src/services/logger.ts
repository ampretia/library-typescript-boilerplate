/*
 * SPDX-License-Identifier: Apache-2.0
 */

import { pino } from 'pino';

pino();

// import * as Pino from 'pino';
const transport = pino.transport({
    target: 'pino-pretty',
    options: {
        destination: 1,
        translateTime: 'SYS:standard',
    }, // use 2 for stderr
});
export const logger = pino(
    {
        level: process.env.PINO_LOG_LEVEL || 'info',
    },
    transport,
);
