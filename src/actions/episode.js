import axios from 'axios';
import { getToken} from '../helpers/auth';

const episodeURL = 'https://newlabel-api-staging.herokuapp.com/episode';
const episodeURLTwo = 'https://newlabel-api-staging.herokuapp.com/seasons';
const uploadURL = 'https://newlabel-api-staging.herokuapp.com/upload';


export const setEpisodeStatus = (episodeState) => (
  {
    type: 'SET_EPISODE_STATE',
    episodeState
  }
);

export const setEpisodeStatusTwo = (episodeStateTwo) => (
  {
    type: 'SET_EPISODE_STATETWO',
    episodeStateTwo
  }
);

export const setEpisode = (episode) => (
  {
    type: 'SET_EPISODE',
    episode  
  }
);

export const setEpisodeDelete = (epiDeleteValue) => (
  {
    type: 'SET_EPISODE_DELETE',
    epiDeleteValue  
  }
);

export const setEpisodeResponse = (episodeResponse) => (
  {
    type: 'SET_EPISODE_RESPONSE',
    episodeResponse  
  }
);


export const addEpisode = (name, runtime, price, seasonId, description, videoUrl, file) => dispatch => {
  dispatch(setEpisodeResponse('creating...'));
  const getSeasonIdArr = seasonId.split(":");
  const getSeasonId = getSeasonIdArr[1].trim();
  let formData = new FormData();
  formData.append("file", file)
  return axios({
    method: 'post',
    formData,
    url: uploadURL,
    headers: {
      'content-Type': 'multipart/form-data',
      'a-authorization': `Bearer ${getToken()}`
    },
    data: formData,
}) 
  .then((result) => {
    return axios({
      method: 'post',
      url: `${episodeURLTwo}/${getSeasonId}/episodes`,
      headers: {
        'Content-Type': 'application/json',
        'a-authorization': `Bearer ${getToken()}`
      },
      data: {
        name,
        videoUrl,
        runtime,
        poster: result.data.data.url,
        description,
        price: Number(price),
      },
  })
    .then(() => {
      dispatch(setEpisodeResponse('Episode Created.'));
    })
    .catch((error) =>{
      dispatch(setEpisodeResponse('Could not add Episode'));
    });
  })
    .catch((error) =>{
      dispatch(setEpisodeResponse('An error occured'));
    });
};

export const getEpisode = () => dispatch => {
  dispatch(setEpisodeResponse('retrieving...'));
  return axios({
    method: 'get',
    url: episodeURL,
    headers: {
      'Content-Type': 'application/json',
      'a-authorization': `Bearer ${getToken()}`
    },
})
  .then((response) => {
    dispatch(setEpisode(response.data.data));
    dispatch(setEpisodeResponse('Episode retrieved.'));
  })
  .catch((error) =>{
    dispatch(setEpisodeResponse('An error occurred'));
  });
};

export const deleteEpisode = (episode) => dispatch => {
  dispatch(setEpisodeResponse('deleting...'));
  return axios({
    method: 'delete',
    url: `${episodeURL}/${episode}`,
    headers: {
      'Content-Type': 'application/json',
      'a-authorization': `Bearer ${getToken()}`
    },
})
  .then((response) => {
    dispatch(setEpisode(response.data.data));
    dispatch(setEpisodeResponse('Episode deleted.'));
  })
  .catch((error) =>{
    dispatch(setEpisodeResponse('An error occurred'));
  });
};
