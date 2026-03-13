import fs from 'fs/promises';
import { Config } from '@2003scape/rsc-config';
import { JagArchive } from '@2003scape/rsc-archiver';

const archive = new JagArchive();
archive.readArchive(await fs.readFile('D:/rsc/rsc-client/dist/data204/config85.jag'));

const config = new Config();
await config.init();
config.loadArchive(await fs.readFile('D:/rsc/rsc-client/dist/data204/config85.jag'));

config.items = JSON.parse(
    await fs.readFile('./node_modules/@2003scape/rsc-data/config/items.json', 'utf8')
);
config.npcs = JSON.parse(
    await fs.readFile('./node_modules/@2003scape/rsc-data/config/npcs.json', 'utf8')
);
config.animations = JSON.parse(
    await fs.readFile('./node_modules/@2003scape/rsc-data/config/animations.json', 'utf8')
);
const newStringDat = config.toStringDat();
const newIntegerDat = config.toIntegerDat();
console.log('Modified string.dat size:', newStringDat.length);
console.log('Modified integer.dat size:', newIntegerDat.length);

archive.putEntry('string.dat', newStringDat);
archive.putEntry('integer.dat', newIntegerDat);
await fs.writeFile('D:/rsc/rsc-client/dist/data204/config86.jag', archive.toArchive(false));
console.log('Repacked to config86.jag');