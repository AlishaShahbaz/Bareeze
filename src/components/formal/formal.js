import React, { Component } from 'react';
import { Container,Row, Col, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Img from '../../assets/formals/banner.jpg'
import Category from '../categories/category'
import {Formaldata} from './formalData'
import { FaGreaterThan } from "react-icons/fa";

export default class Formal extends Component {
  render() {
    return (
      <Container className='mt-4'>
          <img src={Img} width='100%' />
            <div className='homecasual'>
              <Link to="/" className="li">
                HOME            
              </Link>
              <FaGreaterThan style={{fontSize:'12px'}} className='mx-2'/> FORMALS 
              </div>

           {/* products filter */}
           <Row className=' mt-5 justify-content-between'>
             <Category/>
          </Row>

          {/* all products */}

          <Row className='my-2'>
          {
            Formaldata.map((obj) => (
                <Col lg='3' md='4' sm='6' xs='12' className='mt-4'>
                  <Card className="my-card border-0 rounded-0" key={obj.id}>
                    <Card.Img className='img1' src={obj.images[0]}/>
                    <Card.Img className='img2' src={obj.images[1]}/>

                    <Card.Body className='p-0'>
                      <Card.Title className='mt-3 text-capitalize fs-6'>{obj.title}</Card.Title>
                      <Card.Title className='mt-2 text-capitalize fw-light fs-6'>PKR {obj.price}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
            ))
          }
          </Row>

        </Container>
    )
  }
}