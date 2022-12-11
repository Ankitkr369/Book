import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
export const FilterComp = () => {

    const[searchParams,setSearchParams]=useSearchParams();
    
    const[category,setCategory]=useState([]);
 const handleFilterCheckbox=(e)=>{
   
    const newCategories=[...category]

    if(newCategories.includes(e.target.value)){
        newCategories.splice(newCategories.indexOf(e.target.value),1)
    }
    else{newCategories.push(e.target.value)}
    setCategory(newCategories)



 }
 useEffect(()=>{
    let params={};
    params.category=category;
    setSearchParams(params);
},[category,setSearchParams])
    return (
    <div>
        <h3>Filter Component</h3>
    <div>
        <div>
            <input type="checkbox" value="Novel" onChange={handleFilterCheckbox}/>
            <label>Novel</label>
        </div>
        <div>
            <input type="checkbox" value="Motivational" onChange={handleFilterCheckbox}/>
            <label>Motivational</label>
        </div>
        <div>
            <input type="checkbox" value="Science_Fiction" onChange={handleFilterCheckbox}/>
            <label>Science-Fiction</label>
        </div>
        <div>
            <input type="checkbox" value="Thriller" onChange={handleFilterCheckbox}/>
            <label>Thriller</label>
        </div>
    </div>
    </div>
  )
}
