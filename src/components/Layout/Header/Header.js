import React from 'react';
import SearchBox from './SearchBox.js'
import Tab from './Tab.js'
import ButtonUpload from '../../Button/ButtonUpload.js'

function Header(){
    return(
        <div>
            <div className="text-capitalize text-left d-sm-flex justify-content-between align-items-center mb-4" style={{fontFamily: 'ABeeZee, sans-serif'}}>
                <Tab/>
                <SearchBox/>
                <ButtonUpload/>
            </div>
        </div>
    );
}

export default Header;