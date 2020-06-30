// import React from 'react'
import Axios from 'axios'
import { Constant, actionType } from '../../../constant/index'

const productActionLoading = () => ({
  type: actionType.PRODUCT_LOADING,
})
const productActionError = error => ({
  type: actionType.PRODUCT_ERROR,
  value: { error },
})
const productActionSuccess = data => ({
  type: actionType.PRODUCT_SUCCESS,
  value: data,
})

export const getProduct = async dispatch => {
  dispatch(productActionLoading())
  try {
    await Axios.get(Constant.url.API_URL + '/product').then(rest => {
      /* const ret = [];
      rest.data.data.map(d=>({
        ret.d.menu_link = {
          title:d.title,
          content:d.content,
          meta_keywords:d.meta_keywords,
          meta_description:d.meta_description,
          menu_name:d.menu_name,
          menu_link:d.menu_link,
          prefix_menu_link:d.prefix_menu_link,
          menu_position:d.menu_position,
          image:d.image,
          path:d.path
        }
      })) */
      dispatch(productActionSuccess(rest.data.data))
    })
  } catch (e) {
    dispatch(productActionError(e))
    console.log(e, 'Gagal')
  }
}

export const getProductDetail = async (dispatch, id) => {
  // console.log(id)
  dispatch(productActionLoading())
  try {
    await Axios.get(Constant.url.API_URL + '/product?id=' + id).then(rest => {
      // console.log(rest.data.data)
      dispatch(productActionSuccess(rest.data.data))
    })
  } catch (e) {
    dispatch(productActionError(e))
    console.log(e, 'Gagal Menarik Data Halaman')
  }
}
