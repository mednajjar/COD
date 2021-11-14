import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authslice',
  initialState: {
    role: null,
    isAuthenticated: false,
    loginError: '',
    registerError: '',
    productError:'',
  },
  reducers: {
    ifLoged: () => {},
    getLogin: () => {},
    getRegister: () => {},
    postProduct:()=>{},
    setProduct:()=>{},
    setLogin: (state = this.initialState, action) => ({
      ...state,
      role: action.payload.role,
      isAuthenticated: action.payload.isAuthenticated,
      loginError: '',
      registerError: '',
      productError:''

    }),
    getLogout: () => { },

    loginError: (state = this.initialState, action) => ({
      ...state,
      loginError: action.payload,
    }),

    registerError: (state = this.initialState, action) => ({
      ...state,
      registerError: action.payload,
    }),

    productError: (state = this.initialState, action) => ({
      ...state,
      productError: action.payload,
    }),
   

  },
});

export const { setLogin, getRegister, getLogin, ifLoged, loginError, getLogout, registerError, productError, setProduct, postProduct } = authSlice.actions;
export default authSlice.reducer;
