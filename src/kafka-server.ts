/* 
    --- WINDOWS ONLY ---
    Change file extensions in constants to .sh for UNIX.
*/

import { runZookeeperServer, runKafkaServer } from './runners';

const run = runZookeeperServer(runKafkaServer(() => console.log('Done')));

export default run;