import { configureStore } from '@reduxjs/toolkit';
import { user } from '../models';
import { userReducer } from './slices';

export interface AppStore {
  user: user;

}

export default configureStore<AppStore>({
  reducer: {
    user: userReducer
  }
})