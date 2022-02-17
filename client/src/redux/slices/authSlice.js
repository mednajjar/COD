import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authslice',
  initialState: {
    id: null,
    role: null,
    isAuthenticated: false,
    valid: false,
    pack: null,
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
      id: action.payload.id,
      role: action.payload.role,
      isAuthenticated: action.payload.isAuthenticated,
      valid: action.payload.valid,
      pack: action.payload.pack,
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
