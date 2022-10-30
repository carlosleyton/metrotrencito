import axios from 'axios';
import Station from '../interfaces/station';
import { useQuery } from 'react-query';
import { localStations } from './stations';

const API = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

/**
 * It fetches the stations from the API and returns the data
 * @returns The response from the API call.
 */
const useFetchStations = () => {
    return useQuery<Station[], Error>(['stations'], async () => {
        const response = await axios.post(
            `${API}/stations`, {},{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        ).catch(function (error) {
            if (error.response) {
                console.log(error.response.data,'data');
                console.log(error.response.status, 'stat');
                console.log(error.response.headers, 'headers');
            } else if (error.request) {
                console.log(error.request, 'req');
            } else {
                console.log('Error', error.message, 'mess');
            }
            console.log(error, 'def');
        });
        return response?.data;
    });
};
/**
 * It returns the localStations variable
 * @returns An array of objects
 */
const useLocalFetchStations = () => {
    return localStations
}

export { useFetchStations, useLocalFetchStations }