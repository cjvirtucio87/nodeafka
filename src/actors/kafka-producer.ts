import { runKafkaProducer } from '../processes/runners';

const run = runKafkaProducer(() => console.log('Done.'));

export default run;