import { ZOOKEEPER_SERVER_PROPS, KAFKA_SERVER_PROPS, KAFKA_PRODUCER_PROPS } from './constants';
import { zookeeperServer, kafkaServer, kafkaProducer } from './spawners';
import { zooOnCreate, kafProdOnCreate } from './handlers';

const runFactory = (msg: string, spawner: Function, onCreate?: Function) => (onFinish: Function) => () => {
    console.log(msg);
    const cp = spawner();
    if (onCreate) onCreate(cp);
    cp.stdout.pipe(process.stdout);
    cp.stderr.pipe(process.stderr);

    cp.on('finish', onFinish);
}


// servers
export const runZookeeperServer = runFactory(
                                    'Running zookeeper..', 
                                    zookeeperServer.bind(null, ZOOKEEPER_SERVER_PROPS),
                                    zooOnCreate
                                    );

export const runKafkaServer = runFactory(
                                    'Running kafka server..', 
                                    kafkaServer.bind(null, KAFKA_SERVER_PROPS)
                                    );

// actors
export const runKafkaProducer = runFactory(
                                'Running producer..',
                                kafkaProducer.bind(null, KAFKA_PRODUCER_PROPS),
                                kafProdOnCreate
                            );