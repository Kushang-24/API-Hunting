import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import userContext from '../context/userContext';

const ViewProduct = ({ products, addToCartFun, deleteData, editData }) => {
  const propData = products || [];
  const { currentuser } = useContext(userContext); 

  return (
    <section>
      <div className="container pb-3">
        <div className="row gy-3" style={{}}>
          {
            propData.map((val, index) => (
              <div className="col-4" key={index}>
                <Card className='mb-3'>
                  <Card.Img variant="top" src={val.img} style={{ height: '200px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{val.title}</Card.Title>
                    <Card.Text>
                      {val.price}
                    </Card.Text>
                    <Button variant="primary" onClick={() => addToCartFun(val.id)}>Add to Cart</Button>
                    {
                      currentuser.role == "Admin" && (
                        <>
                          <Button variant="danger" className='ms-1' onClick={() => deleteData(val.id)}>Delete</Button>
                          <Button variant="warning" className='ms-1' onClick={() => editData(val)}>Edit</Button>
                        </>
                      )
                    }
                  </Card.Body>
                </Card>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default ViewProduct;