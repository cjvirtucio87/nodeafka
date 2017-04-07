import { runZookeeperServer, runKafkaServer } from './runners';

const run = runZookeeperServer(runKafkaServer(() => console.log('Done')));

export default run;