import { join, sep } from 'path';

const { KAFKA_PATH } = process.env;
const KAFKA_BIN_WINDOWS = join(KAFKA_PATH, 'bin', 'windows')
const KAFKA_CONFIG = join(KAFKA_PATH, 'config');

export const ZOOKEEPER_SERVER_PATH = KAFKA_BIN_WINDOWS + sep + 'zookeeper-server-start.bat';
export const KAFKA_SERVER_PATH = KAFKA_BIN_WINDOWS + sep + 'kafka-server-start.bat';
export const ZOOKEEPER_SERVER_PROPS = KAFKA_CONFIG + sep + 'zookeeper.properties';
export const KAFKA_SERVER_PROPS = KAFKA_CONFIG + sep + 'server.properties';
export const ZOOKEEPER_BIND_MSG = /INFO binding to port/;