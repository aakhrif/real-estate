import { createFeatureSelector } from "@ngrx/store";
import { Property } from "../interfaces/Property";

export const selectProperties = createFeatureSelector<ReadonlyArray<Property>>('properties');