import React from 'react';
import Table from './Table.js'
import CheckDocSchema from './CheckDocSchema.json'
import db from './db.json'

function CheckDoc(){
    return(

        <div className="table-responsive border rounded" id="table_modifies">
        <table className="table">

        <div class="row">
          <div className="col">
            <Table headers = {Object.keys(CheckDocSchema)} rows = {db} />
          </div>
        </div>
          
        </table>
      </div>
    );
}

export default CheckDoc;