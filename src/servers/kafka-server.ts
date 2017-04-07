import { runZookeeperServer, runKafkaServer } from '../processes/runners';

const run = runKafkaServer(() => console.log('Done'));

export default run;