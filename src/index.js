import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import reducers from './redux/modules/reducers'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistCombineReducers} from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native

const config = {
    key: 'root',
    storage,
};

function configureStore(){
    let reducer = persistCombineReducers(config, reducers);
    let store = createStore(reducer);
    let persistor = persistStore(store);
    return { persistor, store }
}


class Home extends React.Component {
    render() {
        const { persistor, store } = configureStore();

        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        )
    }
}

ReactDOM.render(<Home />, document.getElementById('root'));