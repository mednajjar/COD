import React, {useEffect, useState} from 'react'
import { Grid, TextField, Typography } from '@material-ui/core'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { makeStyles } from '@material-ui/core/styles';
import image from '../../../../assets/image.png';
import images from '../../../../assets/images.png';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme)=>({
  editor:{
      height: 'auto',
      border: '1px solid #CCCCCC',
      marginTop: '1%',
      background: 'white',
  },
  block:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: '#f9f9f9',
    marginTop: '2%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 'auto',
    padding: '3%'
  }
}))
const AddProduct = () => {
  const classes = useStyles()
  const [file, setFile] = useState('')
  const [files, setFiles] = useState([])
    const [editorState, setEditorState] = useState(() =>EditorState.createEmpty());
    console.log('magic',editorState.getCurrentContent().getPlainText())

  const fileOnChange = (e) =>{
    if(e.target.files){
      const fileArray = URL.createObjectURL(e.target.files[0])
      setFile(fileArray)
    }
    
  }
  const filesOnChange = (e) =>{
    if(e.target.files){
      const filesArray = Array.from(e.target.files).map((file)=> URL.createObjectURL(file))     
      setFiles(filesArray)
    }
    
  }
const [title, setTitle] = useState('')
const [price, setPrice] = useState()
const [error, setError] = useState('')
const [error2, setError2] = useState('')
const onchange = (e)=>{
setTitle(e.target.value)
setPrice(e.target.value)
}

console.log(title.length)


// const test = ()=>{
// let temp = {};
// temp.title = 
// }
// useEffect(()=>{
// test();
// test2();
// },[test, test2])
console.log('error',error)
console.log('error2',error2)
 console.log('file',file)
 console.log('files',files)
    return (
      
        <Grid container className="mx-auto d-flex flex-column p-3">
              <form>
            <Grid item lg={12} className="text-center">
                <Typography variant="h5" component="h5" >
                    Ajouter un produit
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} className={classes.block}>
                <Grid item lg={10}>
                    <TextField
                    className="col-12"
                    name="title"
                    label= "Title"
                    onChange= {onchange}
                    helperText={error}
                    />
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={3} className="mt-3">
                    <TextField
                    className="col-12"
                    name="price"
                    label= "Prix"
                    onChange= {onchange}
                    helperText={error2}
                    />
                </Grid>
                <Grid item xs={4} sm={3} md={3} lg={3} className="mt-3">
                    <TextField
                    className="col-12"
                    name="stock"
                    label= "Stock"
                    onChange= {onchange}
                    helperText={error2}
                    />
                </Grid>
                <Grid item lg={10} className="mt-3">
                    <TextField
                    className="col-12"
                    multiline
                    rows={4}
                    name="short-d"
                    label= "Brève description"
                    onChange= {onchange}
                    />
                </Grid>
                <input type="file" className="mt-3" id="file" onChange={(e)=>fileOnChange(e)} style={{display: 'none'}} />
                <input type="file" multiple className="mt-3" id="file2" onChange={(e)=>filesOnChange(e)} style={{display: 'none'}} />

                <label htmlFor="file" className="d-flex flex-column mt-4">
                <span className="text-secondary">Upload image principale</span>
                  <i className="mt-4">
                  { 
                    file ? (<img src={file} alt="image" className="col-3 border"/>)          
                       : <img src={image} alt="image principale" style={{width:'15%', cursor: 'pointer'}} />
                    }
                  </i>
                </label>
                <label htmlFor="file2" className="d-flex flex-column justify-content-start mt-4 flex-wrap relative">
                  <span className="text-secondary">Upload sub images (4 max)</span>
                  <i className="d-flex flex-row col-12 justify-content-start mt-4 flex-wrap">
                  { 
                    (files.length > 0 && files.length > 4) ? <h5 className="text-danger btn fw-bold">You must upload 4 pics max!</h5> : files.length ?  files.map((img, index)=>
                      <img key={index} src={img} alt="image" className="col-3 border"/>          
                      )  : <img src={images} alt="images" style={{width:'15%', cursor: 'pointer'}} />
                    }
                  </i>
                 
                </label>

                  <label htmlFor="" style={{marginTop: '4%', color: 'gray'}}>Longue description</label>
                <Grid item className={classes.editor}>
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                    name="long-d"
                  />
                </Grid>
            <div className="d-flex flex-row col-12 justify-content-end mt-5">
         
            <button type="submit" className="btn btn-primary col-4">Ajouter</button>
            </div>
            </Grid>
            </form>
        </Grid>
        
    )
}

export default AddProduct
