import { ZOOKEEPER_BIND_MSG } from './constants';

export const zooOnCreate = cp => {
    const onData = data => {
        if (ZOOKEEPER_BIND_MSG.test(data.toString())) {
            // ChildProcess is prototypically-linked to EventEmitter
            cp.emit('finish');
        }
    }

    cp.stdout.on('data', onData);
}

export const kafProdOnCreate = cp => {
    console.log('Accepting inputs from CLI..');
    process.stdin.pipe(cp.stdin);
}