import React from 'react';

function SearchBox(){
    return(
        <div className="search-container">
            <input  className="border rounded form-control-sm search-input" 
                    type="text" name="search-bar" placeholder="Tìm kiếm ..." 
                    style={{backgroundColor: 'rgb(255,255,255)', width: '220px'}} />
        </div>
    );
}

export default SearchBox;