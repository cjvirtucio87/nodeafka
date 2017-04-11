#!/usr/bin/env node

import runZookeeper from './servers/zookeeper';
import runKafkaServer from './servers/kafka-server';
import runProducer from './actors/kafka-producer';
import runConsumer from './actors/kafka-consumer';
import runCreate from './commands/create';
import runDescribe from './commands/describe';
import runList from './commands/list';
import runConnect from './connect/kafka-connect';

function main() {
    const { argv } = process;
    switch (argv[2]) {
    case 'zookeeper':
        return runZookeeper();
    case 'serve':
        return runKafkaServer();
    case 'producer':
        return runProducer();
    case 'consumer':
        return runConsumer();
    case 'create':
        return runCreate();
    case 'describe':
        return runDescribe();
    case 'list':
        return runList();
    case 'connect':
        return runConnect();
    default:
        console.log("Enter one of the following arguments: [zookeeper, serve, producer, consumer, create, describe, list, connect].");
    }
}

main();