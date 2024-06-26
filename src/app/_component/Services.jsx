import React from 'react';
import { CgWebsite } from "react-icons/cg";

const Services = () => {
    return (
        <div className='services bg-sec py-[80px] text-text min-h-screen'>
            <div className="container mx-auto p-4">
                <h2 className='text-center text-[32px] font-bold'>خدماتنا</h2>
                <p className='text-center pt-[20px] text-[18px]'>نقوم بتقديم جميع الخدمات التي تُسرع من الانتقال للسوق الالكتروني باحترافية وقوة بداية من برمجة المواقع وحتى التسويق لها لتحقيق كل ما تريد .</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 pt-[50px]'>
                    <div className="box">
                        <CgWebsite className="service-icon" />
                        <h3>تصميم المواقع
                        </h3>
                        <p>
                            خدمات تصميم المواقع الإلكترونية من مؤسسة الماستر, ان مؤسسةالماستر من أفضل شركات تصميم المواقع الالكترونية في السعودية , تختص الشركة في تقديم أفضل حلول تصميم المواقع الإلكترونية وجهات استخدام متجاوبة ولوحة تحكم سهلة بأفضل الأسعار وبأعلى جودة                  </p>
                    </div>
                    <div className="box">
                        <CgWebsite className="service-icon" />
                        <h3>تطبيقات جوال (أندرويد+ Ios)
                        </h3>
                        <p>
                            مؤسسة الماستر أفضل شركة برمجة تطبيقات إلكتروني في السعودية, تقوم بتقديم خدمات متنوعة في مجال تصميم تطبيقات الهاتف من تصميم تطبيقات أندرويد, تصميم تطبيقات أيفون وتصميم تطبيقات بتقنية الكروس بلات فورم تطبيقات البلاتفورم المشترك                  </p>
                    </div>
                    <div className="box">
                        <CgWebsite className="service-icon" />
                        <h3>تسويق الكتروني
                        </h3>
                        <p>
                            الماستر أفضل شركة تسويق الكتروني في السعودية, فتجمع بين خدمات التسويق الإلكتروني جميعها, الخبرة, فريق متميز واستخدام أمهر التقنيات واقل الأسعار، مما يجعلها الأفضل
                        </p>
                    </div>
                    <div className="box">
                        <CgWebsite className="service-icon" />
                        <h3>الهوية التجارية
                        </h3>
                        <p>
                            الهوية أفضل شركة تصميم هوية تجارية كاملة للشركات والمؤسسات, في إجادة نهدف إلى تصميم هوية إبداعية تعبر عن نشاطك التجاري وتميزك وسط منافسينك, احصل على هوية تجارية متكاملة بأفضل الأسعار وبأعلى جودة
                        </p>

                    </div>
                    <div className="box">
                        <CgWebsite className="service-icon" />
                        <h3>ﺍﻟﻤﻮﺷﻦ ﺟﺮﺍﻓﻴﻚ
                        </h3>
                        <p>
                            تعرف على خدمات الموشن جرافيك من شركة الماستر أفضل شركة تصميم فيديوهات في السعودية, اعرف كيف تصمم فيديو موشن جرافيك وما هي أسعار تصميم الفيديوهات في السعودية وأكثر مع شركة إجادة                        </p>

                    </div>
                    <div className="box">
                        <CgWebsite className="service-icon" />
                        <h3>تصميم واجهات الاستخدام
                        </h3>
                        <p>

                            شركة الماستر أفضل شركة تصميم واجهات الاستخدام للموقع أو للتطبيق، كما يسهل أيضًا عملية تفاعل المستخدم مع التطبيق او الموقع من خلال واجهة سهلة وبسيطة, شركة إجادة من أفضل شركات تصميم المواقع والواجهات في السعودية مع فريق عمل احترافي
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Services;
