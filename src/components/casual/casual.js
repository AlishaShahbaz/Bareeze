import React, { Component } from 'react';
import { Container, Breadcrumb,Row, Col, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Casualdata } from './casualdata';
import Category from '../categories/category'

import Img from '../../assets/casuals/banner.jpg'
import { FaGreaterThan } from "react-icons/fa";

export default class Casual extends Component {
  render() {
    return (
      <Container className='mt-4'>
          <img src={Img} width='100%' />
            <div className='homecasual'>
              <Link to="/" className="li">
                HOME            
              </Link>
              <FaGreaterThan style={{fontSize:'12px'}} className='mx-2'/> CASUALS 
              </div>

           {/* products filter */}
           <Row className=' my-5 justify-content-between'>
             <Category/>
          </Row>

          {/* all products */}

          <Row className='my-2'>
          {
            Casualdata.map((obj) => (
                <Col lg='3' md='4' sm='6' xs='12' className='mt-4'>
                  <Card className="my-card border-0 rounded-0" key={obj.id}>
                    <Card.Img className='img1' src={obj.images[0]}/>
                    <Card.Img className='img2' src={obj.images[1]}/>

                    <Card.Body className='p-0'>
                      <Card.Title className='mt-3 text-uppercase fs-6'>{obj.title}</Card.Title>
                      <Card.Title className='mt-2 fw-light fs-6'>PKR {obj.price}</Card.Title>
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