import { join, sep } from 'path';

const getBinPath = (kafkaPath) => {
    const { platform } = process;
    const binPath = join(kafkaPath, 'bin');
    return /^win/.test(platform) ? binPath + sep + 'windows' : binPath;
}

export default getBinPath;