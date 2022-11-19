const defaultState = {
  episodeState: false,
  episodeStateTwo: false,
  episode: [],
  epiDeleteValue: '',
  episodeResponse: ''
};

const EpisodeReducer = (state = defaultState, action) => {
  switch(action.type){
    case 'SET_EPISODE_STATE':
      return {
        ...state,
        episodeState: action.episodeState,
      };
    case 'SET_EPISODE_STATETWO':
      return {
        ...state,
        episodeStateTwo: action.episodeStateTwo,
      };
    case 'SET_EPISODE':
      return {
        ...state,
        episode: action.episode,
      };
    case 'SET_EPISODE_DELETE':
      return {
        ...state,
        epiDeleteValue: action.epiDeleteValue,
      };
    case 'SET_EPISODE_RESPONSE':
      return {
        ...state,
        episodeResponse: action.episodeResponse,
      };
    default:
      return state;
  };
};

export default EpisodeReducer;