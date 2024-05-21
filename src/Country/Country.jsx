import { useEffect, useState } from "react";
import CountryDetails from "./CountryDetails";




const Country = () => {


    const [countries, setCountry] = useState([])


    useEffect( () => {
       fetch('country.json')
       .then(res => res.json())
       .then(data => setCountry(data))
    } , [])



    return (
        <div className=" ml-10 mr-10">

          
            <div>
            <div className=" text-center">

            <h1 className=" text-6xl font-bold mt-10 text-blue-700">Search Your Country </h1>
            
            </div>
            
            <div className=" flex justify-center items-center gap-2 mt-10">
            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
            <button className=" btn bg-blue-700 text-white ">Search</button>
            </div>
            
            <hr className=" mt-5 mb-5"></hr>
            </div>


            <div className=" flex justify-center">
            <div className=" grid  md:grid-cols-3 gap-5">
              {
                countries.map( countries => <CountryDetails countries={countries} ></CountryDetails> )
              }
            </div>
            </div>
         









        </div>
    );
};

export default Country;