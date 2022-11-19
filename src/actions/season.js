import axios from 'axios';
import { getToken} from '../helpers/auth';

const seasonURL = 'https://newlabel-api-staging.herokuapp.com/seasons';


export const setSeasonStatus = (seasonState) => (
  {
    type: 'SET_SEASON_STATE',
    seasonState
  }
);

export const setSeasonStatusTwo = (seasonStateTwo) => (
  {
    type: 'SET_SEASON_STATETWO',
    seasonStateTwo
  }
);

export const setSeason = (season) => (
  {
    type: 'SET_SEASON',
    season  
  }
);

export const setSeasonId = (seasonid) => (
  {
    type: 'SET_SEASON_ID',
    seasonid  
  }
);

export const setSeasonDelete = (seaDeleteValue) => (
  {
    type: 'SET_SEASON_DELETE',
    seaDeleteValue  
  }
);

export const setSeasonResponse = (seasonResponse) => (
  {
    type: 'SET_SEASON_RESPONSE',
    seasonResponse  
  }
);


export const addSeason = (number, seasonPassPrice, series, description) => dispatch => {
  dispatch(setSeasonResponse('creating...'));
  return axios({
    method: 'post',
    url: seasonURL,
    headers: {
      'Content-Type': 'application/json',
      'a-authorization': `Bearer ${getToken()}`
    },
    data: {
      number: Number(number),
      seasonPassPrice: Number(seasonPassPrice),
      series,
      description,
    },
})
  .then(() => {
    dispatch(setSeasonResponse('Series Created.'));
  })
  .catch((error) =>{
    dispatch(setSeasonResponse('An error occurred'));
  });
};

// https://newlabel-api-staging.herokuapp.com/seasons?series=62fbf29a645fbf8b14817b33

export const getSeason = seriesid => dispatch => {
  dispatch(setSeasonResponse('retrieving...'));
  return axios({
    method: 'get',
    url: `${seasonURL}/?series=${seriesid}`,
    headers: {
      'Content-Type': 'application/json',
      'a-authorization': `Bearer ${getToken()}`
    },
})
  .then((response) => {
    dispatch(setSeason(response.data.data));
    dispatch(setSeasonResponse('Seasons retrieved.'));
  })
  .catch((error) =>{
    dispatch(setSeasonResponse('An error occurred'));
  });
};

export const deleteSeason = (season) => dispatch => {
  dispatch(setSeasonResponse('deleting...'));
  return axios({
    method: 'delete',
    url: `${seasonURL}/${season}`,
    headers: {
      'Content-Type': 'application/json',
      'a-authorization': `Bearer ${getToken()}`
    },
})
  .then((response) => {
    dispatch(setSeason(response.data.data));
    dispatch(setSeasonResponse('Product deleted.'));
  })
  .catch((error) =>{
    dispatch(setSeasonResponse('An error occurred'));
  });
};
