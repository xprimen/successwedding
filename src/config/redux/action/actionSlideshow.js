// import React from 'react'
import Axios from 'axios'
import { Constant, actionType } from '../../../constant/index'

const slideShowActionLoading = () => ({
  type: actionType.SLIDESHOW_LOADING,
})
const slideShowActionError = error => ({
  type: actionType.SLIDESHOW_ERROR,
  value: { error },
})
const slideShowActionSuccess = data => ({
  type: actionType.SLIDESHOW_SUCCESS,
  value: data,
})

export const getSlideShow = async dispatch => {
  dispatch(slideShowActionLoading())
  try {
    await Axios.get(Constant.url.API_URL + '/slideshow').then(rest => {
      dispatch(slideShowActionSuccess(rest.data.data))
    })
  } catch (e) {
    dispatch(slideShowActionError(e))
    console.log(e, 'Gagal')
  }
}
