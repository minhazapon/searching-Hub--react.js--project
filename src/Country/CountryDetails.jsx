



const CountryDetails = ({countries}) => {

    const {country, capital, population, area_km2, currency, languages, image} = countries


    return (
        <div>


            <div className="card w-96 bg-base-100 shadow-xl border-[1px] border-blue-900 ">
              <figure><img className=" h-[200px] w-[400px]" src={image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                country: {country}
                </h2>
                <p> capital: {capital} </p>
                <p> population: {population} </p>
                <p> area_km2: {area_km2} </p>
                <p> currency: {currency} </p>
                <p> languages: {languages} </p>
                
              </div>
            </div>
            
        </div>
    );
};

export default CountryDetails;