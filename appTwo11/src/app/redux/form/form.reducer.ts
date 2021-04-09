import { createReducer, on } from '@ngrx/store';
import { reset, set } from './form.actions';

export const initialState = {
    name: '',
    description: ''
};

const _formReducer = createReducer(
  initialState,
  on(set, (state, { name, description }) => ({ ...state, name: name, description: description })),
  on(reset, (state) => initialState)
);

export function formReducer(state, action) {
  return _formReducer(state, action);
}