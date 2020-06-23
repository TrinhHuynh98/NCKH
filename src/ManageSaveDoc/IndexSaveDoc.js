import React from 'react';
/*import TopNarbar from './components/Layout/Narbars/TopNarbar.js';
import SideNarbar from './components/Layout/Narbars/SideNarbar.js';
import Header from './components/Layout/Header/Header.js';*/
//import TableSaveDoc from '../components/DataTable/TableSaveDoc.js';
import TabSaveDoc from '../components/Tab/TabSaveDoc.js';
import TypeDocSelect from '../components/Select/TypeDocSelect.js';
import ButtonUpload from '../components/Button/ButtonUpload.js'

function IndexSaveDoc() {
  return (
    <div>
      <div className="text-capitalize text-left d-sm-flex justify-content-between align-items-center mb-4" style={{fontFamily: 'ABeeZee, sans-serif'}}>
        <TypeDocSelect/>  
        <div>
        <ButtonUpload/>  
        </div>   
        
      </div>
      
      <TabSaveDoc/>
    </div>         
                         
        
  );
}

export default IndexSaveDoc;
