const defaultState = {
  sectionState: false,
  sectionStateTwo: false,
  sectionMovies: [],
  sectionid: '',
  sectDeleteValue: '',
  sectionResponse: ''
};

const SectionReducer = (state = defaultState, action) => {
  switch(action.type){
    case 'SET_SECTION_STATE':
      return {
        ...state,
        sectionState: action.sectionState,
      };
    case 'SET_SECTION_STATETWO':
      return {
        ...state,
        sectionStateTwo: action.sectionStateTwo,
      };
    case 'SET_SECTION_MOVIES':
      return {
        ...state,
        sectionMovies: action.sectionMovies,
      };
    case 'SET_SECTION_ID':
      return {
        ...state,
        sectionid: action.sectionid,
      };
    case 'SET_SECTION_DELETE':
      return {
        ...state,
        sectDeleteValue: action.sectDeleteValue,
      };
    case 'SET_SECTION_RESPONSE':
      return {
        ...state,
        sectionResponse: action.sectionResponse,
      };
    default:
      return state;
  };
};

export default SectionReducer;