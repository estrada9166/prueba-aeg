import { INPUT_VALUE, INPUT_ID } from '../constants'

const initialState = {
  user: {
    id: 1
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
    case INPUT_ID:
      return { ...state,
        user:
        { ...state['user'],
          id: action.id
        }
      }
    default:
      return state
  }
}
