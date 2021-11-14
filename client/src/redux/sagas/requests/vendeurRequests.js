import axios from 'axios';

axios.defaults.withCredentials = true;

const URL = 'http://localhost:5000/api';


// export function requestAddProduct(action) {
//   return axios.request({
//     method: 'post',
//     url: `${URL}/addProduct`,
//     data:{
//         ...action.payload,
//     }
//   });
// }

export function requestFetchProduct() {
  return axios.request({
    method: 'get',
    url: `${URL}/myProducts`,
  });
}

// export function requestFetchAllProduct() {
//   return axios.request({
//     method: 'get',
//     url: `${URL}/allProducts`,
//   });
// }

export function requestFetchCategory() {
  return axios.request({
    method: 'get',
    url: `${URL}/category`,
  });
}

export function requestDeleteProduct(action) {
  const id = action.payload
  return axios.request({
    method: 'delete',
    url: `${URL}/deleteProduct`,
    data: {
      id,
    }
  });
}

export function requestEditProduct(action) {
  const {formData} = action.payload;
//  return axios.put(`${URL}/updateProduct/${id}`, {formData})
return axios.request({
  method: 'put',
  url: `${URL}/updateProduct/`,
  data:{
    formData
  }
})
   

}

// export function requestGetTechnicien() {
//   return axios.request({
//     method: 'get',
//     url: `${URL}/tech`,
//   });
// }

// export function requestAssignTechnicien(action) {
//   const {id, formData}= action.payload;
//   return axios.post(`${URL}/assign/${id}`, formData)
// }

// export function requestGetTicketById(action) {
//   return axios.request({
//     method: 'get',
//     url: `${URL}/ticket/${action.payload}`,
//   });
// }

// export function requestGetTechTicketById(action) {
//   return axios.request({
//     method: 'get',
//     url: `${URL}/techticket/${action.payload}`,
//   });
// }

// export function requestCancelTicket(action) {
//   return axios.request({
//     method: 'post',
//     url: `${URL}/cancelTicket/${action.payload}`,
//   });
// }





