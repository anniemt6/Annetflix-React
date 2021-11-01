import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../reducers/comdineReducers';


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;