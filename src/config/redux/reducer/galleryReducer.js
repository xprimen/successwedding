import { actionType } from '../../../constant/index'

export const GalleryReducer = (
  state = {
    data: [],
    loading: false,
    error: null,
  },
  action
) => {
  if (action.type === actionType.GALLERY_LOADING) {
    return {
      ...state,
      loading: true,
    }
  }
  if (action.type === actionType.GALLERY_ERROR) {
    return {
      ...state,
      error: action.value,
    }
  }
  if (action.type === actionType.GALLERY_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.value,
    }
  }
  return state
}
