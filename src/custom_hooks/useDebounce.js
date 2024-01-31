import { useRef } from 'react';
import { DEBOUNCE_VALUE } from '../utils/constants';

export function useDebounce(callBack) {
    let debounceDelay = useRef(0);
    const DebouncedAction = (...args) => {
        clearTimeout(debounceDelay);
        debounceDelay = setTimeout(async () => {
            callBack(...args);
        }, DEBOUNCE_VALUE)
    }
    return {
        DebouncedAction
    };
}