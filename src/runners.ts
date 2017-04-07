import * as constants from './constants';
import * as spawners from './spawners';
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
                                    spawners.zookeeperServer.bind(null, constants.ZOOKEEPER_SERVER_PROPS),
                                    zooOnCreate
                                    );

export const runKafkaServer = runFactory(
                                    `Running kafka server using "${constants.KAFKA_SERVER_PROPS}"..`, 
                                    spawners.kafkaServer.bind(null, constants.KAFKA_SERVER_PROPS)
                                    );

// actors
export const runKafkaProducer = runFactory(
                                'Running producer..',
                                spawners.kafkaProducer.bind(null, constants.KAFKA_PRODUCER_PROPS),
                                kafProdOnCreate
                            );

export const runKafkaConsumer = runFactory(
                                `Running consumer using "${constants.KAFKA_CONSUMER_PROPS}"..`,
                                spawners.kafkaConsumer.bind(null, constants.KAFKA_CONSUMER_PROPS)
                            )