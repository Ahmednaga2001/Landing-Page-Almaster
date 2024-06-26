'use client'
import React, { useState } from 'react';
import { IoSettings } from "react-icons/io5";

const Advantages = () => {
    const [data , setData] = useState([
        {
            title : "الابتكار والتطوير المستمر",
            icon : IoSettings,
            desc : "نحن ملتزمون بالابتكار وتطوير منتجاتنا باستمرار لتكون دائمًا في الطليعة. نستخدم أحدث التقنيات والمنهجيات في مجال تطوير البرمجيات لضمان أن حلولنا ليست فقط مواكبة للتكنولوجيا الحديثة، بل تتفوق عليها."
        },
        {
            title : "حلول مخصصة",
            icon : IoSettings,
            desc : "نحن ندرك أن كل عميل لديه احتياجات فريدة. لذلك، نقدم حلول برمجية مخصصة مصممة لتلبية متطلباتك الخاصة وتعزيز أداء أعمالك. نعمل معك عن كثب لضمان أن النظام الذي نقدمه يلبي كل توقعاتك."
        },
  
        {
            title : "الجودة والاعتمادية",
            icon : IoSettings,
            desc : "نحن نلتزم بأعلى معايير الجودة في كل مشروع نقوم به. نضمن أن منتجاتنا خالية من الأخطاء وموثوقة، مما يوفر لك راحة البال ويمكّنك من التركيز على أعمالك الأساسية."
        },
        {
            title : "أسعار تنافسية",
            icon : IoSettings,
            desc : "نحن نقدم حلولًا برمجية عالية الجودة بأسعار تنافسية. نفهم أن الكفاءة المالية مهمة لنجاح أعمالك، لذلك نحرص على تقديم أفضل قيمة مقابل استثمارك."
        },
        {
            title : "فريق متعدد التخصصات",
            icon : IoSettings,
            desc : "فريقنا يتكون من خبراء في مجالات متعددة، بما في ذلك تطوير البرمجيات، التسويق الرقمي، التصميم الجرافيكي، تحليل البيانات، وإدارة المشاريع. هذه التشكيلة المتنوعة تتيح لنا تقديم حلول متكاملة تغطي جميع جوانب احتياجات عملائنا"

        },
        {
            title : "الابتكار في التسويق الرقمي",
            icon : IoSettings,
            desc : "نحن نلتزم بتقديم استراتيجيات تسويقية مبتكرة تستند إلى أحدث الاتجاهات والأدوات في عالم التسويق الرقمي. نساعد عملاءنا على بناء حضور رقمي قوي من خلال استخدام تقنيات التسويق عبر وسائل التواصل الاجتماعي، وتحسين محركات البحث (SEO)، وإعلانات الدفع لكل نقرة (PPC)، والتسويق عبر البريد الإلكتروني، وغيرها من الأساليب المبتكرة."
        },
        {
            title : "التعاون والشراكة",
            icon : IoSettings,
            desc : "نؤمن بأن النجاح ينبع من التعاون والشراكة الوثيقة مع عملائنا. نحن نعمل كجزء من فريقك، ونسعى لبناء علاقات طويلة الأمد قائمة على الثقة والاحترام المتبادل."
        },
        {
            title : "خدمة العملاء الممتازة",
            icon : IoSettings,
            desc : "رضا العملاء هو أولويتنا القصوى. نقدم دعمًا فنيًا مستمرًا لضمان أن جميع استفساراتك واحتياجاتك يتم التعامل معها بسرعة وكفاءة. نحن هنا لمساعدتك في كل خطوة على الطريق."
        }
    ])
    return (
        <div className='advantages py-[80px] bg-sec text-text min-h-screen'>
            <div className="container mx-auto px-4">
              <h2 className='text-center text-[32px] font-bold'>ما يميزنا</h2>
              <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-4 pt-[50px]">
                {
                    data.map((item , index) =>(
                        <div className={` box ${index%2==0 ? 'md:border-l border-gray-600' : ''} p-4  `}>
                        <h2 className='flex items-center text-[28px]  gap-4'><item.icon className='text-[] text-orange-300'/>{item.title}</h2>
                        <p className='pt-[20px]'>{item.desc}</p>
                     </div>
                

                    ))
                }
            
             


              </div>
            </div>
            
        </div>
    );
}

export default Advantages;
