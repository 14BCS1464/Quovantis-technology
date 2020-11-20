
import RootReducers from '../rootReducer/rootReducer'
import AsyncStorage from '@react-native-community/async-storage';

    import {createStore, applyMiddleware, compose} from 'redux';
    import thunk from 'redux-thunk';
    import {persistStore, persistReducer} from 'redux-persist';

    const enhancer = compose(applyMiddleware(thunk));
    const config : any = {
        key: 'root',
        keyPrefix: '',
        storage: AsyncStorage,
        whitelist: ["FoodReducers"],

    };
    const storeReducer: any = persistReducer(
        config,
        RootReducers,
    );

    const configureStore = createStore(storeReducer, enhancer);
    persistStore(configureStore)


    export default configureStore;
