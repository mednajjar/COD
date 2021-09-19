import React, { useEffect, useState } from 'react'
import { Grid, TextField, Typography } from '@material-ui/core'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { makeStyles } from '@material-ui/core/styles';
import { image, images } from '../../../../assets';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  editor: {
    overFlowX: 'hidden',
    width: '100%',
    height: 'auto',
    border: '1px solid #CCCCCC',
    marginTop: '1%',
    background: 'white',
  },
  block: {
    // width: theme.spacing(100),
    display: 'flex',
    flexDirection: 'column',
    padding: '3%',
    background: '#f9f9f9',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2%',
    // width: '100%'
  },
  content:{
    display: 'block',
    overFlowX: 'hidden'
  },
  error:{
    color: 'red'
  }
  
  
}))
const AddProduct = () => {
  const classes = useStyles()

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)
  const [breveD, setBreveD] = useState('')
  const [file, setFile] = useState('')
  const [files, setFiles] = useState([])
  const [longD, setLongD] = useState([])
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [titleHelper, setTitleHelper] = useState("");
  const [priceHelper, setPriceHelper] = useState("");
  const [stockHelper, setStockHelper] = useState("");
  const [breveDHelper, setBreveDHelper] = useState("");
  const [longDHelper, setLongDHelper] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  useEffect(() => {
    setLongD(editorState.getCurrentContent().getPlainText())
  })

  console.log('magic', longD)

  const fileOnChange = (e) => {
    if (e.target.files) {
      const fileArray = URL.createObjectURL(e.target.files[0])
      setFile(fileArray)
    }
  }

  const filesOnChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setFiles(filesArray)
    }
  }


  const handlChange = e => {
    let valid;
    switch (e.target.id) {
      case "title":
        setTitle(e.target.value)
        valid = title.length > 8;
        !valid ? setTitleHelper("Doit contenir au mois 10 lettres!") : setTitleHelper("")
        break;
      case "breveD":
        setBreveD(e.target.value)
        valid = breveD.length > 18;
        !valid ? setBreveDHelper("Doit contenir au mois 20 lettres!") : setBreveDHelper("")
        break;
      case "price":
        setPrice(e.target.value)
        valid = /^\d{1,7}$/.test(e.target.value);
        !valid ? setPriceHelper("Saisi un numero valid!") : setPriceHelper("")
        break;
      case "stock":
        setStock(e.target.value)
        valid = /^\d{1,7}$/.test(e.target.value);
        !valid ? setStockHelper("Saisi un numero valid!") : setStockHelper("")
        break;
      default:
        break;
    }
  }

const onchange =(e)=>{
  !fileOnChange(e) ? setError1("Insérer une image!") : setError1("")
  !filesOnChange(e) ? setError2("Insérer une image!") : setError2("")
}

useEffect(()=>{
  file && setError1("");
},[file])

useEffect(()=>{
  files && setError2("");
},[files])


  return (

    <Grid container className={classes.content}>
      <form>
        <Grid item xs={12} sm={12} md={8} lg={10} className={classes.block}>
        <Grid item lg={12} className="text-center ">
          <Typography variant="h5" component="h5" >
            Ajouter un produit
          </Typography>
        </Grid>
          <Grid item lg={10}>
            <TextField
              required
              id="title"
              className="col-12"
              name="title"
              label="Title"
              error={titleHelper.length !== 0}
              helperText={titleHelper}
              onChange={handlChange}

            />
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={3} className="mt-3">
            <TextField
              required
              className="col-12"
              id="price"
              name="price"
              label="Prix"
              error={priceHelper.length !== 0}
              helperText={priceHelper}
              onChange={handlChange}

            />
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={3} className="mt-3">
            <TextField
              required
              className="col-12"
              id="stock"
              name="stock"
              label="Stock"
              error={stockHelper.length !== 0}
              helperText={stockHelper}
              onChange={handlChange}

            />
          </Grid>
          <Grid item lg={10} className="mt-3">
            <TextField
              required
              className="col-12"
              id="breveD"
              multiline
              rows={4}
              name="short-d"
              label="Brève description"
              error={breveDHelper.length !== 0}
              helperText={breveDHelper}
              onChange={handlChange}
            />
          </Grid>
          <input required type="file" className="mt-3" id="file" onChange={(e) => fileOnChange(e)} style={{ display: 'none' }} />
          <input required type="file" multiple className="mt-3" id="file2" onChange={(e) => filesOnChange(e)} style={{ display: 'none' }} />
          <label htmlFor="file" className="d-flex flex-column mt-4">
            <span className="text-secondary">Upload image principale</span>
            <i className="mt-4">
              {
                file ? (<img src={file} alt="img" className="col-3 border" />)
                  : <img src={image} alt="principale" style={{ width: '15%', cursor: 'pointer' }} />
              }
            </i>
            {error1.length > 0 && (<p className={classes.error}>{error1}</p>)}
          </label>
          <label htmlFor="file2" className="d-flex flex-column justify-content-start mt-4 flex-wrap relative">
          
            <span className="text-secondary">Upload sub images (4 max)</span>
            <i className="d-flex flex-row col-12 justify-content-start mt-4 flex-wrap">
              {
                (files.length > 0 && files.length > 4) ? <h5 className="text-danger btn fw-bold">You must upload 4 pics max!</h5> : files.length ? files.map((img, index) =>
                  <img key={index} src={img} alt="img" className="col-3 border" />
                ) : <img src={images} alt="imgs" style={{ width: '15%', cursor: 'pointer' }} />
              }
            </i>
          {error2.length > 0 && (<p className={classes.error}>{error2}</p>)}
          </label>
          

          <label htmlFor="" style={{ marginTop: '4%', color: 'gray' }}>Longue description</label>
          <Grid item className={classes.editor}>
            <Editor
             
              editorState={editorState}
              onEditorStateChange={setEditorState}
              name="long-d"
            />
          </Grid>
          <div className="d-flex flex-row col-12 justify-content-end mt-5">

            <button type="submit" className="btn btn-primary col-4" onClick={(e)=>onchange(e)}>Ajouter</button>
          </div>
        </Grid>
      </form>
    </Grid>

  )
}

export default AddProduct
