import { stateSchema } from 'app/providers/StoreProvider';

export const getCounter = (state: stateSchema) => state.counter;
