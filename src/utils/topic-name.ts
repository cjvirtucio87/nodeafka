import { find } from 'lodash';

function getTopicArg(): string {
    const { argv } = process;
    if (argv.length > 2) {
        const servArg = find(argv.slice(2), arg => /--topic=([\w-]+)+/.test(arg));
        if (servArg) return servArg.match(/=([\w-]+)/)[0].slice(1);
    }
    return;
}

export default function getTopicName() {
    const topic = getTopicArg();
    return topic ? topic : '';
}