import { ZOOKEEPER_SERVER_PROPS, KAFKA_SERVER_PROPS } from './constants';
import { zookeeperServer, kafkaServer } from './spawners';
import { zooOnCreate } from './handlers';

const runFactory = (msg: string, spawner: Function, onCreate?: Function) => (onClose: Function) => () => {
    console.log(msg);
    const cp = spawner();
    if (onCreate) onCreate(cp);
    cp.stdout.pipe(process.stdout);

    cp.on('finish', onClose);
}

export const runZookeeperServer = runFactory('Running zookeeper..', 
                                      zookeeperServer.bind(null, ZOOKEEPER_SERVER_PROPS),
                                      zooOnCreate);

export const runKafkaServer = runFactory('Running kafka server..', 
                                  kafkaServer.bind(null, KAFKA_SERVER_PROPS));