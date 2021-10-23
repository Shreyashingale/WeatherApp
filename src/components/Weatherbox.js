import React , {useEffect , useState}from 'react';
import "./Weatherbox.css";


const Weatherbox = () => {

     const [city, setCity] = useState(null)
     const [search, setsearch] = useState("")
    useEffect(() => {
        const fetchapi= async()=>{
           const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6e3db207f1b4ecb05946203a172a1db7`;
           const fectData =  await fetch(url);
           const resJson = await fectData.json()
           console.log(resJson);
           setCity(resJson.main)


        }
        fetchapi();
 
    },[search])

   
    return (
        <div className="container">
            <div className="box">
                
                <input className='searchbar' type="search" placeholder="Search"  value={search} onChange={(event)=>{
                    setsearch(event.target.value) }}  />
                    

                { city ? (
                    <div>
                    <div className="data">
                    <h2 className="Temp">{city.temp}°C</h2>
                    <p className="city">{search}</p>
    
                    </div>
                    <div className="range">
                        <div>
                        <p className="max">Minimum temp</p>
                        </div>
                        <div>
                        <p className="max">{city.temp_max}  <i class="fas fa-cloud"></i></p>
                        </div>
                        
                    </div>
                    <div className="range1">
                        <div>
                        <p className="max">Maximun temp</p>
                        </div>
                        <div>
                        
                       <p className="max">{city.temp_min}   <i class="fas fa-cloud"></i></p>
                        </div>
                        
                    </div>
                    
                  
                    </div>
                  
                   
                ) :
                (
    
                    <h2 className="para"><i class="fas fa-exclamation-triangle"></i> No data found </h2>

                )}
            
                </div> 
            
            
            
                
                




            
            

        </div>
    )
}

export default Weatherbox
