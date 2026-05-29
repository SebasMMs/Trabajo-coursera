import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ReadLaterState } from './read-later.reducer'

export const selectReadLaterState = createFeatureSelector<ReadLaterState>('readLater')

export const selectReadLaterItems = createSelector(selectReadLaterState, (state: ReadLaterState) => state.items)

export const selectReadLaterCount = createSelector(selectReadLaterItems, (items) => items.length)
