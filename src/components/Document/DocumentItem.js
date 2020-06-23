import React, { useState, useEffect } from 'react';
import Option from './Option'
import Data from './DocumentData.json'
export default function DocumentItem(){

    const [types, setTypes] = useState([]);
    const [category, setCategory] = useState("");
    const handleChangeCategory = event => {
        setCategory(event.target.value);
    };

    const getUnique = (arr, comp) => {
        const unique = arr
          //store the comparison values in array
          .map(e => e[comp])
    
          // store the keys of the unique objects
          .map((e, i, final) => final.indexOf(e) === i && i)
    
          // eliminate the dead keys & store unique objects
          .filter(e => arr[e])
    
          .map(e => arr[e]);
    
        return unique;
    };

    useEffect( () => {
        const types = require("./DocumentData.json");
        setTypes(types);
        }, []
    );

    const uniqueTag = getUnique(types, "tag");
    const filterDropdown = types.filter(function(result) {
        return result.tag === category
    })
      
    const Item = ({src, category}) => {
        return(
        <div className="col-md-4 col-sm-6">
            <div className="product-grid6">
               <div className="product-image6">
                  <a href="#">
                  <img className="pic-1" src={src} />
                  </a>
               </div>
               <div className="product-content">
                  <h3 className="title"><a href="#">{category}</a></h3>
               </div>
                 <Option/>
            </div>
         </div>            
        );
    }
    return(
    <form >
        <label>
            <select value={category} onChange={handleChangeCategory}>
                {uniqueTag.map(category => (
                <option value={category.tag}>
                    {category.tag}
                </option>
                ))}
            </select>
        </label>

        <div className="row">
            {filterDropdown.map(category => (
                <Item src = {category.src} category = {category.category}/>
            ))}
        </div>
    </form>       
    );
}