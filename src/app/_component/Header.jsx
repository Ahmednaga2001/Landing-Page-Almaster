'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }       
    }, [isMenuOpen]);

    return (
        <>
            {!isMenuOpen && (
                <nav className='bg-primary text-text fixed top-0 left-0 z-20 w-full'>
                    <div className="container mx-auto p-4">
                        <div className='grid grid-cols-2 items-center gap-4'>
                            <div className='brand'>
                                <img src="/logo.png" className='w-[70px] h-[70px] rounded-md' alt="Logo" />
                            </div>
                            <div className='flex justify-end gap-5'>
                                <div className="links md:flex gap-5 hidden">
                                    <div className='flex items-center gap-2 px-5 py-3 cursor-pointer border rounded-full'>
                                        ابدأ مشروعك
                                        <FaArrowLeftLong className='flex' />
                                    </div>
                                    <div className='flex items-center gap-2 px-5 py-3 cursor-pointer border rounded-full'>
                                        معرض اعمالنا
                                        <FaArrowLeftLong className='flex items-center' />
                                    </div>
                                </div>
                                <div>
                                    <button onClick={toggleMenu}>
                                        <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 50 50">
                                            <path d={isMenuOpen ? "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" : "M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"}></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            )}
            {isMenuOpen && (
                    <nav className="bg-primary min-h-screen text-text se-nav fixed top-0 w-full z-20">
                    <div className="container mx-auto p-4">
                        <div className='flex justify-between'>
                            <img src="/logo.png" className='w-[70px] h-[70px] rounded-md' alt="Logo" />
                            <button onClick={toggleMenu}>
                                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill='white'>
                                    <path d={isMenuOpen ? "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" : "M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"}></path>
                                </svg>
                            </button>

                        </div>
                        <div className='flex justify-center text-center'>
                            <ul className='pt-[30px]'>
                                <li className='pt-[20px] text-[20px] hover:text-[25px] transition'><Link href="/">الرئيسية</Link></li>
                                <li className='pt-[20px] text-[20px] hover:text-[25px]  transition'><Link href="/">خدمتنا</Link></li>
                                <li className='pt-[20px] text-[20px] hover:text-[25px] transition'><Link href="/">اعمالنا</Link></li>
                                <li className='pt-[20px] text-[20px] hover:text-[25px] transition'><Link href="/">المقالات</Link></li>
                                <li className='pt-[20px] text-[20px] hover:text-[25px] transition'><Link href="/">تواصل معانا</Link></li>
                            </ul>


                        </div>
                        <div className=" flex justify-center mt-[40px] gap-4">
                            <div className='flex items-center gap-2 px-5 py-3 cursor-pointer border rounded-full'>
                                ابدأ مشروعك
                                <FaArrowLeftLong className='flex' />
                            </div>
                            <div className='flex items-center gap-2 px-5 py-3 cursor-pointer border rounded-full'>
                                معرض اعمالنا
                                <FaArrowLeftLong className='flex items-center' />
                            </div>
                        </div>

                    </div>
                </nav>
            )}
        </>
    );
}

export default Header;
