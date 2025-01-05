

export default function ReplayTextarea({replay}) {
  return (
    <div className="flex flex-col w-[90%] gap-2 max-h-[780px] overflow-y-scroll">
            <li>
                <p className="p-2 max-w-[300px] h-auto flex bg-slate-200 rounded-md font-semibold text-slate-600 ">{replay}</p>
            </li>
    </div>
  )
}
