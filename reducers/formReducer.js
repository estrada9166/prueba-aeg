import { INPUT_VALUE, AUTO_FOCUS } from '../constants'

const initialState = {
  user: {
    name: null,
    age: null,
    date: null,
    color: null
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      return { ...state,
        [action.title]:
        { ...state[action.title],
          [action.name]: action.val
        }
      }
    default:
      return state
  }
}
