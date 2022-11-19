// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './routers/AppRouter';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
// import reportWebVitals from './depend/reportWebVitals';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import AppRouter from './routers/AppRouter';
import 'react-toastify/dist/ReactToastify.css';
import configureStore from './store/configureStore';
import './index.css';
import 'normalize.css/normalize.css';
import 'core-js/stable/map';
import 'core-js/stable/set';
import './styles/styles.scss';
import './styles/base/base.scss';
import './styles/base/settings.scss';
import './styles/base/components/dashboard.scss';
import './styles/base/components/footer.scss';
import './styles/base/components/genre.scss';
import './styles/base/components/orders.scss';
import './styles/base/components/categories.scss';
import './styles/base/components/product.scss';
import './styles/base/components/login.scss';
import './styles/base/components/signup.scss';
import './styles/base/components/modalmenu.scss';
import './styles/base/components/recoverpassword.scss';


// import '../src/style/dashboard.css';
// import '../src/style/footer.css';
// import '../src/style/genre.css';
// import '../src/style/orders.css';
// import '../src/style/categories.css';
// import '../src/style/product.css';

const store = configureStore();
// provider makes the store available everywhere in the application
const Appp = (
  <Provider store={store}>
    <AppRouter />
    <ToastContainer autoClose={4000} pauseOnFocusLoss={false} position={toast.POSITION.TOP_CENTER}/>
  </Provider>
);

ReactDOM.render(Appp, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
