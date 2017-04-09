import { join, sep } from 'path';

const getPlatformBin = (kafkaPath) => (returnVal) => {
    const { platform } = process;
    const binPath = join(kafkaPath, 'bin');
    const isWin = /^win/.test(platform);
    
    switch (returnVal) {
    case 'path':
        return isWin ? binPath + sep + 'windows' : binPath;
    case 'ext':
        return isWin ? '.bat' : '.sh';
    default:
        return '.sh';
    }

}

export default getPlatformBin;