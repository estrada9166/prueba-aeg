import { INPUT_VALUE } from '../constants'

export const inputChange = (title, name, val) => (
  {
    type: INPUT_VALUE, 
    title, 
    name, 
    val
  }
)
