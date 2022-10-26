import { legacy_createStore as createStore} from 'redux'

import TomatoesReducer from './Ingredients/ingredientsReducer'

const store = createStore(TomatoesReducer)
export default store