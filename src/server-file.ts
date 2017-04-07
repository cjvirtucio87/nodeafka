import { join, sep } from 'path';
import { existsSync } from 'fs';
import { find } from 'lodash';

function getServerArg(): string {
    const { argv } = process;
    if (argv.length > 2) {
        const servArg = find(argv.slice(2), arg => /--server=\w+/.test(arg));
        if (servArg) return servArg.match(/=(\w+)/)[0].slice(1) + '.properties';
    }
    return 'server.properties';
}

const servFilename = getServerArg();
const customConfigPath = join('config', 'kafka');
const customConfigFile = customConfigPath + sep + servFilename;

export default function getServerFile(kafkaConfig: string) {
    if (existsSync(customConfigFile)) return customConfigFile;
    return kafkaConfig + sep + servFilename;
}