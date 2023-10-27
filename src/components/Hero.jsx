import cupcake from "../assets/cupcake.png";

function Hero() {
  return (
    <div className="text-white h-screen w-full  sm:items-center flex ">
      <div className="ml-[3%] "><div className="flex flex-col sm:flex-row mt-[20%] sm:mt-0 px-[10px] ">
        <div className="sm:w-[60%]   ">
          <p className="text-[#eab308] text-center sm:text-left font-bold tracking-[5px] ">
            ESTELLE'S <br />  BITES & PASTERIES
          </p>
          <p className=" text-4xl sm:text-[4xl] md:text-6xl text-pink-200 mt-[10px] font-bold ">
            Des petites patisseries qui procurent de grandes sensations
          </p>
          <div className="text-2xl my-[20px]">
            Pour des moments en famille, votre pause au bureau, vos céremonies,
            etc.
          </div>
        </div>
        <div className=" object-cover w- flex justify-center  sm:w-[30%] ">
          <img src={cupcake} alt="" className="h-[210px] sm:h-auto"/>
        </div>
      </div>
      <div className="flex justify-center md:w-[50%]">
        <div className="bg-gradient-to-br from-[#fef08a] from-[10%] to-[#fbbf24] text-black text-2xl py-2 px-4 shadow-md rounded-md">
          Comander maintenant
        </div>
      </div></div>
    </div>
  );
}

export default Hero;
