import { join, sep } from 'path';

const { KAFKA_PATH } = process.env;
const KAFKA_BIN_WINDOWS = join(KAFKA_PATH, 'bin', 'windows')
const KAFKA_CONFIG = join(KAFKA_PATH, 'config');

/*
    ### SERVERS ###
*/ 

// zookeeper
export const ZOOKEEPER_SERVER_PATH = KAFKA_BIN_WINDOWS + sep + 'zookeeper-server-start.bat';
export const ZOOKEEPER_SERVER_PROPS = [KAFKA_CONFIG + sep + 'zookeeper.properties'];
export const ZOOKEEPER_BIND_MSG = /INFO binding to port/;

// kafka
export const KAFKA_SERVER_PATH = KAFKA_BIN_WINDOWS + sep + 'kafka-server-start.bat';
export const KAFKA_SERVER_PROPS = [KAFKA_CONFIG + sep + 'server.properties'];


/*
    ### ACTORS ###
*/

// producer
export const KAFKA_PRODUCER_PATH = KAFKA_BIN_WINDOWS + sep + 'kafka-console-producer.bat';
export const KAFKA_PRODUCER_PROPS = ['--broker-list', 'localhost:9092', '--topic', 'test'];

// consumer
export const KAFKA_CONSUMER_PATH = KAFKA_BIN_WINDOWS + sep + 'kafka-console-consumer.bat';
export const KAFKA_CONSUMER_PROPS = ['--bootstrap-server', 'localhost:9092', '--topic', 'test', '--from-beginning'];