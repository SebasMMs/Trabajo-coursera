import { createAction, props } from '@ngrx/store'
import { Pet } from '~/app/models/pet.model'

export const addReadLater = createAction('[Pet] Add Read Later', props<{ pet: Pet }>())
export const removeReadLater = createAction('[Pet] Remove Read Later', props<{ petId: number }>())
export const clearReadLater = createAction('[Pet] Clear Read Later')
