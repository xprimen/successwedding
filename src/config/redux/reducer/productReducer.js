import { actionType } from '../../../constant/index'

export const ProductReducer = (
  state = {
    data: [],
    loading: false,
    error: null,
  },
  action
) => {
  if (action.type === actionType.PRODUCT_LOADING) {
    return {
      ...state,
      loading: true,
    }
  }
  if (action.type === actionType.PRODUCT_ERROR) {
    return {
      ...state,
      error: action.value,
    }
  }
  if (action.type === actionType.PRODUCT_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.value,
    }
  }
  return state
}
