import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Data from '../../../layouts/localData/Data';
import ContactsIcon from '@material-ui/icons/Contacts';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import {useHistory} from 'react-router-dom';
import MyModal from './modals/MyModal'
import ShippingModal from './modals/ShippingModal'
import EtatModal from './modals/EtatModal'

const columns = [
    { id: 'product', label: 'Product', minWidth: 100 },
    { id: 'title', label: 'Title', minWidth: 100 },
    {
      id: 'quantity',
      label: 'Quantity',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'price',
      label: 'Total Price',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'etat',
      label: 'Etat',
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
  
  function createData(product, title, quantity, price,etat, action) {
    return { product, title, quantity, price,etat, action };
  }
  
  

const useStyles = makeStyles({

});

const Shipping = () => {
    const classes = useStyles();
    const history = useHistory();
    const [id, setId] = useState(null)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [modal, setModal] = useState(false);
    const [shipping, setShipping] = useState(false);
    const [etat, setEtat] = useState(false);
    const toggle = () => setModal(!modal);
    const toggle2 = () => setShipping(!shipping);
    const toggle3 = () => setEtat(!etat);
    let rows = [];

    const onchange=()=>{
        setId(4)
    }
    useEffect(()=>{
        onchange()
    },[id])

    Data.map((item)=>{
      return (
        rows.push(createData(
        <img src={item.img} className="col-3" alt="img" />,
         item.title,
         1,
         item.price,
        <button className="border-0 bg-transparent" onClick={toggle3}>Active</button>,
         <>
         <button className="btn btn-secondary me-1" onClick={toggle} onChange={onchange}><ContactsIcon/></button>
         <button className="btn btn-primary" onClick={toggle2}><LocalShippingIcon/></button>
         </>)
         ) 
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
        <MyModal modal={modal} setModal={setModal} toggle={toggle} id={id} />
        <ShippingModal shipping={shipping} setShipping={setShipping} toggle2={toggle2} />
        <EtatModal etat={etat} setEtat={setEtat} toggle3={toggle3} />
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

export default Shipping
