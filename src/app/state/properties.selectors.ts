import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PropertyState } from "./properties.reducer";

export const selectPropertiesState = createFeatureSelector<PropertyState>('properties');

export const selectProperties = createSelector(
    selectPropertiesState,
    (_state) => _state.properties
);

export const selectPropertiesLoaded = createSelector(
    selectPropertiesState,
    (_state) => _state.propertiesLoaded
);