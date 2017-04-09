import parsed from './argv-parser';

export default function getArgv(key, fallback) {
    return parsed[key] ? parsed[key] : fallback;
}