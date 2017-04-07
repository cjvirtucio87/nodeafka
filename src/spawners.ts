import { spawn } from 'child_process';
import { ZOOKEEPER_SERVER_PATH, KAFKA_SERVER_PATH } from './constants';

const spawnFactory = (proc: string) => (...args) => spawn(proc, args);

export const zookeeperServer = spawnFactory(ZOOKEEPER_SERVER_PATH);
export const kafkaServer = spawnFactory(KAFKA_SERVER_PATH);