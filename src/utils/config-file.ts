import { KAFKA_CONFIG_PATH, CUSTOM_CONFIG_PATH } from '../constants';
import getArgv from './argv-getter';
import parsed from './argv-parser';
import { join, sep } from 'path';
import { existsSync } from 'fs';
import { find } from 'lodash';

export default function getConfigFile(key, fileExt, fallback) {
    const fileName = getArgv(key, fallback) + fileExt;
    const customConfigFile = CUSTOM_CONFIG_PATH + sep + fileName;
    const fileMessage = `"${fileName}" in "${CUSTOM_CONFIG_PATH}"`;
    
    if (existsSync(customConfigFile)) {
        console.log(`Detected ${fileMessage}. Running script with "${customConfigFile}"..`);
        return customConfigFile;
    }

    console.log(`No custom file ${fileMessage} detected. Running script with default settings.`)
    return KAFKA_CONFIG_PATH + sep + fileName;
}