import { runTopicsList } from '../processes/runners';

const run = runTopicsList(() => console.log('Done.'));

export default run;