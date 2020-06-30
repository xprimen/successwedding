import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { WebsiteDataReducer } from '../reducer/websiteDataReducer'
import { MenuReducer } from '../reducer/menuReducer'
import { SlideShowReducer } from '../reducer/slideshowReducer'
import { GalleryReducer } from '../reducer/galleryReducer'
import { PageReducer } from '../reducer/pageReducer'
import { ProductReducer } from '../reducer/productReducer'
import { TestimoniReducer } from '../reducer/testimoniReducer'

const rootReducer = combineReducers({
  wd: WebsiteDataReducer,
  menu: MenuReducer,
  slideshow: SlideShowReducer,
  gallery: GalleryReducer,
  page: PageReducer,
  product: ProductReducer,
  testimoni: TestimoniReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
