import { createActionGroup, props } from "@ngrx/store";
import { Property } from "../interfaces/Property";

export const PropertiesApiActions = createActionGroup({
    source: 'Properties API',
    events: {
        'Retrieved properties search results': props<{ properties: ReadonlyArray<Property> }>(),
    }
});