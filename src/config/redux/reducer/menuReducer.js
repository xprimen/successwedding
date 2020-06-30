import { actionType } from '../../../constant/index'

export const MenuReducer = (
  state = {
    top: [],
    bottom: [],
    loading: false,
    error: null,
  },
  action
) => {
  if (action.type === actionType.MENU_LOADING) {
    return {
      ...state,
      loading: true,
    }
  }
  if (action.type === actionType.MENU_ERROR) {
    return {
      ...state,
      error: action.value,
    }
  }
  if (action.type === actionType.MENU_SUCCESS) {
    return {
      ...state,
      loading: false,
      top: action.value.top,
      bottom: action.value.bottom,
    }
  }
  return state
}
