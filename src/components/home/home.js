import React, { Component } from 'react'
import Homedata, { sliderdata } from './homeData'
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";




export default class home extends Component {
    state={
        data:Homedata
    }

  render() {
      var aray=this.state.data[1].sliderdata
    return (
      <div>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={this.state.data[0].baner1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={this.state.data[0].baner2} class="d-block w-100" alt="..."/>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    
    <div className='container-fluid b pt-5'>
        <div className='container b pt-3'>
            <div className='row pb-4'>
                <div className='col-3'>
                    <p style={{fontSize:'2rem'}}>NEW-IN</p>
                    <p style={{fontSize:'13px', lineHeight:'27px'}}>These spectacular styles<br/> are new and here to <br/> certainly tempt you</p>
                    <a href='' id='view'>View All</a>
                </div>
                <div className='col-9 d-flex'>
                  <Swiper slidesPerView={4} spaceBetween={30}
                  pagination={{
                   clickable: true,
                  }}
                  autoplay = {true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                  >
                    {
                      aray.map((obj,i)=>{
                        return (
                          <SwiperSlide key={i}>
                          <img src={obj.src}></img>
                          <p>{obj.text}</p>
                          </SwiperSlide>
                        )                     
                        })
                    }
                </Swiper>              
              </div>
                
            </div>
        </div>
    </div>
    




      </div>
    )
  }
}
