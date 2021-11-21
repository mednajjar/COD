import { call, put } from 'redux-saga/effects';
import { requestFetchProduct, 
  requestDeleteProduct, 
  requestEditProduct, 
  requestFetchCategory, 
  requestFetchAllProduct, 
  requestFetchSlideProducts, 
  requestFetchSlideProductsByCategory1, 
  requestFetchSlideProductsByCategory2, 
  requestOrderProduct,
  } from '../requests/vendeurRequests';
import { setProducts,
  setCategory, 
  setAllProducts, 
  setSlideProductsByCategory1, 
  setSlideProductsByCategory2, 
  setSlideProducts 
  } from '../../slices/vendeurSlice';

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

export function* handelGetAllProduct(action) {
  try {
    const { data } = yield call(requestFetchAllProduct, action);
    if (data) {
      yield put(setAllProducts(data));
    }
  } catch (error) {
    if (error.response) {
        console.log(error.response);
      }  }
}

export function* handelGetSlideProducts(action) {
  try {
    const { data } = yield call(requestFetchSlideProducts, action);
    if (data) {
      yield put(setSlideProducts(data));
    }
  } catch (error) {
    if (error.response) {
        console.log(error.response);
      }  }
}

export function* handelGetSlideProductsByCategory1(action) {
  try {
    const { data } = yield call(requestFetchSlideProductsByCategory1, action);
    if (data) {
      yield put(setSlideProductsByCategory1(data));
    }
  } catch (error) {
    if (error.response) {
        console.log(error.response);
      }  }
}

export function* handelGetSlideProductsByCategory2(action) {
  try {
    const { data } = yield call(requestFetchSlideProductsByCategory2, action);
    if (data) {
      yield put(setSlideProductsByCategory2(data));
    }
  } catch (error) {
    if (error.response) {
        console.log(error.response);
      }  }
}

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

export function* handelOrderProduct(action) {
 
  try {
    yield call(requestOrderProduct, action);
     console.log('daz man hna',action)

    // if (data) {
    //   yield put(setProducts(data));
    // }
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
