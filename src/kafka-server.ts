import { runZookeeperServer, runKafkaServer } from './runners';

const run = runKafkaServer(() => console.log('Done'));

export default run;