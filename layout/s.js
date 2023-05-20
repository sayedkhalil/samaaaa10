import Head from "next/head";
import ProdItem from "./proditem";
import { useState } from "react";
const Mazaya = () => {
  const[b,setb]=useState("scl")
  document.addEventListener("scroll",()=>{if(document.documentElement.scrollTop>900){
    setb("sc2")
  }})
    
    return (  
        <div className="mt-2  p-2">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>
        <h5 className="d-block d-lg-none c-t  text-end">مزايا التطبيق</h5>
<div className="row ">
  <div className="col-8 col-lg-10">
  <h5 className="d-none d-lg-block text-light text-end">مزايا التطبيق</h5>
  <div className="d-none d-lg-block h3">
   <p className="text-dark text-end">توفير آلاف المنتجات والعلامات التجارية المتميزة</p>
   <p className="text-dark text-end">توفير وتسهيل كافة خيارات الدفع الإلكتروني</p>
   <p className="text-dark text-end">إمكانية إلغاء الطلب بعد الشراء واسترجاع المبلغ كاملا وبسهولة </p>
   <p className="text-dark  text-end">
   الموثوقية  حيث يمكن التواصل مع الموقع في حال حصول إشكالية معينة بخصوص المنتج ويتم حلها

     </p>
     <p className="text-dark  text-end">
     يتم شحن العديد من المنتجات  بتوقيت يتنافس مع مواقع التسوق الأخرى

     </p>
  </div>
  <div className="d-block d-lg-none ">
   <p className="text-dark text-end">توفير افضل المنتجات بأسعار مناسبة وعروض حصرية 
 </p>
   <p className="text-dark  text-end">
   نوفر لك كافة الامكانيات لضمان وصول شحنتك بأسرع وقت ممكن 

     </p>
     <p className="text-dark text-end">توفير وتسهيل كافة خيارات الدفع الإلكتروني</p>

     <p className="text-dark  text-end">
     منتجات تجدونها حصرياً فقط على تطبيق السمى
     </p>

     </div>
  </div>
  <img className={`col-4 col-lg-2 ${b}`} src="hand.svg" alt=""/>
</div>
</div>
    );
}
 
export default Mazaya;