import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { stateSchema } from '../config/stateSchema';

interface StoreProviderProps {
  children?: ReactNode;
initialState?:stateSchema;
}
export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;
    const store = createReduxStore();

    return (
        <Provider store={store}>{ children }</Provider>
    );
};
