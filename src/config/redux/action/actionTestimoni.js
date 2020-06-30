// import React from 'react'
import Axios from 'axios'
import { Constant, actionType } from '../../../constant/index'

const testimoniActionLoading = () => ({
  type: actionType.TESTIMONI_LOADING,
})
const testimoniActionError = error => ({
  type: actionType.TESTIMONI_ERROR,
  value: { error },
})
const testimoniActionSuccess = data => ({
  type: actionType.TESTIMONI_SUCCESS,
  value: data,
})

export const getTestimoni = async dispatch => {
  dispatch(testimoniActionLoading())
  try {
    await Axios.get(Constant.url.API_URL + '/testimoni').then(rest => {
      dispatch(testimoniActionSuccess(rest.data.data))
    })
  } catch (e) {
    dispatch(testimoniActionError(e))
    console.log(e, 'Gagal')
  }
}
