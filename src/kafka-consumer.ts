import { runKafkaConsumer } from './runners';

const run = runKafkaConsumer(() => console.log('Done.'));

export default run;