import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import { API_ENDPOINT } from '../constants';

export const useCharacterData = (path: string | string[] | undefined) => {


    return useSWR(`${API_ENDPOINT}/characters/${path}`,fetcher);
}