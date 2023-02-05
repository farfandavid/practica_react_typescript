import axios from 'axios';
import { Sub, SubsResponseFromApi } from '../interfaces/types';


/* const fetchSub = (): Promise<SubsResponseFromApi> => {
      return fetch('./json/subs.json')
        .then(res => res.json());
    } */
export const getAllSubs = () => {
    return fetchSubs()
        .then(mapFromApiToSubs);
}
export const fetchSubs = async (): Promise<SubsResponseFromApi> => {
    const response = await axios
        .get('./json/subs.json');
    return response.data;
    /* return axios
        .get <SubsResponseFromApi> ('./json/subs.json')
        .then(response => response.data); */
}

export const mapFromApiToSubs = (apiResponse: SubsResponseFromApi):
    Array<Sub> => {
    return apiResponse.map(subFromApi => {
        const {
            nick,
            months: subMonths,
            profileUrl: avatar,
            description
        } = subFromApi;
        return {
            nick,
            description,
            avatar,
            subMonths
        }
    })
}