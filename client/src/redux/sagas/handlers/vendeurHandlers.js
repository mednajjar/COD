import { call, put } from 'redux-saga/effects';
import { requestFetchProduct, requestDeleteProduct, requestEditProduct, requestFetchCategory } from '../requests/vendeurRequests';
import { setProducts, setCategory } from '../../slices/vendeurSlice';

export function* handelGetCategory(action) {
  try {
    const { data } = yield call(requestFetchCategory, action);
    if (data) {
      yield put(setCategory(data));
    }
  } catch (error) {
    if (error.response) {
        console.log(error.response);
      }  }
}

// export function* handelGetMyTicket(action) {
//   try {
//     const { data } = yield call(requestMyTicket, action);
//     if (data) {
//       yield put(setMyTicket(data));
//     }
//   } catch (error) {
//     if (error.response) {
//         console.log(error.response);
//       }  }
// }

// export function* handelAddProduct(action) {
//   try {
//     const { data } = yield call(requestAddProduct, action);
//     console.log('data handler', data)
//     if (data) {
//       yield put(setProducts(data));
//     }
//   } catch (error) {
//     if (error.response) yield put(productError(error.response.data));
//  }
// }



export function* handelFetchProduct(action) {
  try {
    const { data } = yield call(requestFetchProduct, action);
    console.log('data handler', data)
    if (data) {
      yield put(setProducts(data));
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    }
  }
}

export function* handelDeleteProduct(action) {
  try {
    yield call(requestDeleteProduct, action);
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    }
  }
}

export function* handelEditProduct(action) {
  try {
    const { data } = yield call(requestEditProduct, action);
    console.log('data edit handler', data)
    if (data) {
      yield put(setProducts(data));
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    }
  }
}

// export function* handelGetTechnicien(action) {
//   try {
//     const { data } = yield call(requestGetTechnicien, action);
//     if (data) {
//       yield put(setTechnicien(data));
//     }
//   } catch (error) {
//     if (error.response) {
//         console.log(error.response);
//       }  }
// }

// export function* handelAssignTechnicien(action) {
//   try {
//     const { data } = yield call(requestAssignTechnicien, action);
//     if (data) {
//       console.log('data', data)
//       yield put(setTicket(data));
//     }
//   } catch (error) {
//     if (error.response) {
//         console.log(error.response);
//       }  }
// }

// export function* handelGetTicketById(action) {
//   try {
//     const { data } = yield call(requestGetTicketById, action);
//     if (data) {
//       yield put(setAssignTicket(data));
//     }
//   } catch (error) {
//     if (error.response) {
//         console.log(error.response);
//       }  }
// }

// export function* handelCancelTicket(action) {
//   try {
//     const { data } = yield call(requestCancelTicket, action);
//     if (data) {
//       console.log('data', data)
//       yield put(setTicket(data));
//     }
//   } catch (error) {
//     if (error.response) {
//         console.log(error.response);
//       }  }
// }
