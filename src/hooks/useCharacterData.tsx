import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import { API_ENDPOINT } from '../constants';

export const useCharacterData = (path: string | string[] | undefined) => {
    if(!path) {
        return useSWR(`${API_ENDPOINT}/characters/`,fetcher);
    }


    return useSWR(`${API_ENDPOINT}/characters/${path}`,fetcher);
}