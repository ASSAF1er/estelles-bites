import { services } from "../utils/data";
function Services() {
  return (
    <div className="flex flex-col text-white  ">
      <div className="text-center text-3xl py-4 ">Nos Services</div>
      <div className="flex   items-center sm:flex-row justify-around flex-wrap gap-y-[30px]">{services.map((serv)=>(<Service service={serv}/> )) }</div>
    </div>
  );
}

export default Services;
const Service=({service})=>{
    return(
        <div>
        <div className="relative w-[200px] h-[200px] rounded-md bg-white ">
            <div className="absolute h-auto bottom-[-10%] left-[50%] -translate-x-[50%] opacity-[0.98] bg-gradient-to-r from-pink-200 to-pink-400 rounded-3xl px-5 text-black w-[80%] text-center  ">
                        {service.nom}
                    </div>
        </div>
        
        </div>
    )
}
