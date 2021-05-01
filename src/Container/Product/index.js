import React, { useState } from 'react'
import Layout from '../../Component/Layout'
import {Container,Row,Col,Table} from 'react-bootstrap';
import prod from '../../mockData/product.json';
import Input from '../../Component/Input';
import Modal  from '../../Component/Modal';
import cat from  '../../mockData/category.json'
import './style.css';

/**
* @author
* @function Product
**/

const Product = (props) => {

  const [show, setShow] = useState(false);
  const [name,setName]=useState('');
  const [quantity,setQuantity]=useState('');
  const [price,setPrice]=useState('');
  const [description,setDescription]=useState('');
  const [categoryId,setCategoryId]=useState('');
  const [productDetailModal,setProductDetailModal]=useState(false);
  const [productDetails,setProductDetails]=useState(null);


  const handleShow = () => setShow(true);


  const handleClose = () => {
     
    //AddProduct function is called if backend API works

    // const form=new FormData();
    // form.append('name',name);
    // form.append('quantity',quantity);
    // form.append('price',price);
    // form.append('description',description);
    // form.append('category',categoryId);

    // for(let pic of productPictures)
    // {
    //   form.append('productPicture',pic);
    // }

    // dispatch(addProduct(form));
   

     setShow(false);
    }

    const createCategoryList=(categories,options=[])=>{
      for(let category of categories){
          options.push({value:category.id,name:category.name})
          if(category.children.length>0)
          {
              createCategoryList(category.children, options);
          }
      }
      return options;
    }


  const renderAddProductModal=()=>{
    return(
      <Modal show={show} handleClose={handleClose} modalTitle={'Add New Product'}>
      <Input 
                    label="Name"
                    value={name} 
                    placeholder={"Product Name"} 
                    onChange={(e)=>setName(e.target.value)}/>
  
                    <Input 
                    label="Quantity"
                    value={quantity} 
                    placeholder={"Quantity"} 
                    onChange={(e)=>setQuantity(e.target.value)}/>
  
                    <Input 
                    label="Price"
                    value={price} 
                    placeholder={"Price"} 
                    onChange={(e)=>setPrice(e.target.value)}/>
  
                    <Input 
                    label="Description"
                    value={description} 
                    placeholder={"Description"} 
                    onChange={(e)=>setDescription(e.target.value)}/>

                    <select className="form-control" value={categoryId} onChange={(e)=>setCategoryId(e.target.value)}>
                      <option>select category</option>
                      {
                          createCategoryList(cat.categoryList).map(option=>
                              <option key={option.value} value={option.value}> {option.name}</option>
                              )
                      }

                   </select>
  
                
                   
      </Modal>
    )
  }



  const renderProducts=()=>{
    return (
      <Table  style={{fontSize:'12'}} responsive="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Description</th>
          
        </tr>
      </thead>
      <tbody>
        {
          prod.products.length>0 ?
          prod.products.map(product=>
            <tr onClick={()=>showProductDetailsModal(prod)} key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td>{product.description}</td>
          
          
         </tr>
            ) : null
        }
              
      </tbody>
    </Table>
    )
  }

  const handleCloseProductDetailsModal=()=>{
    setProductDetailModal(false);
  }

  const showProductDetailsModal=(prod)=>{
    setProductDetails(prod);
    setProductDetailModal(true);
    
  }

  

    



  return(
    <Layout sidebar>
      <Container>
      <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Product</h3>
                            <button onClick={handleShow} >Add</button>
                        </div>

                    </Col>
      </Row>
      <Row>
        <Col>
         {
           renderProducts()
         }
    
        </Col>
      </Row>

      </Container>
      {renderAddProductModal()}
      
      
    </Layout>
   )

 }

export default Product