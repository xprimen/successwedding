import { actionType } from '../../../constant/index'

export const SlideShowReducer = (
  state = {
    data: [],
    loading: false,
    error: null,
  },
  action
) => {
  if (action.type === actionType.SLIDESHOW_LOADING) {
    return {
      ...state,
      loading: true,
    }
  }
  if (action.type === actionType.SLIDESHOW_ERROR) {
    return {
      ...state,
      error: action.value,
    }
  }
  if (action.type === actionType.SLIDESHOW_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.value,
    }
  }
  return state
}
