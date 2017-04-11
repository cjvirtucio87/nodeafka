const { argv } = process;

const onReduce = (acc, next) => {
    const { prev } = acc;
    if (/^--/.test(next)) {
        return { ...acc, [next]: "", prev: next };
    }
    return { ...acc, [prev]: next, prev: null }
}

const parsed = argv.length < 2 ? {} : argv
                                        .slice(3)
                                        .reduce(onReduce, { prev: null });

export default parsed;