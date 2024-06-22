import Link from 'next/link';
import React from 'react';
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
        <div className='bg-sec text-text footer'>
            <div className="container mx-auto px-4 py-[80px]">
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
                    <div className="about">
                        <h2 className='text-[32px] font-semibold'>من نحن</h2>
                        <p className='pt-[30px]'>منظمة ALMaster لحلول تكنولوجيا المعلومات، التي لديها الفريق الأكثر نشاطًا وحماسًا لتأمين وتوفير حلول وخدمات معلومات الأعمال. ونحن نسعى باستمرار لإضافة قيمة لعملائنا.</p>
                    </div>
                    <div className="links mx-auto">
                        <h2 className='text-[32px] font-semibold'>روابط مهمة</h2>
                        <ul className='pt-[30px]'>
                            <li className='pt-[15px] text-[20px] hover:translate-x-[-10px] link'><Link href="/">الرئيسية</Link></li>
                            <li className='pt-[15px] text-[20px] hover:translate-x-[-10px] link'><Link href="/">خدمتنا</Link></li>
                            <li className='pt-[15px] text-[20px] hover:translate-x-[-10px] link'><Link href="/">اعمالنا</Link></li>
                            <li className='pt-[15px] text-[20px] hover:translate-x-[-10px] link'><Link href="/">طلب</Link></li>
                        </ul>
                    </div>
                    <div className="contacts mx-auto">
                        <h2 className='text-[32px] font-semibold'>تواصل معنا</h2>
                        <div className='pt-[30px]'>
                            <div className='flex items-center gap-4'>
                                <FaSquarePhoneFlip className='w-[30px] h-[30px]' />
                                <a href="tel:+1234567890" className="text-[20px]">+123 456 7890</a>
                            </div>
                            <div className='flex items-center gap-4 pt-[15px]'>
                                <MdEmail className='w-[30px] h-[30px]' />
                                <a href="mailto:info@itad.com" className="text-[20px]">info@itad.com</a>
                            </div>
                            <div className='flex items-center gap-4 pt-[15px]'>
                                <FaLocationDot className='w-[30px] h-[30px]' />
                                <p className='text-[20px]'>الرياض</p>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
        <div className='bg-primary text-center py-[40px] text-[20px] text-text'>
                    <p>جميع الحقوق محفوظة للماستر@2024</p>
                </div>
        </>
        
    );
}

export default Footer;
