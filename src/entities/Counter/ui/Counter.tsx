import { useDispatch, useSelector } from 'react-redux';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const counterValue = useSelector(getCounterValue);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1>{counterValue}</h1>
            <Button theme={ThemeButton.ClASSIC} onClick={increment}>increment</Button>
            <Button theme={ThemeButton.ClASSIC} onClick={decrement}>decrement</Button>
        </div>
    );
};
