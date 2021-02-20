import * as functions from 'firebase-functions';
import axios from 'axios';

export const getAddresses = async (input: string) => {
  if (!input) {
    return Promise.reject(new Error('Must provide an input: string'));
  }

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

export const getDetail = async (property_id: string) => {
  if (!property_id) {
    return Promise.reject(new Error('Must provide a property_id: string'));
  }

  const options = {
    method: 'GET' as 'GET',
    url: 'https://realtor.p.rapidapi.com/properties/v2/detail',
    params: { property_id },
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

export const getSolds = async (args: any) => {
  const {
    age_max,
    age_min,
    baths_min,
    beds_min,
    city,
    limit = 200,
    lot_sqft_max,
    lot_sqft_min,
    offset = 0,
    postal_code,
    price_max,
    price_min,
    prop_type,
    radius,
    sort,
    sqft_max,
    sqft_min,
    state_code
  } = args;

  if ((!city && state_code) || (city && !state_code)) {
    return Promise.reject(
      new Error('Must provide both city: and state_code: or just postal_code: string')
    );
  }

  if (city && state_code && postal_code) {
    return Promise.reject(
      new Error('Must provide city: & state_code: or just postal_code: string not both')
    );
  }

  const options = {
    method: 'GET' as 'GET',
    url: 'https://realtor.p.rapidapi.com/properties/v2/list-sold',
    params: {
      age_max,
      age_min,
      baths_min,
      beds_min,
      city,
      limit,
      lot_sqft_max,
      lot_sqft_min,
      offset,
      postal_code,
      price_max,
      price_min,
      prop_type,
      radius,
      sort,
      sqft_max,
      sqft_min,
      state_code
    },
    headers: {
      'x-rapidapi-key': `${functions.config().realtor_api.key}`,
      'x-rapidapi-host': 'realtor.p.rapidapi.com'
    }
  };

  try {
    const { data } = await axios.request(options);
    return data.properties;
  } catch (error) {
    functions.logger.error(error.message);
    return 'There was a problem';
  }
};

export const getForSales = async (args: any) => {
  const {
    age_max,
    age_min,
    baths_min,
    beds_min,
    city,
    features,
    has_open_house,
    is_matterports,
    is_foreclosure,
    is_contingent,
    is_pending,
    is_new_construction,
    is_new_plan,
    limit = 200,
    lot_sqft_max,
    lot_sqft_min,
    offset = 0,
    prop_sub_type,
    prop_type,
    postal_code,
    price_max,
    price_min,
    radius,
    state_code,
    sort,
    sqft_min,
    sqft_max
  } = args;

  if ((!city && state_code) || (city && !state_code)) {
    return Promise.reject(
      new Error('Must provide both city: and state_code: or just postal_code: string')
    );
  }

  if (city && state_code && postal_code) {
    return Promise.reject(
      new Error('Must provide city: & state_code: or just postal_code: string not both')
    );
  }

  const options = {
    method: 'GET' as 'GET',
    url: 'https://realtor.p.rapidapi.com/properties/v2/list-for-sale',
    params: {
      age_max,
      age_min,
      baths_min,
      beds_min,
      city,
      features,
      has_open_house,
      is_matterports,
      is_foreclosure,
      is_contingent,
      is_pending,
      is_new_construction,
      is_new_plan,
      limit,
      lot_sqft_max,
      lot_sqft_min,
      offset,
      prop_sub_type,
      prop_type,
      postal_code,
      price_max,
      price_min,
      radius,
      state_code,
      sort,
      sqft_min,
      sqft_max
    },
    headers: {
      'x-rapidapi-key': `${functions.config().realtor_api.key}`,
      'x-rapidapi-host': 'realtor.p.rapidapi.com'
    }
  };

  try {
    const { data } = await axios.request(options);
    return data.properties;
  } catch (error) {
    functions.logger.error(error.message);
    return 'There was a problem';
  }
};

export const getAgents = async (args: any) => {
  const {
    agent_type,
    agent_rating_min,
    limit,
    name,
    offset,
    postal_code,
    price_max,
    price_min,
    recommendations_count_min,
    sort,
    types
  } = args;

  if (!postal_code) {
    return Promise.reject(new Error('Must provide a postal_code: at minimum'));
  }

  const options = {
    method: 'GET' as 'GET',
    url: 'https://realtor.p.rapidapi.com/agents/list',
    params: {
      agent_type,
      agent_rating_min,
      limit,
      name,
      offset,
      postal_code,
      price_max,
      price_min,
      recommendations_count_min,
      sort,
      types
    },
    headers: {
      'x-rapidapi-key': `${functions.config().realtor_api.key}`,
      'x-rapidapi-host': 'realtor.p.rapidapi.com'
    }
  };

  try {
    const { data } = await axios.request(options);
    return data.agents;
  } catch (error) {
    functions.logger.error(error.message);
    return 'There was a problem';
  }
};
