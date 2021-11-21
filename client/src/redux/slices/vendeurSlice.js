import { createSlice } from '@reduxjs/toolkit';

const vendeurSlice = createSlice({
    name: 'vendeurSlice',
    initialState: {
        products: [],
        category: [],
        allProducts: [],
        slideProducts: [],
        slideProductsByCategory1: [],
        slideProductsByCategory2: [],
        // productError: "",
        // myTicket: [],
        // technicien: [],
        // assignTicket: {}

    },
    reducers: {
        addProduct: () => {},
        fetchProduct: () => {},
        deleteProduct: () => {},
        editProduct: () => {},
        fetchCategory: () => {},
        fetchAllProducts: () => {},
        fetchSlideProducts: () => {},
        fetchSlideProductsByCategory1: () => {},
        fetchSlideProductsByCategory2: () => {},
        orderProduct:()=>{},
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
        // productError: (state = this.initialState, action) => ({
        //     ...state,
        //     productError: action.payload,
        // }),
        //     getMyTicket: () =>{},
        //     addTicket: () =>{},
        //     setMyTicket: (state = this.initialState, action) => {
        //         return{
        //             ...state,
        //             myTicket: [...action.payload],
        //         }
        //     },
        //     techTicket: ()=>{},
        //     resolvedTicket: ()=>{},
        //     getTechnicien: ()=>{},
        //     setTechnicien: (state = this.initialState, action) => {
        //       return{
        //           ...state,
        //           technicien: [...action.payload],
        //       }
        //   },
        //   assignTech: ()=>{},
        //   getTicketById:()=>{},
        //   setAssignTicket: (state = this.initialState, action) => {
        //     return{
        //         ...state,
        //         assignTicket: action.payload,
        //     }
        //   },
        //   getTechTicketById: ()=>{},  
        //   cancelTicket:()=>{},

    },
});

export const {
    setProducts,
    productError,
    addProduct,
    fetchProduct,
    deleteProduct,
    editProduct,
    fetchCategory,
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
