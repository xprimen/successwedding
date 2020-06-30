import { actionType } from '../../../constant/index'

export const PageReducer = (
  state = {
    data: [],
    loading: false,
    error: null,
  },
  action
) => {
  if (action.type === actionType.PAGE_LOADING) {
    return {
      ...state,
      loading: true,
    }
  }
  if (action.type === actionType.PAGE_ERROR) {
    return {
      ...state,
      error: action.value,
    }
  }
  if (action.type === actionType.PAGE_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.value,
    }
  }
  return state
}
