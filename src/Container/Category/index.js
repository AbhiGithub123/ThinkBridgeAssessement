import React from 'react'
import Layout from '../../Component/Layout'
import {Container,Row,Col} from 'react-bootstrap';
import cat from '../../mockData/category.json'

/**
* @author
* @function Home
**/

const Category = (props) => {

  const renderCategories = (categories) => {

    let myCategories = [];

    for (let category of categories) {
        myCategories.push(
            <li key={category.name}>
                {category.name}
                {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
            </li>
        )
    }
    return myCategories;
}
  return(
    <Layout sidebar>
      <Container >
                <Row>
                    <Col md={12} >
                        <div >
                            <h3>Category List</h3>
                            
                        </div>

                    </Col>

                </Row>
                <Row>
                    <Col md={1}>
                        <ul >
                            {
                                renderCategories(cat.categoryList)
                            }
                           
                        </ul>
                    </Col>
                </Row>
            </Container>
    </Layout>
   )

 }

export default Category