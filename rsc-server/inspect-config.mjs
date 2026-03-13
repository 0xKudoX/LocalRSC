import { Config } from '@2003scape/rsc-config';
import fs from 'fs/promises';
const config = new Config();
await config.init();
config.loadArchive(await fs.readFile('D:/rsc/rsc-client/dist/data204/config85.jag'));
console.log(Object.keys(config));