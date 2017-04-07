import { runKafkaProducer } from './runners';

const run = runKafkaProducer(() => console.log('Done.'));

export default run;