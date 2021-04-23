import { createAction, props } from '@ngrx/store';

export const set = createAction(
    '[Data Form 2] Set Data',
    props<{ name: string; description: string }>()
);

export const reset = createAction(
    '[Data Form 2] Reset Data'
);