import { runZookeeperServer } from './runners';

const run = runZookeeperServer(() => console.log('Done.'));

export default run;