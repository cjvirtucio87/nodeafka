/* 
    --- WINDOWS ONLY ---
    Change file extensions in constants to .sh for UNIX.
*/

import * as zookeeper from './zookeeper';
import * as kafka from './kafka-server';
import { find } from 'lodash';

function getServerTypeArg(): string {
    const { argv } = process;
    if (argv.length > 2) {
        const servArg = find(argv.slice(2), arg => /--type=\w+/.test(arg));
        if (servArg) return servArg.match(/=(\w+)/)[0].slice(1);
    }
    return 'kafka';
}

function runServer() {
    const typeArg = getServerTypeArg();
    switch (typeArg) {
    case 'zookeeper':
        return zookeeper.default();
    case 'kafka':
        return kafka.default();
    default:
        return kafka.default;
    }
}

runServer();