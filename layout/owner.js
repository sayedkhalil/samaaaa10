import Head from "next/head";
const Owner = () => {
    return ( 
        <div className="mt-2  p-2">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>
        <h4 className="col-12 col-lg-3 my-2 title ms-auto">  الملاك</h4>
<div className="row qw00">
<div className="col-12 col-lg-6 rel row p-2">
<img className="col-4 " src="av02.png" alt=""/>
<div className="col-8 rel">
<h5 className="vertical-center">أ/ أسامة بن عثمان الرميان</h5>
</div>

 </div>
<div className="col-12 col-lg-6 rel row p-2">
<img className="col-2 " src="av01.png" alt=""/>
<div className="col-10 rel">
<h5 className="vertical-center">أ/ الهنوف بنت إبراهيم بن حسان 
</h5>
</div>

 </div>

</div>
</div>

     );
}
 
export default Owner;