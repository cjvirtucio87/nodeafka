import getServerFile from './server-file';
import getTopicName from './topic-name';
import getReplicationFactor from './replication-factor';
import getPartitionCount from './partition-count';

import { join, sep } from 'path';

/*
    ### GENERAL ###
*/
// kafka path
const { KAFKA_PATH } = process.env;

// windows
const KAFKA_BIN_WINDOWS = join(KAFKA_PATH, 'bin', 'windows');

// config
const KAFKA_CONFIG = join(KAFKA_PATH, 'config');
const SERVER_FILE = getServerFile(KAFKA_CONFIG);
const TOPIC_NAME = getTopicName();
const REPLICATION_FACTOR = getReplicationFactor();
const PARTITION_COUNT = getPartitionCount();

/*
    ### SERVERS ###
*/ 
// zookeeper
export const ZOOKEEPER_SERVER_PATH = KAFKA_BIN_WINDOWS + sep + 'zookeeper-server-start.bat';
export const ZOOKEEPER_SERVER_PROPS = [KAFKA_CONFIG + sep + 'zookeeper.properties'];
export const ZOOKEEPER_BIND_MSG = /INFO binding to port/;

// kafka
export const KAFKA_SERVER_PATH = KAFKA_BIN_WINDOWS + sep + 'kafka-server-start.bat';
export const KAFKA_SERVER_PROPS = [SERVER_FILE];

/*
    ### ACTORS ###
*/
// producer
export const KAFKA_PRODUCER_PATH = KAFKA_BIN_WINDOWS + sep + 'kafka-console-producer.bat';
export const KAFKA_PRODUCER_PROPS = ['--broker-list', 'localhost:9090', '--topic', TOPIC_NAME ];

// consumer
export const KAFKA_CONSUMER_PATH = KAFKA_BIN_WINDOWS + sep + 'kafka-console-consumer.bat';
export const KAFKA_CONSUMER_PROPS = ['--bootstrap-server', 'localhost:9090', '--from-beginning', '--topic', TOPIC_NAME];

/*
    ### RESOURCES ###
*/
// topics
export const KAFKA_TOPICS_PATH = KAFKA_BIN_WINDOWS + sep + 'kafka-topics.bat';
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