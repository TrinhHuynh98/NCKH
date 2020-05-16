import React from 'react';
import TopNarbar from './components/Layout/Narbars/TopNarbar.js';
import SideNarbar from './components/Layout/Narbars/SideNarbar.js';
import Header from './components/Layout/Header/Header.js';

function IndexSaveDoc() {
  return (
    <div>
        <div className="container">

            <div className="row">
                <TopNarbar/>
            </div>


            <div className="row">
                <div className="col col-lg-2">
                    <SideNarbar/>
                </div>

                <div className="col" id="column_content" style={{marginLeft: '20px'}}>
                    <div className="container text-right">
                        <Header/>
                        {/*Mau tai lieu */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default IndexSaveDoc;
