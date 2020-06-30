// import React from 'react'
import Axios from 'axios'
import { Constant, actionType } from '../../../constant/index'

const pageActionLoading = () => ({
  type: actionType.PAGE_LOADING,
})
const pageActionError = error => ({
  type: actionType.PAGE_ERROR,
  value: { error },
})
const pageActionSuccess = data => ({
  type: actionType.PAGE_SUCCESS,
  value: data,
})

/* export const getPageDetail = async (dispatch, slug) => {
  // console.log(slug)
  dispatch(pageActionLoading())
  try {
    await Axios.get(Constant.url.API_URL + '/page?id=' + slug).then(rest => {
      // console.log(rest.data.data)
      dispatch(pageActionSuccess(rest.data.data[0]))
    })
  } catch (e) {
    dispatch(pageActionError(e))
    console.log(e, 'Gagal Menarik Data Halaman')
  }
} */

export const getPage = async dispatch => {
  // console.log(slug)
  dispatch(pageActionLoading())
  try {
    await Axios.get(Constant.url.API_URL + '/page').then(rest => {
      // console.log(rest.data.data)
      dispatch(pageActionSuccess(rest.data.data))
    })
  } catch (e) {
    dispatch(pageActionError(e))
    console.log(e, 'Gagal Menarik Data Halaman')
  }
}
