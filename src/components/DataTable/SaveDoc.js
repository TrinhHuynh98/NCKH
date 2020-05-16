import React from 'react';
import Table from './Table.js'
import schema from './schema.json'
import db from './db.json'

function SaveDoc(){
    return(
        /*<section>
        <div>
          <ul className="nav nav-tabs" style={{height: '40px'}}>
            <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" id="TabLink_saveDoc" href="#tab-1" style={{height: '40px'}}>Hôm nay</a></li>
            <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" id="TabLink_saveDoc" href="#tab-2" style={{height: '40px'}}>Sau</a></li>
            <li className="nav-item"><a className="nav-link active" role="tab" data-toggle="tab" id="TabLink_saveDoc" href="#tab-4" style={{height: '40px'}}>Tất cả</a></li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane" role="tabpanel" id="tab-1">
              <ul id="listitem_saveDoc" className="thread-list">
                <li className="thread"><span id="listitem_saveDoc" className="time" style={{width: '200px', height: '30px', fontSize: '14px'}}>09 / 05 / 2020</span><span id="listitem_saveDoc" className="title" style={{width: '150px'}}>Báo cáo 10</span><span className="icon"> <a className="subscribe" href="javascript:void(0)"><i className="fa fa-star-o" style={{fontSize: '25px', color: 'rgb(238,210,62)', marginRight: '10px'}} /></a><a className="flag" href="javascript:void(0)"><i className="icon ion-android-delete" style={{color: 'rgb(235,64,64)', fontSize: '25px'}} /></a></span></li>
                <li className="thread"><span id="listitem_saveDoc" className="time" style={{width: '200px', height: '30px', fontSize: '14px'}}>09 / 05 / 2020</span><span id="listitem_saveDoc" className="title" style={{width: '150px'}}>Báo cáo 10</span><span className="icon"> <a className="subscribe" href="javascript:void(0)"><i className="fa fa-star-o" style={{fontSize: '25px', color: 'rgb(238,210,62)', marginRight: '10px'}} /></a><a className="flag" href="javascript:void(0)"><i className="icon ion-android-delete" style={{color: 'rgb(235,64,64)', fontSize: '25px'}} /></a></span></li>
              </ul>
            </div>
            <div className="tab-pane" role="tabpanel" id="tab-2">
              <ul id="listitem_saveDoc" className="thread-list">
                <li className="thread"><span id="listitem_saveDoc" className="time" style={{width: '200px', height: '30px', fontSize: '14px'}}>09 / 05 / 2020</span><span id="listitem_saveDoc" className="title" style={{width: '150px'}}>Báo cáo 10</span><span className="icon"> <a className="subscribe" href="javascript:void(0)"><i className="fa fa-star-o" style={{fontSize: '25px', color: 'rgb(238,210,62)', marginRight: '10px'}} /></a><a className="flag" href="javascript:void(0)"><i className="icon ion-android-delete" style={{color: 'rgb(235,64,64)', fontSize: '25px'}} /></a></span></li>
                <li className="thread"><span id="listitem_saveDoc" className="time" style={{width: '200px', height: '30px', fontSize: '14px'}}>09 / 05 / 2020</span><span id="listitem_saveDoc" className="title" style={{width: '150px'}}>Báo cáo 10</span><span className="icon"> <a className="subscribe" href="javascript:void(0)"><i className="fa fa-star-o" style={{fontSize: '25px', color: 'rgb(238,210,62)', marginRight: '10px'}} /></a><a className="flag" href="javascript:void(0)"><i className="icon ion-android-delete" style={{color: 'rgb(235,64,64)', fontSize: '25px'}} /></a></span></li>
                <li className="thread"><span id="listitem_saveDoc" className="time" style={{width: '200px', height: '30px', fontSize: '14px'}}>09 / 05 / 2020</span><span id="listitem_saveDoc" className="title" style={{width: '150px'}}>Báo cáo 10</span><span className="icon"> <a className="subscribe" href="javascript:void(0)"><i className="fa fa-star-o" style={{fontSize: '25px', color: 'rgb(238,210,62)', marginRight: '10px'}} /></a><a className="flag" href="javascript:void(0)"><i className="icon ion-android-delete" style={{color: 'rgb(235,64,64)', fontSize: '25px'}} /></a></span></li>
              </ul>
            </div>
            <div className="tab-pane active" role="tabpanel" id="tab-4">
              <ul id="listitem_saveDoc" className="thread-list">
                <li className="thread"><span id="listitem_saveDoc" className="time" style={{width: '200px', height: '30px', fontSize: '14px'}}>09 / 05 / 2020</span><span id="listitem_saveDoc" className="title" style={{width: '150px'}}>Báo cáo 10</span><span className="icon"> <a className="subscribe" href="javascript:void(0)"><i className="fa fa-star-o" style={{fontSize: '25px', color: 'rgb(238,210,62)', marginRight: '10px'}} /></a><a className="flag" href="javascript:void(0)"><i className="icon ion-android-delete" style={{color: 'rgb(235,64,64)', fontSize: '25px'}} /></a></span></li>
                <li className="thread"><span id="listitem_saveDoc" className="time" style={{width: '200px', height: '30px', fontSize: '14px'}}>09 / 05 / 2020</span><span id="listitem_saveDoc" className="title" style={{width: '150px'}}>Báo cáo 10</span><span className="icon"> <a className="subscribe" href="javascript:void(0)"><i className="fa fa-star-o" style={{fontSize: '25px', color: 'rgb(238,210,62)', marginRight: '10px'}} /></a><a className="flag" href="javascript:void(0)"><i className="icon ion-android-delete" style={{color: 'rgb(235,64,64)', fontSize: '25px'}} /></a></span></li>
                <li className="thread"><span id="listitem_saveDoc" className="time" style={{width: '200px', height: '30px', fontSize: '14px'}}>09 / 05 / 2020</span><span id="listitem_saveDoc" className="title" style={{width: '150px'}}>Báo cáo 10</span><span className="icon"> <a className="subscribe" href="javascript:void(0)"><i className="fa fa-star-o" style={{fontSize: '25px', color: 'rgb(238,210,62)', marginRight: '10px'}} /></a><a className="flag" href="javascript:void(0)"><i className="icon ion-android-delete" style={{color: 'rgb(235,64,64)', fontSize: '25px'}} /></a></span></li>
                <li className="thread"><span id="listitem_saveDoc" className="time" style={{width: '200px', height: '30px', fontSize: '14px'}}>09 / 05 / 2020</span><span id="listitem_saveDoc" className="title" style={{width: '150px'}}>Báo cáo 10</span><span className="icon"> <a className="subscribe" href="javascript:void(0)"><i className="fa fa-star-o" style={{fontSize: '25px', color: 'rgb(238,210,62)', marginRight: '10px'}} /></a><a className="flag" href="javascript:void(0)"><i className="icon ion-android-delete" style={{color: 'rgb(235,64,64)', fontSize: '25px'}} /></a></span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>*/
      
      <div className="container p-2">
        
        <div class="row">
          <div className="col">
            <Table headers = {Object.keys(schema)} rows = {db} />
          </div>
        </div>
        
      </div>
      
    );
}

export default SaveDoc;