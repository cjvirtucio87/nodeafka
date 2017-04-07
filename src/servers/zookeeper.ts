import { runZookeeperServer } from '../processes/runners';

const run = runZookeeperServer(() => console.log('Done.'));

export default run;