import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query/react';
// import 

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { rootReducer } from './reducers';

// persist configs
const persistConfig = {
    key: 'rrot',
    version: 1,
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: [],//persistReducer,
    devTools: true,
    // middleware(getDefaultMiddleware) {
    //     getDefaultMiddleware({
    //         serializableCheck: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //     })
    //     //.concat(api.middleware)
    // },
})

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;