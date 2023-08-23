import { createReducer, on } from "@ngrx/store";
import { Property } from "../interfaces/Property";
import { PropertiesApiActions } from "./properties.actions";

export const initialState: ReadonlyArray<Property> = [];

export const propertiesReducer = createReducer(
    initialState,
    on(PropertiesApiActions.retrievedPropertiesSearchResults, (_state, { properties }) => properties)
);