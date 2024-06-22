'use client'
import React, { useEffect, useState } from 'react';
import heroImage from "../_images/heroimage.svg"
import Image from 'next/image';

const Hero = () => {
    const initialData = [
        {
            title: "التسويق الإلكتروني",
            color: "#ff3e88"
        },
        {
            title: "تصميم المواقع",
            color: "#328fe8"
        },
        {
            title: "برمجة التطبيقات",
            color: "#50deff"
        },
        {
            title: "الهويات التجارية",
            color: "#9741df"
        }
    ];
    const [currentItemIndex, setCurrentItemIndex] = useState(0); // State to track current item index

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentItemIndex(prevIndex => (prevIndex + 1) % initialData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    const currentItem = initialData[currentItemIndex];
    console.log(heroImage.src);
    return (
        <div className='hero bg-primary text-text min-h-screen mt-[102px]  md:pt-[100px]'>
            <div className="container mx-auto p-4">
                <div className='grid grid-cols-1 text-center gap-4   md:grid-cols-2 items-center '>

                    <div className=' '>
                        <h2 className='md:font-bold text-[40px]'>مرحبًا بكم في شركة سوفتوير الماستر!
                        </h2>
                        <h2 style={{ color: currentItem.color }} className='font-bold text-[40px] pt-[20px]'>{currentItem.title}</h2>
            
                    </div>
                    <div className='flex justify-center'>
                        <Image src={heroImage} alt="hero" />

                    </div>
                </div>




            </div>
        </div>
    );
}

export default Hero;
