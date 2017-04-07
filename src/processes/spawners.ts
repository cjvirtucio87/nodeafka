import { spawn } from 'child_process';
import * as constants from '../constants';

const spawnFactory = (proc: string) => (args) => spawn(proc, args);

// servers
export const zookeeperServer = spawnFactory(constants.ZOOKEEPER_SERVER_PATH);
export const kafkaServer = spawnFactory(constants.KAFKA_SERVER_PATH);

// actors
export const kafkaProducer = spawnFactory(constants.KAFKA_PRODUCER_PATH);
export const kafkaConsumer = spawnFactory(constants.KAFKA_CONSUMER_PATH);

// others
export const kafkaTopics = spawnFactory(constants.KAFKA_TOPICS_PATH);