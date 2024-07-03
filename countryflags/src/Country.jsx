import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import styles from './Country.module.css'

function Country() {
    const URL = "https://xcountries-backend.azurewebsites.net/all"
    
    
    const [data, setData] = useState([])

    useEffect( ()=>{
        const fetchData = async () =>{
            try {
                const res = await fetch(URL)
                const data = await res.json()
                setData(data)
            } catch (e) {
                console.error("Error fetching data: ",e)
            }
        }
        fetchData()
    },[])
    console.log(data)
  return (
    <div className={styles.country}>
        {data.map( (country) =>(
            <CountryCard key={country.abbr} flagName={country.name} flagImage={country.flag} alt={country.abbr}/>
        ))}
        
    </div>
  )
}

export default Country