import { actionType } from '../../../constant/index'

export const TestimoniReducer = (
  state = {
    data: [],
    loading: false,
    error: null,
  },
  action
) => {
  if (action.type === actionType.TESTIMONI_LOADING) {
    return {
      ...state,
      loading: true,
    }
  }
  if (action.type === actionType.TESTIMONI_ERROR) {
    return {
      ...state,
      error: action.value,
    }
  }
  if (action.type === actionType.TESTIMONI_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.value,
    }
  }
  return state
}
