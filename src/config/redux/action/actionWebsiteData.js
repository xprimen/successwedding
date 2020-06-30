// import React from 'react'
import Axios from 'axios'
import { Constant, actionType } from '../../../constant/index'

const websiteDataActionLoading = () => ({
  type: actionType.WD_LOADING,
})
const websiteDataActionError = error => ({
  type: actionType.WD_ERROR,
  value: { error },
})
const websiteDataActionSuccess = data => ({
  type: actionType.WD_SUCCESS,
  value: data,
})

export const getWebsiteData = dispatch => {
  dispatch(websiteDataActionLoading())
  try {
    Axios.get(Constant.url.API_URL + '/first_load').then(rest => {
      // console.log(rest.data.data.website_setting)
      dispatch(websiteDataActionSuccess(rest.data.data.website_setting))
    })
  } catch (e) {
    dispatch(websiteDataActionError(e))
    console.log(e, 'Gagal Mengambil Data Website')
  }
}
