/* Instruments */
import { themeSlice } from './themeSlice';
import type { ReduxThunkAction } from '@/lib/redux';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const changeTheme =
  (amount: 'dark' | 'light'): ReduxThunkAction =>
  (dispatch) => {
    dispatch(themeSlice.actions.changeTheme(amount));
  };
