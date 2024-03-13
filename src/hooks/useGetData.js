import { useQuery } from '@tanstack/react-query';
import axios from '../api/axios';

const fetchCrimeData = async () => {
  const { data } = await axios.get('crimeData');
  return data;
};

export const useGetData = () => {
  return useQuery({
    queryKey: 'crimeData',
    queryFn: fetchCrimeData
  });
};