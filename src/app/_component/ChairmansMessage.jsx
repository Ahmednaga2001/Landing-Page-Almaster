import React from 'react';
import Image from 'next/image';
import mperson from "../_images/mperson.jpeg"
const ChairmansMessage = () => {
    return (
        <div className='min-h-screen bg-primary flex items-center'>
            <div className="container mx-auto p-4">
                <div className=' shadow-md bg-[#845f389a] px-[20px]  py-[80px] mx-auto '>
                <div className="img flex justify-center">
                    <Image src={mperson} width={100} height={100} className='w-[100px] h-[100px] rounded-full' />
                </div>
                <div className="message text-center pt-[20px]">
                    <h2 className='text-[32px] font-bold  text-gray-300'>كلمة رئيس مجلس الإدارة</h2>
                    <p className='pt-[20px] w-1/2 mx-auto leading-[30px] text-gray-400'>كان الطموح منذ اليوم الأول لتأسيس ALMaster هو تحقيق الريادة في عالم البرمجة، والتقنية، حيث تقوم رؤيتنا على إعادة تشكيل مستقبل التكنولوچيا، وتقديم حلاً برمجيًا استثنائيًا متوافق مع احتياجات عملائنا؛ ولهذا قمنا باختيار فريقنا باحترافية، وعناية؛ حتى نكون على الطريق الصحيح صوب أهدافنا</p>
                </div>

                </div>

            </div>
        </div>
    );
}

export default ChairmansMessage;
