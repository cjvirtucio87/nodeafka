import { SERVER_TYPE } from '../constants';
import runZookeeper from './zookeeper';
import runKafka from './kafka-server';

function runServer() {
    switch (SERVER_TYPE) {
    case 'zookeeper':
        return runZookeeper();
    default:
        return runKafka();
    }
}

runServer();