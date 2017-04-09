import parsed from './utils/argv-parser';
import getArgv from './utils/argv-getter';
import getConfigFile from './utils/config-file';
import getPlatformBin from './utils/kafka-bin';

import { join, sep } from 'path';

/*
    ### GENERAL ###
*/
// kafka path
const { KAFKA_PATH } = process.env;

// bin path
const getKafkaBin = getPlatformBin(KAFKA_PATH);
const KAFKA_BIN_PATH = getKafkaBin('path');
const KAFKA_BIN_EXT = getKafkaBin('ext');

// config
const KAFKA_CONFIG = join(KAFKA_PATH, 'config');
const SERVER_FILE = getConfigFile('--server', '.properties', 'server', KAFKA_CONFIG);
const TOPIC_NAME = getArgv('--topic', '');
const REPLICATION_FACTOR = getArgv('--replication-factor', '1');
const PARTITION_COUNT = getArgv('--partitions', '1');

// others
export const COMMAND_NAME = getArgv('--command', '');
export const SERVER_TYPE = getArgv('--server-type', 'kafka');

/*
    ### SERVERS ###
*/ 
// zookeeper
export const ZOOKEEPER_SERVER_PATH = KAFKA_BIN_PATH + sep + 'zookeeper-server-start' + KAFKA_BIN_EXT;
export const ZOOKEEPER_SERVER_PROPS = [KAFKA_CONFIG + sep + 'zookeeper.properties'];
export const ZOOKEEPER_BIND_MSG = /INFO binding to port/;

// kafka
export const KAFKA_SERVER_PATH = KAFKA_BIN_PATH + sep + 'kafka-server-start' + KAFKA_BIN_EXT;
export const KAFKA_SERVER_PROPS = [SERVER_FILE];

/*
    ### ACTORS ###
*/
// producer
export const KAFKA_PRODUCER_PATH = KAFKA_BIN_PATH + sep + 'kafka-console-producer' + KAFKA_BIN_EXT;
export const KAFKA_PRODUCER_PROPS = ['--broker-list', 'localhost:9092', '--topic', TOPIC_NAME ];

// consumer
export const KAFKA_CONSUMER_PATH = KAFKA_BIN_PATH + sep + 'kafka-console-consumer' + KAFKA_BIN_EXT;
export const KAFKA_CONSUMER_PROPS = ['--bootstrap-server', 'localhost:9092', '--from-beginning', '--topic', TOPIC_NAME];

/*
    ### RESOURCES ###
*/
// topics
export const KAFKA_TOPICS_PATH = KAFKA_BIN_PATH + sep + 'kafka-topics' + KAFKA_BIN_EXT;
export const KAFKA_TOPICS_DESCRIBE_PROPS = ['--describe', '--zookeeper', 'localhost:2181', '--topic', TOPIC_NAME];
export const KAFKA_TOPICS_CREATE_PROPS = [
    '--create', 
    '--zookeeper', 
    'localhost:2181',
    '--replication-factor',
    REPLICATION_FACTOR,
    '--partitions',
    PARTITION_COUNT, 
    '--topic', 
    TOPIC_NAME
    ];