const defaultState = {
  seasonState: false,
  seasonStateTwo: false,
  season: [],
  seasonid: '',
  seaDeleteValue: '',
  seasonResponse: ''
};

const SeasonReducer = (state = defaultState, action) => {
  switch(action.type){
    case 'SET_SEASON_STATE':
      return {
        ...state,
        seasonState: action.seasonState,
      };
    case 'SET_SEASON_STATETWO':
      return {
        ...state,
        seasonStateTwo: action.seasonStateTwo,
      };
    case 'SET_SEASON':
      return {
        ...state,
        season: action.season,
      };
    case 'SET_SEASON_ID':
      return {
        ...state,
        seasonid: action.seasonid,
      };
    case 'SET_SEASON_DELETE':
      return {
        ...state,
        seaDeleteValue: action.seaDeleteValue,
      };
    case 'SET_SEASON_RESPONSE':
      return {
        ...state,
        seasonResponse: action.seasonResponse,
      };
    default:
      return state;
  };
};

export default SeasonReducer;