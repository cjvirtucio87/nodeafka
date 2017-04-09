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
export const KAFKA_CONFIG_PATH = join(KAFKA_PATH, 'config');
export const CUSTOM_CONFIG_PATH = join('config', 'kafka');
const SERVER_CONFIG = getConfigFile('--server', '.properties', 'server');
const TOPIC_NAME = getArgv('--topic', '');
const REPLICATION_FACTOR = getArgv('--replication-factor', '1');
const PARTITION_COUNT = getArgv('--partitions', '1');
const CONNECT_CONFIG = getConfigFile('--connect', '.properties', 'connect-standalone');
const CONNECT_SOURCE_CONFIG = getConfigFile('--connect-source', '.properties', 'connect-file-source');
const CONNECT_SINK_CONFIG = getConfigFile('--connect-sink', '.properties', 'connect-file-sink');

// others
export const COMMAND_NAME = getArgv('--command', '');
export const SERVER_TYPE = getArgv('--server-type', 'kafka');

/*
    ### SERVERS ###
*/ 
// zookeeper
export const ZOOKEEPER_SERVER_PATH = KAFKA_BIN_PATH + sep + 'zookeeper-server-start' + KAFKA_BIN_EXT;
export const ZOOKEEPER_SERVER_ARGS = [KAFKA_CONFIG_PATH + sep + 'zookeeper.properties'];
export const ZOOKEEPER_BIND_MSG = /INFO binding to port/;

// kafka
export const KAFKA_SERVER_PATH = KAFKA_BIN_PATH + sep + 'kafka-server-start' + KAFKA_BIN_EXT;
export const KAFKA_SERVER_ARGS = [SERVER_CONFIG];

/*
    ### ACTORS ###
*/
// producer
export const KAFKA_PRODUCER_PATH = KAFKA_BIN_PATH + sep + 'kafka-console-producer' + KAFKA_BIN_EXT;
export const KAFKA_PRODUCER_ARGS = ['--broker-list', 'localhost:9090', '--topic', TOPIC_NAME ];

// consumer
export const KAFKA_CONSUMER_PATH = KAFKA_BIN_PATH + sep + 'kafka-console-consumer' + KAFKA_BIN_EXT;
export const KAFKA_CONSUMER_ARGS = ['--bootstrap-server', 'localhost:9090', '--from-beginning', '--topic', TOPIC_NAME];

/*
    ### RESOURCES ###
*/
// topics
export const KAFKA_TOPICS_PATH = KAFKA_BIN_PATH + sep + 'kafka-topics' + KAFKA_BIN_EXT;
export const KAFKA_TOPICS_DESCRIBE_ARGS = ['--describe', '--zookeeper', 'localhost:2181', '--topic', TOPIC_NAME];
export const KAFKA_TOPICS_CREATE_ARGS = [
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
export const KAFKA_TOPICS_LIST_ARGS = ['--list', '--zookeeper', 'localhost:2181'];

/*
    ### KAFKA CONNECT ###
*/
export const KAFKA_CONNECT_PATH = KAFKA_BIN_PATH + sep + 'connect-standalone' + KAFKA_BIN_EXT;
export const KAFKA_CONNECT_ARGS = [CONNECT_CONFIG, CONNECT_SOURCE_CONFIG, CONNECT_SINK_CONFIG];