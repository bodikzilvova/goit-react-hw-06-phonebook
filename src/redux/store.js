import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import persistStore from 'redux-persist/es/persistStore';


export const store = configureStore({ 
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }

})

export const persistor = persistStore(store);