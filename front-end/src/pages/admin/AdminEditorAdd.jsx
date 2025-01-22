import { useForm } from "react-hook-form"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import UseFormSubmition from "../../features/Orderdetails/ItemForm"
import { useEffect, useState } from "react"
import UseEditForm from "../../features/Orderdetails/EditFormforAdmin"
import { useSelector } from "react-redux"
import UseAdminDelete from "../../features/Orderdetails/AdminDeleteItem"
import WarningCancelOrder from "../WarningCancelOrder"
import Loading from "../../ui/Loading"
import Imageover from "../../ui/Imageover"

export default function AdminEditorAdd() {
const [save,setsave]=useState(null)
  const { proid, varid } = useParams();
  const [btncancel,setCancelBtn]=useState(false)
  const {mutate:Deleltemutate,isLoading:DeleteIsloading}=UseAdminDelete()
  const { formData = [] } = useSelector(state => state.uistore);
  const { mutate: FormGetting, isLoading } = UseFormSubmition();
  const { mutate, isLoading: loadingEditForm } = UseEditForm();
  const { register, handleSubmit, reset } = useForm({
      defaultValues: {
          brandname: '',
          offerprice: '',
          price: '',
          productimage: '',
          productname: '',
          category: '',
          productsfor: ''
      }
  });



 
    useEffect(() => {
     FormGetting({ proid: proid, varid: varid });
  }, [proid, varid, FormGetting]);

  useEffect(() => {
      if (formData?.length > 0) {
          reset({
              brandname: formData[0]?.brandname || '',
              offerprice: formData[0]?.offerprice || '',
              price: formData[0]?.price || '',
              productimage: formData[0]?.productimage || '',
              productname: formData[0]?.productname || '',
              category: formData[0]?.category || '',
              productsfor: formData[0]?.productsfor || '',
              varientid: varid,
              productid: proid
          });
      }
  }, [reset, formData, proid, varid]);


  function handelForm(data) {
    if(save === 'save') {mutate({...data})
    setsave(null)};
  }

  if (isLoading || loadingEditForm) {
      return <Loading/>;
  }
  return (
    <div className="bg-stone-200 h-auto overflow-scroll flex flex-col gap-5 p-3">
      {btncancel && <WarningCancelOrder fn={Deleltemutate} orderid={varid} btnCancel={setCancelBtn} btnState={btncancel} />}
    <h1 className="text-xl mb-3 text-slate-900 font-semibold ">Create product</h1>
    <form onSubmit={handleSubmit(handelForm)} className="flex flex-col gap-4">
         <div className="bg-white flex flex-col gap-3 rounded-lg p-3">
            <h1 className="text-md mb-3 text-slate-800 font-semibold" >Basic information</h1>
            <div className="flex justify-between items-center">
                <label className="font-semibold text-[15px] text-slate-600">Product name</label>
                <input required {...register('productname')} className="admininput" type="text" placeholder="Product Name"/>
            </div>
            <div className="flex justify-between items-center">
                <label className="font-semibold text-[15px] text-slate-600">Brand Name</label>
                <input required {...register('brandname')} className="admininput" type="text" placeholder="Brand Name"/>
            </div>
            <div className="flex justify-between items-center">
                <label className="font-semibold text-[15px] text-slate-600">Category</label>
                <input required {...register('category')} className="admininput" type="text" placeholder="Brand Name"/>
            </div>
            <div className="flex justify-between items-center">
                <label className="font-semibold text-[15px] text-slate-600">Products for</label>
                <input required {...register('productsfor')} className="admininput" type="text" placeholder="Brand Name"/>
            </div>
         </div>
         <div className="bg-white flex flex-col gap-3 rounded-lg p-3">
           <h1 className="text-md mb-3 text-slate-800 font-semibold">Pricing</h1>
            <div className="flex justify-between">
            <label  className="font-semibold text-[15px] text-slate-600" >Regular Price</label>
            <input required {...register('price')} placeholder="Regular price" type="number" className="admininput"/>
            </div>
            <div className="flex justify-between">
            <label  className="font-semibold text-[15px] text-slate-600">Offer Price</label>
            <input  required {...register('offerprice')} placeholder="Offer price" type="number" className="admininput"/>
            </div>
           </div>
           <div className="bg-white flex flex-col gap-2 rounded-lg p-3">
            <h1 className="text-md mb-3 text-slate-800 font-semibold">Product Image</h1>
            <p className="text-xs text-slate-700">Choose a product photo or simply drag and drop up to 5 photos here.</p>
            <div>
            {formData &&  <Imageover image={!formData ? '' : formData[0]?.productimage} >
                <img className="max-w-[100px] max-h-[100px] outline oultine-1 mb-2 rounded-lg outline-slate-400" {...register('productimage')} src={!formData ? '' : formData[0]?.productimage}/>
                </Imageover> }
                <div className="outline-2 outline-dashed outline-slate-400 p-5">
                     <input  type='file'/>
                </div>
            </div>
           </div>
           <footer className="bg-white xs:text-xs md:text-md xl:text-xl p-5 rounded-lg">
           <div className="flex flex-row justify-between">
         <NavLink to='/addproduct'> <button className="text-slate-600 font-semibold">Back</button></NavLink>
            <div className="flex flex-row gap-4" >
                <button onClick={()=>setCancelBtn(e=>!e)}  className="outline outline-2 outline-red-700 py-2 font-semibold hover:text-black hover:outline-2 hover:outline-red-600  text-red-500 rounded-lg px-2">Delete</button>
                <button onClick={()=>setsave('save')} className="adminbtn">Save</button>
            </div>
           </div>
    </footer>
    </form>
    
    </div>
  )
}
