import {useForm} from 'react-hook-form'
import UseLocationFinder from '../features/dashboard/location';
import { useSelector } from 'react-redux';
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import UseformSubmit from '../features/Carting/Form';
import UseAccountdetailsFetch from '../features/dashboard/accountDetailsFetch';

export default function Addresspage() {
const {data=[]}=UseAccountdetailsFetch()
const {location,loading} = useSelector(state=>state.uistore)
const {mutate:formutate}= UseformSubmit()
const [locationData,setLocationData]=useState({})
const {register,handleSubmit,reset,formState:{errors}} = useForm({defaultValues:{
    Address: '',
    pincode:'',
    mobile:'',
    Petname:'',
    doorNo:'',
}})
const {mutate}= UseLocationFinder()
async function handelLocation(){
    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const locations = {
            lat: position.coords.latitude,
            log: position.coords.longitude,
          };
          mutate(locations)
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } catch (err) {
      console.error("Unexpected error:", err.message);
    }
  }

  useEffect(() => {
    if (location && location.length > 0) {
      const el = location[0]; 
      setLocationData({ city: el.city, state: el.state, pincode: el.
        zipcode });
    }
  }, [location]);

useEffect(() => {

    if (locationData?.city || locationData?.state) {
      reset({
        Address: `${locationData?.city || ''}, ${locationData?.state || ''}`,
        pincode: locationData?.zipcode || ''
      });
    }
  }, [locationData, reset]);

  useEffect(()=>{
   data.length > 0 && reset({
      Petsname:data[0]?.petname,
      mobile:data[0]?.mobile,
      Address:data[0]?.address ? data[0].address : '',
      pincode:data[0]?.pincode ? data[0].pincode : '' ,
      doorNo : data[0]?.houseno ? data[0].houseno : ''     
    })
  },[data,reset])
function handelform(e){
    formutate(e)
}

  return (
    <div>
    <form onSubmit={handleSubmit(handelform)} className='contenBody flex flex-col gap-2 mt-10'>
    <div className='flex flex-col gap-3 p-4'>
      <lable>Contact details</lable>
      <input {...register('mobile',{required:'Required Mobile number'})} className='inputfiled ' type="number" placeholder="Mobile No"/>
      <p className='text-red-500'>{errors?.mobile?.message}</p>
      <input {...register('Petsname')} className='inputfiled' type="text" placeholder="Pets Name"/>
      </div> 
      <div className='flex flex-col gap-3  p-4'>
      <label>Adderss</label>
      <input {...register('Address',{required:'Address Required'})} className='inputfiled' type="text" placeholder="Address (Road/Area/colony)"/>
      <p className='text-red-500'>{errors?.Address?.message}</p>
      <input {...register('doorNo',{required:'Flat number or door number required'})} className='inputfiled' type="text" placeholder="House/Building /Flat No"/>
      <p className='text-red-500' >{errors?.doorNo?.message}</p>
      <input {...register('pincode',{required:'Pincode required'})}  className='inputfiled' type="number" placeholder="Pincode"/>
      <p className='text-red-500'>{errors?.pincode?.message}</p>
      <input {...register('profile')} type='file' />
      </div>
      <div className='flex gap-4 p-4'>
      <button className='bg-red-400 text-white hover:bg-red-500 font-semibold transition-all p-2 rounded-md'>{data[0]?.address && data[0]?.petname ? 'Update account' :'Sumbit'}</button>
      </div>
    </form>
          <button className='ml-10 bg-red-400 w-[200px] text-white hover:bg-red-500 font-semibold transition-all p-2 rounded-md flex flex-row justify-center gap-2 items-center'  onClick={()=>handelLocation()}><p>Auto Detect location</p> <span className='animate-spin font-semibold'>{loading ? <AiOutlineLoading3Quarters size={25}/> : <FaLocationCrosshairs />}</span></button>
          </div>
  )
}
