import { runTopicsCreate } from '../processes/runners';

const run = runTopicsCreate(() => console.log('Done.'));

export default run;