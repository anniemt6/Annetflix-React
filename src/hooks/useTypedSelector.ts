import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/store/reducers/rootReducer';


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;