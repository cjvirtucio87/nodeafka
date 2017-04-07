import { runTopicsDescribe } from '../processes/runners';

const run = runTopicsDescribe(() => console.log('Done.'));

export default run;