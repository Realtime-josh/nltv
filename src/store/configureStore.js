import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import GenreReducer from '../reducers/genres';
import CategoryReducer from '../reducers/category';
import OrderReducer from '../reducers/orders';
import authReducer from '../reducers/auth';
import ProductReducer from '../reducers/product';
import SeriesReducer from '../reducers/series';
import SeasonReducer from '../reducers/season';
import EpisodeReducer from '../reducers/episode';
import SectionReducer from '../reducers/section';
import MenuReducer from '../reducers/menu';


const configureStore = () => createStore(
  combineReducers({
    genreModal: GenreReducer,
    categoryModal: CategoryReducer,
    orderModal: OrderReducer,
    productModal: ProductReducer,
    seriesModal: SeriesReducer,
    seasonModal: SeasonReducer,
    episodeModal: EpisodeReducer,
    sectionModal: SectionReducer,
    menuModal: MenuReducer,
    auth: authReducer,
}), applyMiddleware(thunk));

export default configureStore;
