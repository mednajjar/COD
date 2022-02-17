import { takeLatest } from 'redux-saga/effects';
import { getLogin, ifLoged, getLogout} from '../slices/authSlice';
import { 
  registerVendeur,
  packVendeur,
  validateVendeur,
  addProduct, 
  fetchProduct, 
  deleteProduct, 
  editProduct, 
  fetchCategory, 
  fetchOrders,
  fetchAllProducts,
  fetchSlideProducts,
  fetchSlideProductsByCategory1,
  fetchSlideProductsByCategory2,
  orderProduct,
  } from '../slices/vendeurSlice';
import { 
  handelGetLogin, 
  handelIfLoged, 
  handelGetLogout 
  } from './handlers/auth.handler';
import { 
  handelRegisterVendeur,
  handelValidateVendeur,
  handelAddProduct, 
  handelFetchProduct, 
  handelDeleteProduct, 
  handelEditProduct, 
  handelGetCategory,
  handelGetOrders,
  handelGetAllProduct,
  handelGetSlideProducts,
  handelGetSlideProductsByCategory1,
  handelGetSlideProductsByCategory2,
  handelOrderProduct,
  handelPack,
} from './handlers/vendeurHandlers';


export function* watcherSaga() {
  yield takeLatest(registerVendeur.type, handelRegisterVendeur);
  yield takeLatest(validateVendeur.type, handelValidateVendeur);
  yield takeLatest(packVendeur.type, handelPack);
  yield takeLatest(ifLoged.type, handelIfLoged);
  yield takeLatest(getLogin.type, handelGetLogin);
  yield takeLatest(getLogout.type, handelGetLogout);
  // yield takeLatest(addProduct.type, handelAddProduct);
  yield takeLatest(fetchProduct.type, handelFetchProduct);
  yield takeLatest(deleteProduct.type, handelDeleteProduct);
  yield takeLatest(editProduct.type, handelEditProduct);
  yield takeLatest(fetchCategory.type, handelGetCategory);
  yield takeLatest(fetchOrders.type, handelGetOrders);
  yield takeLatest(fetchAllProducts.type, handelGetAllProduct);
  yield takeLatest(fetchSlideProducts.type, handelGetSlideProducts);
  yield takeLatest(fetchSlideProductsByCategory1.type, handelGetSlideProductsByCategory1);
  yield takeLatest(fetchSlideProductsByCategory2.type, handelGetSlideProductsByCategory2);
  yield takeLatest(orderProduct.type, handelOrderProduct);


}