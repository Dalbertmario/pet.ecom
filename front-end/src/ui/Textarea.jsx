export default function Textarea({ msg = [], replay = [] }) {
  console.log(msg?.text[msg.text.length-1])
  return (
    <div className="overflow-scroll p-3">
      <ul>  
      {msg.sender==='user' &&  msg.text && (
          <div className="flex flex-col place-items-end">
            <p className="p-2 max-w-[300px] h-auto flex bg-blue-200 rounded-md font-semibold text-slate-600">
              {msg.text}
            </p>            
          </div>)}
        {msg.sender === 'server' &&  msg.text && (
          <div>
            <p className="p-2 max-w-[300px] h-auto flex place-items-start  bg-slate-200 rounded-md font-semibold text-slate-600">
             {msg?.text}
            </p>
            </div>)}
      </ul>
    </div>
  );
}
