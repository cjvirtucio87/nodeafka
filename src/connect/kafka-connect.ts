import { runKafkaConnect } from '../processes/runners';

const run = runKafkaConnect(() => console.log('Done'));

export default run;