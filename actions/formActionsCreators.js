import { INPUT_VALUE, INPUT_ID } from '../constants'

export const inputChange = (title, name, val) => (
  {
    type: INPUT_VALUE, 
    title, 
    name, 
    val
  }
)

export const inputHandler = id => (
  {
    type: INPUT_ID,
    id
  }
)
