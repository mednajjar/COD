import { createSlice } from '@reduxjs/toolkit';

const vendeurSlice = createSlice({
    name: 'vendeurSlice',
    initialState: {
        products: [],
        category:[],
        // productError: "",
        // myTicket: [],
        // technicien: [],
        // assignTicket: {}

    },
    reducers: {
        addProduct: () => {},
        fetchProduct: () => {},
        deleteProduct:()=>{},
        editProduct: ()=>{},
        fetchCategory:()=>{},
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

export const { setProducts, productError, addProduct, fetchProduct, deleteProduct, editProduct, fetchCategory, setCategory } = vendeurSlice.actions;
export default vendeurSlice.reducer;
