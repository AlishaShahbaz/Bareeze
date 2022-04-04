import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Categoriesdata } from './categorydata';

export default class Category extends Component {
  render() {
    return (
      <>
            <Row className=''>
                <Col lg={2} md={6} sm={12}>
                <select className='select border rounded-0 p-2' style={{width:'100%'}}>
                <option value="price">Price</option>
                    {
                        Categoriesdata[0].price.map((price) => (
                                <option value={price}>PKR {price}</option>
                        ))
                    }
                </select>
                </Col>
                <Col lg={2} md={6} sm={12}>
                <select className='select border rounded-0 p-2' style={{width:'100%'}}>
                <option value="color">Colors</option>
                    {
                        Categoriesdata[0].colors.map((color) => (
                                <option value={color}>{color}</option>
                        ))
                    }
                </select>
                </Col>
                <Col lg={2} md={6} sm={12}>
                <select className='select border rounded-0 p-2' style={{width:'100%'}}>
                <option value="fabric">Fabric</option>
                    {
                        Categoriesdata[0].fabric.map((fabric) => (
                                <option value={fabric}>{fabric}</option>
                        ))
                    }
                </select>
                </Col>
                <Col lg={2} md={6} sm={12}>
                <select className='select border rounded-0 p-2' style={{width:'100%'}}>
                <option value="type">Type</option>
                    {
                        Categoriesdata[0].type.map((type) => (
                                <option value={type}>{type}</option>
                        ))
                    }
                </select>
                </Col>
                <Col lg={2} md={6} sm={12}>
                <select className='select border rounded-0 p-2' style={{width:'100%'}}>
                <option value="season">Season</option>
                    {
                        Categoriesdata[0].season.map((season) => (
                                <option value={season}>{season}</option>
                        ))
                    }
                </select>
                </Col>
            </Row>
      </>
    )
  }
}