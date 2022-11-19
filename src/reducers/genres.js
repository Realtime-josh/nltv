const defaultState = {
  genreState: false,
};

const GenreReducer = (state = defaultState, action) => {
  switch(action.type){
    case 'SET_GENRE_STATE':
      return {
        ...state,
        genreState: action.genreState,
      };
      default:
        return state;
  };
};

export default GenreReducer;
