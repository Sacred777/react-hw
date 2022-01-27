import { createStoreon } from "storeon";
import { counterModule } from "./comments";
import { storeonDevtools } from 'storeon/devtools';

export interface StateStore {
    comments: string
}

export interface EventsStore {
  'changeComment': string
}

export const store = createStoreon<StateStore, EventsStore>([
  counterModule,
  process.env.NODE_ENV !== 'production' && storeonDevtools
]);

