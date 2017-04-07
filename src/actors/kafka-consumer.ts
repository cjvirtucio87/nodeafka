import { runKafkaConsumer } from '../processes/runners';

const run = runKafkaConsumer(() => console.log('Done.'));

export default run;