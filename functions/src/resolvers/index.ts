import * as functions from 'firebase-functions';
import axios from 'axios';

export const getAddresses = async (input: string) => {
  const options = {
    method: 'GET' as 'GET',
    url: 'https://realtor.p.rapidapi.com/locations/auto-complete',
    params: { input },
    headers: {
      'x-rapidapi-key': `${functions.config().realtor_api.key}`,
      'x-rapidapi-host': 'realtor.p.rapidapi.com'
    }
  };

  try {
    const { data } = await axios.request(options);
    return data.autocomplete.filter((res: any) => res.area_type === 'address');
  } catch (error) {
    functions.logger.error(error.message);
    return 'There was a problem';
  }
};

export const getDetail = async (propertyId: string) => {
  const options = {
    method: 'GET' as 'GET',
    url: 'https://realtor.p.rapidapi.com/properties/v2/detail',
    params: { property_id: propertyId },
    headers: {
      'x-rapidapi-key': `${functions.config().realtor_api.key}`,
      'x-rapidapi-host': 'realtor.p.rapidapi.com'
    }
  };

  try {
    const { data } = await axios.request(options);
    return data.properties[0];
  } catch (error) {
    functions.logger.error(error.message);
    return 'There was a problem';
  }
};
