import getArgv from './argv-getter';
import parsed from './argv-parser';
import { join, sep } from 'path';
import { existsSync } from 'fs';
import { find } from 'lodash';


function getCustomConfigFile(fileName) {
    const customConfigPath = join('config', 'kafka');
    return customConfigPath + sep + fileName;
}

export default function getConfigFile(key, fileExt, fallback, kafkaConfig) {
    const filename = getArgv(key, fallback) + fileExt;
    const customConfigFile = getCustomConfigFile(filename);
    if (existsSync(customConfigFile)) return customConfigFile;
    return kafkaConfig + sep + filename;
}