import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Data from '../../../layouts/localData/Data';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProduct, deleteProduct } from '../../../../redux/slices/vendeurSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';

const columns = [
  { id: 'product', label: 'Product', minWidth: 100 },
  { id: 'title', label: 'Title', minWidth: 100 },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(product, title, price, date, action) {
  return { product, title, price, date, action };
}



const useStyles = makeStyles({

});

const MyStore = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  

  const { products } = useSelector(state => state.vendeur)

  useEffect(() => {
    dispatch(fetchProduct())
  }, [])



  const del = (id) => {
    // e.preventDefault();

const valid = window.confirm("are you sure you want to delete this item!") 
if(valid){
  dispatch(deleteProduct(id))

}
  }



  console.log('pro', products)


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  let rows = [];

  products && products.map((item) => {

    return (

      rows.push(createData(
        <img src={__dirname + item.imgPrincipal} className="col-3" alt="img" />,
          item.title,
          item.soldPrice,
          item.etat,
        <form className="col-12" onSubmit={()=>del(item._id)}>
          <><button className="btn btn-secondary me-1" onClick={() => history.push(`/vendeurDashboard/editProduct/${item._id}`)}><EditIcon /></button>
            <button className="btn btn-danger" type="submit"  > <DeleteIcon /></button>
          </>
        </form>

      ))

    )

  })

  console.log('rows', rows)







  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Grid container lg={11} className="mx-auto">
      <TableContainer className={classes.container}>

        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>

              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (

                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>

              );
            })}
          </TableBody>
        </Table>

      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Grid>
  )
}

export default MyStore
