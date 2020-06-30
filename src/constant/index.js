export const actionType = {
  MENU_LOADING: 'MENU_LOADING',
  MENU_ERROR: 'MENU_ERROR',
  MENU_SUCCESS: 'MENU_SUCCESS',
  WD_LOADING: 'WD_LOADING',
  WD_ERROR: 'WD_ERROR',
  WD_SUCCESS: 'WD_SUCCESS',
  SLIDESHOW_LOADING: 'SLIDESHOW_LOADING',
  SLIDESHOW_ERROR: 'SLIDESHOW_ERROR',
  SLIDESHOW_SUCCESS: 'SLIDESHOW_SUCCESS',
  GALLERY_LOADING: 'GALLERY_LOADING',
  GALLERY_ERROR: 'GALLERY_ERROR',
  GALLERY_SUCCESS: 'GALLERY_SUCCESS',
  PAGE_LOADING: 'PAGE_LOADING',
  PAGE_ERROR: 'PAGE_ERROR',
  PAGE_SUCCESS: 'PAGE_SUCCESS',
  PRODUCT_LOADING: 'PRODUCT_LOADING',
  PRODUCT_ERROR: 'PRODUCT_ERROR',
  PRODUCT_SUCCESS: 'PRODUCT_SUCCESS',
  TESTIMONI_LOADING: 'TESTIMONI_LOADING',
  TESTIMONI_ERROR: 'TESTIMONI_ERROR',
  TESTIMONI_SUCCESS: 'TESTIMONI_SUCCESS',
}

export const base_url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost/successwedding'
    : 'https://www.rks.co.id/successwedding.id'
// export const base_url = 'https://www.rks.co.id/successwedding.id';

const prod = {
  url: {
    API_URL: base_url + '/secure/api',
    ASSETS_URL: './',
  },
  webdata: 0,
}
const dev = {
  url: {
    API_URL: base_url + '/api/api',
    // API_URL: base_url + '/secure/api',
    ASSETS_URL: '../../',
  },
  webdata: 1,
}
export const Constant = process.env.NODE_ENV === 'development' ? dev : prod
