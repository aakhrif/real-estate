import { createReducer, on } from "@ngrx/store";
import { Property } from "../interfaces/Property";
import { PropertiesApiActions } from "./properties.actions";

export interface PropertyState {
    properties: ReadonlyArray<Property>;
    propertiesLoaded: boolean;
}

export const initialState: PropertyState = {
    properties: [],
    propertiesLoaded: false
};

export const propertiesReducer = createReducer(
    initialState,
    on(PropertiesApiActions.retrievedPropertiesSearchResults, (_state, { properties }) => ({
        ..._state,
        properties,
        propertiesLoaded: properties.length > 0 ? true : false,
    }))
);