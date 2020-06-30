// import React from 'react'
import Axios from 'axios'
import { Constant, actionType } from '../../../constant/index'

const galleryActionLoading = () => ({
  type: actionType.GALLERY_LOADING,
})
const galleryActionError = error => ({
  type: actionType.GALLERY_ERROR,
  value: { error },
})
const galleryActionSuccess = data => ({
  type: actionType.GALLERY_SUCCESS,
  value: data,
})

export const getGallery = async dispatch => {
  dispatch(galleryActionLoading())
  try {
    await Axios.get(Constant.url.API_URL + '/gallery').then(rest => {
      dispatch(galleryActionSuccess(rest.data.data))
    })
  } catch (e) {
    dispatch(galleryActionError(e))
    console.log(e, 'Gagal')
  }
}
