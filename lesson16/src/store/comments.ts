import { StoreonModule } from "storeon";
import { StateStore, EventsStore} from './index'

export const counterModule: StoreonModule<StateStore, EventsStore> = store => {
  store.on('@init', () => ({ comments: 'Привет из Storeon' }))
  store.on('changeComment', ({ comments }, comment) => {
    return { comments: comment }
  })
}
