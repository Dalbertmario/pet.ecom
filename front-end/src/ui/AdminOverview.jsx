import { LuCircleDollarSign } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";
import { TbEyeSearch } from "react-icons/tb";
import { moneyformat } from "../helper/Moneyformat";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function AdminOverview({overviewData=[],select,selection}) {
function handelSelect(e){
    select(e)
}

let dat;
if (selection === 'weekly') {
  dat = { weekday: 'long' }; 
} else if (selection === 'monthly') {
  dat = {  date :'numeric' };
} else {
  dat = { year: 'numeric' }; 
}
const data ={
  labels: overviewData?.graphData?.map(el=>{
    return Intl.DateTimeFormat('en-US',dat).format(new Date(el.date))}),
  datasets: [
    {
      label: 'Sales',
      data:  overviewData?.graphData?.map(el=>el.price),
      backgroundColor: 'rgba(90, 200, 202, 0.5)',
      borderColor: 'rgba(50, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

  return ( 
    <div className="flex xs:text-xs flex-col shadow-sm rounded-xl p-5 gap-5 bg-white">
        <div  className="flex justify-between">
        <h1 className="text-xl font-semibold text-slate-600">Overview</h1>
        <select onChange={(e)=>handelSelect(e.target.value)}>
            <option value='weekly'>Weekly</option>
            <option value='monthly'>Monthly</option>
            <option value='annually'>Annually</option>
        </select>
        </div>
        <div className="bg-stone-100 xs:text-xs md:text-[15px] flex oultine-[5px] outline-slate-300 justify-between p-6 rounded-xl">
             <div className="flex flex-col items-center ">
             <h1 className="bg-blue-300 flex max-w-[50px] justify-center rounded-full p-3 "><LuCircleDollarSign size={20}/></h1>
                <h1 className="adminHeading  xs:text-xs text-[15px]">Total profit</h1>
                <h1 className="font-semibold">{moneyformat(overviewData?.totalprofit)}</h1>
             </div>
             <div className="flex flex-col items-center ">
                <h1 className="bg-green-300 max-w-[50px] flex justify-center items-center content-center rounded-full p-3 "><IoBagHandleOutline size={20} /></h1>
                <h1 className="adminHeading xs:text-xs text-[15px]">Total orders</h1>
                 <h1 className="font-semibold">{overviewData?.totalOrders}</h1>
             </div>
             <div className="flex flex-col items-center ">
                <h1 className="bg-pink-300 max-w-[50px] flex justify-center items-center content-center rounded-full p-3"><TbEyeSearch size={20}/></h1>
                <h1 className="adminHeading xs:text-xs text-[15px]">Impression</h1>
                <h1 className="font-semibold">{overviewData?.views?.reduce((a,b)=>a+b.count,0)}</h1>
             </div>
        </div>
        <div>{
           <Bar data={data} options={options} />}</div>
    </div>
  )
}
