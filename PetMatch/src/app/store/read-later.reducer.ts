import { createReducer, on } from '@ngrx/store'
import { Pet } from '~/app/models/pet.model'
import { addReadLater, removeReadLater, clearReadLater } from './read-later.actions'

export interface ReadLaterState {
  items: Pet[]
}

const initialState: ReadLaterState = {
  items: [],
}

export const readLaterReducer = createReducer(
  initialState,
  on(addReadLater, (state, { pet }) => {
    const exists = state.items.find((p) => p.id === pet.id)
    if (exists) {
      return state
    }
    return {
      ...state,
      items: [...state.items, pet],
    }
  }),
  on(removeReadLater, (state, { petId }) => ({
    ...state,
    items: state.items.filter((p) => p.id !== petId),
  })),
  on(clearReadLater, () => ({
    items: [],
  })),
)
