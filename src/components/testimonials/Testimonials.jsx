import React,{useState,useEffect} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';


const Testimonials = () => {
  const [data,setData] =useState({});
  const [avtar,setAvtar] =useState('');
  useEffect(()=>{

    const opt = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b6d43456b4msh4269427a507ce22p138de2jsn8c3088268dd5',
        'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
      }
    };
    
    fetch('https://any-anime.p.rapidapi.com/anime/', opt)
      .then(response => response.json())
      .then(response => setAvtar(response.stuff[0].image))
      .catch(err => console.error(err));


    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b6d43456b4msh4269427a507ce22p138de2jsn8c3088268dd5',
        'X-RapidAPI-Host': 'motivation-quotes-api.p.rapidapi.com'
      }
    };
    
    fetch('https://motivation-quotes-api.p.rapidapi.com/api/quotes', options)
      .then(response => response.json())
      .then(response => setData(response[0]))
      .catch(err => console.error(err));
       

  },[])


  return (
    <section id="testmonials">
      <h2 className="qota">Quote of the Day</h2>
      <Swiper 
        className="container testimonials__container"
        >
          <SwiperSlide className="testimonial" >
          <div className="client__avatar">
          <img src={avtar} alt="avtarr" />
          </div>
          {/* {data.quote ?  <p className="client__review"> {data.quote} </p> :  */}
          <p className="client__review"> “If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.”</p>      
        </SwiperSlide>
     
      </Swiper>
    </section>
  )
}

export default Testimonials




