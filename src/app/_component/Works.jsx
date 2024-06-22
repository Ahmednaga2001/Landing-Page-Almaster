'use client'
import React, { useState } from 'react';
import ProjectBox from './ProjectBox' 
import ecommImage from '../_images/e-commerce.png';
import moviesImg from '../_images/movies.png';
import foodImg from '../_images/food.png';
import apiEcomm from '../_images/bac.jpg';
import bookeImg from '../_images/booke-tem.png';
import BlogImg from '../_images/blog.png';
import legacyImg from '../_images/legacy.png';
import portImg from '../_images/booke-tem.png';


const Works = () => {
    const [projectsInfo] = useState([
        {
          id: 1,
          // name: 'Ecommerce-api',
          name: 'واجهة برمجة تطبيقات التجارة الإلكترونية',
          image: apiEcomm,
          gitHub: 'https://github.com/Ahmednaga2001/nodejs-ecommerce-api-v1',
          liveDemo : ''
        },
        {
          id: 2,
          // name: 'Online Courses Academy-api',
          name: 'أكاديمية الدورات عبر الإنترنت - API',
          image: apiEcomm,
          gitHub: 'https://github.com/Ahmednaga2001/Online-Courses-Academy',
          liveDemo : ''
    
        },
        {
          id: 3,
          // name: 'Blog Server',
          name: 'خادم المدونة',
          image: BlogImg,
          gitHub: 'https://github.com/Ahmednaga2001/BLOG-SERVER',
          liveDemo : ''
    
        },
        {
          id: 4,
          // name: 'Ecommerce',
          name: 'التجارة الإلكترونية',
          image: ecommImage,
          gitHub: 'https://github.com/Ahmednaga2001/Shopping--Cart-Redux-Toolkit',
          liveDemo : 'https://ahmed-react-e-commerce.netlify.app/'
    
        },
        {
          id: 5,
          // name: 'Movies App',
          name: 'تطبيق الأفلام',
          image: moviesImg,
          gitHub: 'https://github.com/Ahmednaga2001/Movies-App',
          liveDemo : 'https://ahmed-movies-app-reactjs.netlify.app/'
    
        },
        {
          id: 6,
          // name: 'Legacy-Logistics Website',
          name: 'موقع لوجستيات التراث',
          image: legacyImg,
          gitHub: 'https://github.com/Ahmednaga2001/legacy-logistics',
          liveDemo : 'https://ahmednaga2001.github.io/legacy-logistics/'
    
        },
        {
          id: 7,
          // name: 'Personal Portfolio',
          name : "موقع تعريفى شخصى",
          image: portImg,
          gitHub: 'https://github.com/Ahmednaga2001/Personal-Portfolio',
          liveDemo : 'https://main--naga-personal-portfolio.netlify.app/'
    
        },
        {
          id: 8,
          // name: 'Food Template',
          name: 'قالب الطعام',
          image: foodImg,
          gitHub: 'https://github.com/Ahmednaga2001/Food',
          liveDemo : 'https://ahmednaga2001.github.io/Food/'
    
        },
        {
          id: 9,
          // name: 'Book Template',
          name: 'قالب الكتاب',
          image: bookeImg,
          gitHub: 'https://github.com/Ahmednaga2001/book-template',
          liveDemo : 'https://ahmednaga2001.github.io/book-template/'
    
        },
      ]);
    return (
        <div className='works py-[80px] bg-primary min-h-screen text-text'>
            <div className="container mx-auto px-4">
                <h2 className='text-center text-[32px] font-bold'>أعمالنا</h2>
                <div className='buttons flex justify-center flex-wrap gap-4 pt-[20px]'>
                    <button className='border rounded-full px-5 py-2'>جميع الأعمال</button>
                    <button className='border rounded-full px-5 py-2'>المواقع الاكترونية</button>
                    <button className='border rounded-full px-5 py-2'>التطبيقات</button>
                    <button className='border rounded-full px-5 py-2'>الموشن جرافيك</button>

                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 pt-[50px]'>
          {projectsInfo.map((project, index) => (
            <ProjectBox key={project.id} index={index} name={project.name} image={project.image} gitHub={project.gitHub} liveDemo={project.liveDemo} />
          ))}
        </div>
            </div>

        </div>
    );
}

export default Works;
