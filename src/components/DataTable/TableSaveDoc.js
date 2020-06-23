import React from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Star from '@material-ui/icons/Star';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  Star: forwardRef((props, ref) => <Star {...props} ref={ref} />),
};


function SaveDoc(){
  const { useState } = React; 
  const [columns, setColumns] = useState([    
      { title: 'Số công văn', field: 'number' },
      { title: 'Thời Gian', field: 'date' },
      { title: 'Tên Văn Bản', field: 'name' },
      { title: 'Chủ sở hữu', field: 'user' },
      { title: 'Nơi phát hành', field: 'place' },
      { title: 'File', field: 'file' },
    ]);
    const [data, setData] = useState([  
      { number: '01', date: '01/01/2020', name: 'Báo cáo 1', user: 'Nguyễn Văn A', place: 'Đoàn khoa'},
      { number: '02', date: '02/01/2020', name: 'Báo cáo 2', user: 'Nguyễn Văn A', place: 'Đoàn khoa'},
      { number: '05', date: '01/01/2020', name: 'Báo cáo 3', user: 'Nguyễn Văn A', place: 'Đoàn khoa'},
      { number: '04', date: '02/01/2020', name: 'Báo cáo 4', user: 'Nguyễn Văn A', place: 'Đoàn khoa'},
      { number: '05', date: '01/01/2020', name: 'Báo cáo 3', user: 'Nguyễn Văn A', place: 'Đoàn khoa'},
      { number: '04', date: '02/01/2020', name: 'Báo cáo 4', user: 'Nguyễn Văn A', place: 'Đoàn khoa'},
    ]);
  

  
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <div>     

      <MaterialTable
        icons={tableIcons}       
          
        
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
                actions: '',
                
            },  
            body:{
              deleteTooltip: 'Xóa',
              addTooltip: 'Thêm công văn',
              
              
              editRow: {
                deleteText: 'Bạn có muốn xóa văn bản này?',
                saveTooltip: 'Đồng ý',
                cancelTooltip: 'Thoát',
                
              }
            },
            
            toolbar:{
              searchTooltip: 'Search',
              searchPlaceholder: 'Tìm kiếm...',
            }
        }}

    //format click row
    onRowClick = {((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}

      //Load data into table
      title="Danh sách công văn"
      //columns={state.columns}
      //data={state.data}
      columns={columns}
      data={data}

      //Edit table
      /*editable={{   
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    setData([...data,newData]);

                    resolve();
                }, 1000);
            }),
            
          

      }}*/
    />    
    </div>
      
  );  
}
         
    
export default SaveDoc;