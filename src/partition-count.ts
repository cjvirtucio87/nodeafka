import { find } from 'lodash';

function getPartitionCountArg(): string {
    const { argv } = process;
    if (argv.length > 2) {
        const servArg = find(argv.slice(2), arg => /--partitions=\d+/.test(arg));
        if (servArg) return servArg.match(/=(\d+)/)[0].slice(1);
    }
    return '1';
}

export default function getPartitionCount() {
    return getPartitionCountArg();
}