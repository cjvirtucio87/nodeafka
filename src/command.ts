import * as describe from './describe';
import { find } from 'lodash';

function getCommandArg() {
    const { argv } = process;
    if (argv.length > 2) {
        const servArg = find(argv.slice(2), arg => /--command=([\w-]+)/.test(arg));
        if (servArg) return servArg.match(/=([\w-]+)/)[0].slice(1);
    }
    return;
}

function runCommand() {
    const command = getCommandArg();
    console.log(`Running command "${command}"..`);
    switch (command) {
    case 'describe':
        return describe.default();
    default:
        throw new Error("ERROR: Must set a command.");
    }
}

runCommand();