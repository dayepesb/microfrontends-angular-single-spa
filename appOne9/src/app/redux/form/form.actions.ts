import { createAction, props } from '@ngrx/store';

export const set = createAction(
    '[Data Form] Set Data',
    props<{ name: string; description: string }>()
);

export const reset = createAction(
    '[Data Form] Reset Data'
);