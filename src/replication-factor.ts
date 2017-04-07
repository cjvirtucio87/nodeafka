import { find } from 'lodash';

function getRepFactorArg(): string {
    const { argv } = process;
    if (argv.length > 2) {
        const servArg = find(argv.slice(2), arg => /--replication-factor=\d+/.test(arg));
        if (servArg) return servArg.match(/=(\d+)/)[0].slice(1);
    }
    return '1';
}

export default function getRepFactor() {
    return getRepFactorArg();
}