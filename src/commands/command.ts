import { COMMAND_NAME } from '../constants';
import describe from './describe';
import create from './create';
import list from './list';

import { find } from 'lodash';

function runCommand() {
    console.log(`Running command "${COMMAND_NAME}"..`);
    switch (COMMAND_NAME) {
    case 'describe':
        return describe();
    case 'create':
        return create();
    case 'list':
        return list();
    default:
        throw new Error("ERROR: Must set a command.");
    }
}

runCommand();