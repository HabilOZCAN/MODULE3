import {Words} from './Worts';

const Shuffled = Words.sort(() => Math.random() - 0.5);

export {Shuffled};

/**
 * const shuffle = (pBase) => {
    let min = 0;
    let max = pBase;
    return Math.floor(
        Math.random() * (max - min) + min
    )
}
 */