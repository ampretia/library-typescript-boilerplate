/*
 * SPDX-License-Identifier: Apache-2.0
 */
import sourceMapSupport from 'source-map-support';
sourceMapSupport.install();

import chalk from 'chalk';
import { World } from './world.js';
import fs from 'fs';

const w = new World();
const pj = fs.readFileSync('package.json', 'utf-8');
console.log(pj);
console.log(chalk.blue(w.getText()));
