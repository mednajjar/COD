import { takeLatest } from 'redux-saga/effects';
import { getLogin, ifLoged, getLogout} from '../slices/authSlice';
import { addProduct, fetchProduct, deleteProduct, editProduct, fetchCategory } from '../slices/vendeurSlice';
import { handelGetLogin, handelIfLoged, handelGetLogout } from './handlers/auth.handler';
import { handelAddProduct, handelFetchProduct, handelDeleteProduct, handelEditProduct, handelGetCategory } from './handlers/vendeurHandlers';


export function* watcherSaga() {
  yield takeLatest(ifLoged.type, handelIfLoged);
  yield takeLatest(getLogin.type, handelGetLogin);
  yield takeLatest(getLogout.type, handelGetLogout);
  // yield takeLatest(addProduct.type, handelAddProduct);
  yield takeLatest(fetchProduct.type, handelFetchProduct);
  yield takeLatest(deleteProduct.type, handelDeleteProduct);
  yield takeLatest(editProduct.type, handelEditProduct);
  yield takeLatest(fetchCategory.type, handelGetCategory);


}