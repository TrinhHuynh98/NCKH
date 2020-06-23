import React from 'react';
import MaterialTable from 'material-table';
import {Button} from '@material-ui/core/';
import { useHistory } from "react-router-dom";
import db from "./db.json";
import { withStyles }from '@material-ui/core/styles';

export default function CheckDoc() {

  const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 10,
      border: '1px solid',
      lineHeight: 1.5,
      minWidth: "100px",
      maxHeight: "42px",
      
    },
  })(Button);

  const [state, setState] = React.useState({
    columns: [
      { title: 'Ngày nộp đơn', field: 'date' },
      { title: 'Tên Văn bản', field: 'namedoc' },
      { title: 'Người nộp', field: 'nameapplier'},
      { title: '', field: 'src'},
     
    ],
    
  });

  //console.log(db);
  
  const history = useHistory();
  //const routeChange = () => history.push("/checkdetail");
  const routeChange = data => history.push(`/checkdetail/${data.id}`);
 
  const { useState } = React; 
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <MaterialTable

     // format some options
     options={{
      search: true,
     
      
      rowStyle: rowData => ({
        backgroundColor: (selectedRow === rowData.tableData.id) ? '#C2D6EE' : '#FFF'
      }),

      headerStyle: {
        backgroundColor: 'default ',
        color: '#111'
      },    

      actionsColumnIndex: -1,    

    }}

    localization={{        
      header: {
          actions: 'Trạng Thái',
          
      },  
    
      toolbar:{
        searchTooltip: 'Search',
        searchPlaceholder: 'Tìm kiếm...',
      }
  }}
 // Button checked
  actions={[
    {
      icon: 'save',
      tooltip: 'Save User',
    }
  ]}
  
  components={{
    Action: props => (
      <BootstrapButton
        color="primary"
        variant="contained"
        style={{maxWidth: '75px', maxHeight: '50px' }}
        size="small"
        //onClick={routeChange}
        onClick={() => routeChange(props.data)}
      >
        Xét duyệt
      </BootstrapButton>
    ),
  }}

      title="Xét duyệt"
      columns={state.columns}
      data={db}
      key={db.id}

    />
  );
}
