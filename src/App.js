import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNarbar from './components/Layout/Narbars/TopNarbar.js';
import SideNarbar from './components/Layout/Narbars/SideNarbar.js';
import Header from './components/Layout/Header/Header.js';
import CheckDoc from './components/DataTable/CheckDoc.js';
import Checkdetail from './components/DataTable/Checkdetail.js';
import Document from './components/Document/Document';
import IndexSaveDoc from './ManageSaveDoc/IndexSaveDoc.js';

function App() {
    return (
        <div>
            <Router>
                <div className="container">

                    <div className="row">
                        <TopNarbar />
                    </div>


                    <div className="row">
                        <div className="col col-lg-2">
                            <SideNarbar />

                        </div>
    
                        <div className="col" id="column_content" style={{ marginLeft: '20px' }}>
                            <div className="container text-right">
                                <Header />
                                <Switch>
                                <Route path="/document" component={Document}/>    
                                <Route path="/savedoc" component={IndexSaveDoc}/>
                                <Route path="/checkdoc" component={CheckDoc} />
                                <Route path="/checkdetail" component={Checkdetail} />
                                </Switch>
                            </div>

                        </div>

                    </div>
                </div>

            </Router>

        </div>
    );
}

export default App;
