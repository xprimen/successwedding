import { actionType } from '../../../constant/index'

export const WebsiteDataReducer = (
  state = {
    data: [],
    loading: false,
    error: null,
  },
  action
) => {
  if (action.type === actionType.WD_LOADING) {
    return {
      ...state,
      loading: true,
    }
  }
  if (action.type === actionType.WD_ERROR) {
    return {
      ...state,
      error: action.value,
    }
  }
  if (action.type === actionType.WD_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.value,
    }
  }
  return state
}
