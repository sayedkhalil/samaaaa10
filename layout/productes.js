import Head from "next/head";
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc,getDoc} from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { useAppContext } from "../AppContext";
import { useRouter } from "next/router";


const Productes = () => {
    const [d1,setd1]=useState("d-none")
    const [d2,setd2]=useState("d-none")
    const [d3,setd3]=useState("d-none")
    const [d4,setd4]=useState("d-none")
    const ond1=()=>{setd1("d-block"),setd2("d-none"),setd3("d-none"),setd4("d-none")}
    const ond2=()=>{setd2("d-block"),setd1("d-none"),setd3("d-none"),setd4("d-none")}
    const ond3=()=>{setd3("d-block"),setd2("d-none"),setd1("d-none"),setd4("d-none")}
    const ond4=()=>{setd4("d-block"),setd2("d-none"),setd3("d-none"),setd1("d-none")}
    const [msg,setmsg]=useState({})
    const onname = (e) => setmsg({...msg,name:e.target.value,data:Date()})
  const ontele = (e) => setmsg({...msg,tele:e.target.value})
  const onmsg = (e) => setmsg({...msg,id:e.target.value})
 
  const onsend = async(e)=>{
    e.preventDefault() 
    const docRef = await setDoc(doc(db, "msgs", msg.tele),msg); 
    setmsg({name:"",tele:"",msg:"",}) 
    
    
}
    
    return (  
        <div className="mt-2">
                <h4 className="col-12 col-lg-3 title ms-auto"> الأسئلة المتكررة</h4>
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
  <div className="w-100 row mt-3">
<div className="col-12 col-lg-6 rtl row">
    <h5 className="dropdown-toggle col-12 " onClick={ond1}> ماهي الخدمة التي يقدمها السمى ؟</h5>
    <hr/>
    <p className={`cp ${d1}`}>
هي منصة للتسوق الإلكتروني يمكنك تصفح آلاف المنتجات وإتمام عملية الشراء بسهولة وبطرق دفع متنوعة</p>
    <h5 className="dropdown-toggle col-12 "onClick={ond2}>كيف اسجل للاستفادة من خدمات السمى</h5>
    <hr/>
    <p className={`cp ${d2}`}> بتحمل التطبيق السمى عبر ابل ستور للايفون أو قوقل بلاي للاندرويد ، وبعد ذلك ادخال رقم الجوال والحصول على كود التحقق و يتم الاطلاع على  الخدمات والعروض المقدمه.</p>
    <h5 className="dropdown-toggle col-12 "onClick={ond3}>هل أقدر  اسجل مع ألو كمندوب توصيل؟ </h5>
    <hr/>
    <p className={`cp ${d3}`}> نعم  يستطيع الجميع تقديم طلب تسجيل كمندوب توصيل لمن لديه هويه وطنيه او اقامة  ورخصة سير ساريه المفعول ،  والتقديم يكون من خلال الموقع الالكتروني ، او المراسله  عبر الواتساب 966551008805</p>
    <h5 className="dropdown-toggle col-12 "onClick={ond4}>هل أقدر اسجل مع السمى كمتجر؟</h5>
    <hr/>
    <p className={`cp ${d4}`}>نعم  يستطيع الجميع تقديم طلب تسجيل كمتجر لمن لديه سجل تجاري ساري المفعول ، من خلال الموقع الالكتروني ، او عبر الواتساب 966551008805 أو الايميل info@aloo.com.sa</p>
</div>
<form className="rtl col-12 col-lg-6" onSubmit={onsend}>
  <div class="form-row ">
    <h6 className="text-center">لديك سؤال آخر</h6>
    <div class="form-group col-md-6">
      <label for="inputEmail4">الاسم</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="الاسم بالكامل" onChange={onname} value={msg.name} required/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">رقم الجوال</label>
      <input type="tele" class="form-control" id="inputPassword4" placeholder="رقم الجوال" onChange={ontele} value={msg.tele} required/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress"> اترك رسالتك</label>
    <textarea  class="form-control " rows="3" cols="3" onChange={onmsg} value={msg.msg} required></textarea>
  </div>

  <div className="ltr mb-2">
  <button type="submit" class="btn text-light mt-1  bcP" onSubmit={onsend}>أرسل الآن</button>
  </div>
</form>
  </div>
</div>
    );
}
 
export default Productes;