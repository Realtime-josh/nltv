import axios from 'axios';
import { getToken} from '../helpers/auth';


const baseURL = 'https://newlabel-api-staging.herokuapp.com';
// const sectionURL = 'https://newlabel-api-staging.herokuapp.com/section';


export const setSectionStatus = (sectionState) => (
  {
    type: 'SET_SECTION_STATE',
    sectionState
  }
);

export const setSectionStatusTwo = (sectionStateTwo) => (
  {
    type: 'SET_SECTION_STATETWO',
    sectionStateTwo
  }
);

export const setSectionBoardStatus = (sectionBoardState) => (
  {
    type: 'SET_SECTION_BOARD_STATE',
    sectionBoardState
  }
);

export const setSectionMovies = (sectionMovies) => (
  {
    type: 'SET_SECTION_MOVIES',
    sectionMovies  
  }
);

export const setSectionId = (sectionid) => (
  {
    type: 'SET_SECTION_ID',
    sectionid  
  }
);

export const setSectionDelete = (sectDeleteValue) => (
  {
    type: 'SET_SECTION_DELETE',
    sectDeleteValue  
  }
);

export const setSectionResponse = (sectionResponse) => (
  {
    type: 'SET_SECTION_RESPONSE',
    sectionResponse  
  }
);

export const addSection = (sectionName, movieid) => dispatch => {
  dispatch(setSectionResponse('creating...'));
  return axios({
    method: 'post',
    url: `${baseURL}/${`section`}`,
    headers: {
      'Content-Type': 'application/json',
      'a-authorization': `Bearer ${getToken()}`
    },
    data: {
      "name": sectionName,
      "movies": movieid,
    },
})
  .then(() => {
    dispatch(setSectionResponse('Section Created.'));
  })
  .catch((error) =>{
    dispatch(setSectionResponse('Could not create section'));
  });
};