import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, match, RouterContext } from 'react-router'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createDevTools } from 'redux-devtools'
import { Router,Route,browserHistory,IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './Store'
import NewsPage from './components/NewsPage'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import NewsTempl from "./components/NewsTempl";
import About from "./components/About";
import You from "./components/You";
import Post from "./components/Post";
import PostPage from "./components/PostPage";
import RichEditor from "./containers/RichEditor";
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
            <Router history={history}>
            <Route path={'/'} component={App}></Route>
                <Route path="/foo" component={NewsPage}> </Route>
                <Route path="/About" component={About}> </Route>
                <Route path="/You" component={You}> </Route>
                <Route path="/Post" component={PostPage}> </Route>
                <Route path={"/news/:id"} component={NewsTempl} />
                <Route path={"/test"} component={RichEditor} />
            </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
