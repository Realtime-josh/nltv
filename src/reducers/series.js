const defaultState = {
  seriesState: false,
  seriesStateTwo: false,
  series: [],
  seriesid: "",
  serDeleteValue: '',
  seriesResponse: ''
};

const SeriesReducer = (state = defaultState, action) => {
  switch(action.type){
    case 'SET_SERIES_STATE':
      return {
        ...state,
        seriesState: action.seriesState,
      };
    case 'SET_SERIES_STATETWO':
      return {
        ...state,
        seriesStateTwo: action.seriesStateTwo,
      };
    case 'SET_SERIES':
      return {
        ...state,
        series: action.series,
      };
    case 'SET_SERIES_ID':
      return {
        ...state,
        seriesid: action.seriesid,
      };
    case 'SET_SERIES_DELETE':
      return {
        ...state,
        serDeleteValue: action.serDeleteValue,
      };
    case 'SET_SERIES_RESPONSE':
      return {
        ...state,
        seriesResponse: action.seriesResponse,
      };
    default:
      return state;
  };
};

export default SeriesReducer;