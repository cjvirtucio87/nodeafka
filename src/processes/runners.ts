import * as constants from '../constants';
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
                                    spawners.zookeeperServer.bind(null, constants.ZOOKEEPER_SERVER_ARGS),
                                    zooOnCreate
                                    );

export const runKafkaServer = runFactory(
                                    `Running kafka server using "${constants.KAFKA_SERVER_ARGS}"..`, 
                                    spawners.kafkaServer.bind(null, constants.KAFKA_SERVER_ARGS)
                                    );

// actors
export const runKafkaProducer = runFactory(
                                `Running producer using the following arguments: "${constants.KAFKA_PRODUCER_ARGS}"`,
                                spawners.kafkaProducer.bind(null, constants.KAFKA_PRODUCER_ARGS),
                                kafProdOnCreate
                            );

export const runKafkaConsumer = runFactory(
                                `Running consumer using the following arguments: "${constants.KAFKA_CONSUMER_ARGS}"..`,
                                spawners.kafkaConsumer.bind(null, constants.KAFKA_CONSUMER_ARGS)
                            );

// commands
export const runTopicsDescribe = runFactory(
                                `Running topics describe using the following arguments: "${constants.KAFKA_TOPICS_DESCRIBE_ARGS}"..`,
                                spawners.kafkaTopics.bind(null, constants.KAFKA_TOPICS_DESCRIBE_ARGS)
                            );

export const runTopicsCreate = runFactory(
                                `Running topics create using the following arguments: "${constants.KAFKA_TOPICS_CREATE_ARGS}"..`,
                                spawners.kafkaTopics.bind(null, constants.KAFKA_TOPICS_CREATE_ARGS)
                            );
export const runTopicsList = runFactory(
                                `Running topics list using the following arguments: "${constants.KAFKA_TOPICS_LIST_ARGS}"..`,
                                spawners.kafkaTopics.bind(null, constants.KAFKA_TOPICS_LIST_ARGS)
                            );


// connect
export const runKafkaConnect = runFactory(
                                `Running kafka connect using the following arguments: "${constants.KAFKA_CONNECT_ARGS}"..`,
                                spawners.kafkaConnect.bind(null, constants.KAFKA_CONNECT_ARGS)
                            );