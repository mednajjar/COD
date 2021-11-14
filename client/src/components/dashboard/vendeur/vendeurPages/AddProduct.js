import React, { useEffect, useState } from 'react'
import { Grid, TextField, Typography, FormControl, Box, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { makeStyles } from '@material-ui/core/styles';
import { image, images } from '../../../../assets';
// import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchCategory } from '../../../../redux/slices/vendeurSlice';
axios.defaults.withCredentials = true;
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
  content: {
    display: 'block',
    overFlowX: 'hidden'
  },
  error: {
    color: 'red'
  }


}))
const AddProduct = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { productError, category } = useSelector(state => state.vendeur)

category && console.log('category', category)

  const [longDes, setLongDes] = useState([]);
  useEffect(() => {
    setLongDes(editorState.getCurrentContent().getPlainText())
  })
  useEffect(() => {
    dispatch(fetchCategory())
  },[])
  const [data, setData] = useState({
    title: '',
    initialPrice: '',
    soldPrice: '',
    stock: '',
    shortD: '',
    longD: '',
    imgPrincipal: '',
    idCategory: ''
  })



  const [file, setFile] = useState('')
  const [files, setFiles] = useState([])
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [titleHelper, setTitleHelper] = useState("");
  const [initialPriceHelper, setInitialPriceHelper] = useState("");
  const [soldPriceHelper, setSoldPriceHelper] = useState("");
  const [stockHelper, setStockHelper] = useState("");
  const [breveDHelper, setBreveDHelper] = useState("");
  // const [longDHelper, setLongDHelper] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  console.log('data', data)



  const fileOnChange = (e) => {
    console.log('files', e.target.files)
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
        setData({ ...data, title: e.target.value })
        valid = data.title.toString().length > 8;
        !valid ? setTitleHelper("Doit contenir au mois 10 lettres!") : setTitleHelper("")
        break;
      case "shortD":
        setData({ ...data, shortD: e.target.value })
        valid = data.shortD.toString().length > 18;
        !valid ? setBreveDHelper("Doit contenir au mois 20 lettres!") : setBreveDHelper("")
        break;
      case "initialPrice":
        setData({ ...data, initialPrice: e.target.value })
        valid = /^\d{1,7}$/.test(e.target.value);
        !valid ? setInitialPriceHelper("Saisi un numero valid!") : setInitialPriceHelper("")
        break;
      case "soldPrice":
        setData({ ...data, soldPrice: e.target.value })
        valid = /^\d{1,7}$/.test(e.target.value);
        !valid ? setSoldPriceHelper("Saisi un numero valid!") : setSoldPriceHelper("")
        break;
      case "stock":
        setData({ ...data, stock: e.target.value })
        valid = /^\d{1,7}$/.test(e.target.value);
        !valid ? setStockHelper("Saisi un numero valid!") : setStockHelper("")
        break;
      default:
        break;
    }
  }

  const onchange = (e) => {
    !fileOnChange(e) ? setError1("Insérer une image!") : setError1("")
    !filesOnChange(e) ? setError2("Insérer une image!") : setError2("")
  }

  useEffect(() => {
    file && setError1("");
  }, [file])

  useEffect(() => {
    files && setError2("");
  }, [files])





  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      for (const [key, value] of Object.entries(data))
        {
          formData.append(key, value);
        }
        for (let i = 0; i < data.images.length; i++) {
          formData.append('images', data.images[i]);                      
      }
       
        await axios.post('http://localhost:5000/api/addProduct', formData);
        history.push('/vendeurDashboard/myStore')
       
        
    } catch (error) {
        if(error) console.log(error.response)
    }
   

  };



  return (

    <Grid container className={classes.content}>
      <form>
        <Grid item xs={12} sm={12} md={8} lg={10} className={classes.block}>
          {productError && (<p>{productError}</p>)}
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
              onChange={(e) => handlChange(e) && setData({ ...data, title: e.target.value })}

            />
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={5}>
          <Box className="mt-3">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.idCategory}
              label="Categorie"
              name= "category"
              onChange={(e)=>setData({ ...data, idCategory: e.target.value })}
            >
            {
              category && category.map((res, i)=>(
                <MenuItem key={i} value={res._id}>{res.category}</MenuItem>
              ))
            }
            </Select>
          </FormControl>
        </Box>
         </Grid>
          <Grid item xs={4} sm={3} md={3} lg={3} className="mt-3">
            <TextField
              required
              className="col-12"
              id="initialPrice"
              name="initialPrice"
              label="Prix"
              error={initialPriceHelper.length !== 0}
              helperText={initialPriceHelper}
              onChange={(e) => handlChange(e) && setData({ ...data, initialPrice: e.target.value })}

            />
          </Grid>
          <Grid item xs={4} sm={3} md={3} lg={3} className="mt-3">
            <TextField
              required
              className="col-12"
              id="soldPrice"
              name="soldPrice"
              label="Prix de vente"
              error={soldPriceHelper.length !== 0}
              helperText={soldPriceHelper}
              onChange={(e) => handlChange(e) && setData({ ...data, soldPrice: e.target.value })}

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
              onChange={(e) => handlChange(e) && setData({ ...data, stock: e.target.value })}

            />
          </Grid>
          <Grid item lg={10} className="mt-3">
            <TextField
              required
              className="col-12"
              id="shortD"
              multiline
              rows={4}
              name="shortD"
              label="Brève description"
              error={breveDHelper.length !== 0}
              helperText={breveDHelper}
              onChange={(e) => handlChange(e) && setData({ ...data, shortD: e.target.value })}
            />
          </Grid>
          <input required type="file" className="mt-3" name="imgPrincipal" id="file" onChange={(e) => fileOnChange(e) || setData({ ...data, imgPrincipal: e.target.files[0] })} style={{ display: 'none' }} />
          <input required type="file" multiple className="mt-3" name="images" id="file2" onChange={(e) => filesOnChange(e) || setData({ ...data, images: e.target.files })} style={{ display: 'none' }} />
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
              name="longD"
              onChange={() => setData({ ...data, longD: longDes })}
            />
          </Grid>
          <div className="d-flex flex-row col-12 justify-content-end mt-5">

            <button type="submit" className="btn btn-primary col-4" onClick={onchange && handleSubmit}>Ajouter</button>
          </div>
        </Grid>
      </form>
    </Grid>

  )
}

export default AddProduct
