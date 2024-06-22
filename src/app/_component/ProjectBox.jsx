'use client'
import Link from 'next/link';
import React from 'react';


// eslint-disable-next-line react/prop-types
export default function ProjectBox({ name, image, gitHub, liveDemo,index }) {
    console.log(name);
 console.log(image);

  return (
    <>
        <div>
          <div  className="grid-parent">
            <div className="box">
              <img src={image.src} className='h-[220px]' alt={name} />
              <h4>{name}</h4>
            </div>
            <div className="box-overlay">
              {/* <a href={gitHub}>Visit GitHub</a> */}
              <Link href={liveDemo}>مشاهدة الموقع</Link>
            </div>
          </div>
        </div>
    </>
  );
}
