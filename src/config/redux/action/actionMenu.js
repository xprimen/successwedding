// import React from 'react'
import Axios from 'axios'
import { Constant, actionType } from '../../../constant/index'

const menuActionLoading = () => ({
  type: actionType.MENU_LOADING,
})
const menuActionError = error => ({
  type: actionType.MENU_ERROR,
  value: { error },
})
const menuActionSuccess = data => ({
  type: actionType.MENU_SUCCESS,
  value: { top: data.top, menuBottom: data.bottom },
})

export const getmenu = async dispatch => {
  dispatch(menuActionLoading())
  try {
    await Axios.get(Constant.url.API_URL + '/front_menu').then(rest => {
      // setMenuTop(rest.data.data.top)
      // setMenuBottom(rest.data.data.bottom)
      // setLoading(false)
      dispatch(menuActionSuccess(rest.data.data))
    })
  } catch (e) {
    if (e) {
      dispatch(menuActionError(e))
      console.log(e, 'Gagal Mengambil Data Menu')
    }
  }
}
