import { createSlice } from '@reduxjs/toolkit';

const vendeurSlice = createSlice({
    name: 'vendeurSlice',
    initialState: {
        products: [],
        category: [],
        orders: [],
        allProducts: [],
        slideProducts: [],
        slideProductsByCategory1: [],
        slideProductsByCategory2: [],
        respond: '',
        registerError: '',
        validateRespond: '',
        validateError: '',
        packRespond:''
        // productError: "",
        

    },
    reducers: {
        registerVendeur: () => {},
        validateVendeur: () => {},
        packVendeur: () => {},
        addProduct: () => {},
        fetchProduct: () => {},
        deleteProduct: () => {},
        editProduct: () => {},
        fetchCategory: () => {},
        fetchOrders: () => {},
        fetchAllProducts: () => {},
        fetchSlideProducts: () => {},
        fetchSlideProductsByCategory1: () => {},
        fetchSlideProductsByCategory2: () => {},
        orderProduct:()=>{},
        setResponse: (state = this.initialState, action) => {
            return {
                ...state,
                respond: action.payload,
                registerError:''

            }
        },
        setRegisterError: (state = this.initialState, action) => {
            return {
                ...state,
                respond: '',
                registerError: action.payload

            }
        },
        setValidateRespond: (state = this.initialState, action) => {
            return {
                ...state,
                validateRespond: action.payload

            }
        },
        setValidateError: (state = this.initialState, action) => {
            return {
                ...state,
                validateError: action.payload

            }
        },
        setPack: (state = this.initialState, action) => {
            return {
                ...state,
                packRespond: action.payload

            }
        },
        
        setProducts: (state = this.initialState, action) => {
            return {
                ...state,
                products: [...action.payload],

            }
        },
        setCategory: (state = this.initialState, action) => {
            return {
                ...state,
                category: [...action.payload],

            }
        },
        setOrders: (state = this.initialState, action) => {
            return {
                ...state,
                orders: [...action.payload],

            }
        },
        setAllProducts: (state = this.initialState, action) => {
            return {
                ...state,
                allProducts: [...action.payload],

            }
        },
        setSlideProducts: (state = this.initialState, action) => {
            return {
                ...state,
                slideProducts: [...action.payload],

            }
        },
        setSlideProductsByCategory1: (state = this.initialState, action) => {
            return {
                ...state,
                slideProductsByCategory1: [...action.payload],

            }
        },
        setSlideProductsByCategory2: (state = this.initialState, action) => {
            return {
                ...state,
                slideProductsByCategory2: [...action.payload],

            }
        },
    },
});

export const {
    registerVendeur,
    setResponse,
    setRegisterError,
    validateVendeur,
    setValidateError,
    setValidateRespond,
    setPack,
    setProducts,
    productError,
    packVendeur,
    addProduct,
    fetchProduct,
    deleteProduct,
    editProduct,
    fetchCategory,
    fetchOrders,
    setOrders,
    setCategory,
    fetchAllProducts,
    setAllProducts,
    fetchSlideProducts,
    setSlideProducts,
    fetchSlideProductsByCategory1,
    fetchSlideProductsByCategory2,
    setSlideProductsByCategory1,
    setSlideProductsByCategory2,
    orderProduct,
} = vendeurSlice.actions;

export default vendeurSlice.reducer;
