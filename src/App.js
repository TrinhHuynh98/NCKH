import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import TopNarbar from './components/Layout/Narbars/TopNarbar.js';
import SideNarbar from './components/Layout/Narbars/SideNarbar.js';
import Header from './components/Layout/Header/Header.js';
import SaveDoc from './components/DataTable/SaveDoc.js';
import CheckDoc from './components/DataTable/CheckDoc.js';

function App() {
  return (
    <div>
    <Router>

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
                <Route path="/savedoc" component={SaveDoc} />
                <Route path="/checkdoc" component={CheckDoc} />
                   
                    {/*Lưu trữ tai lieu 
                    <SaveDoc/>
                    <CheckDoc/>
                    */}
                    
                                        
                </div>
                
            </div>
        </div>
        </div>

    </Router>

    </div>
  );
}

export default App;
