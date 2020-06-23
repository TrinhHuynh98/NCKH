import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TableSaveDoc from '../DataTable/TableSaveDoc.js';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

//hiển thị trang tab index
function indexProps(index) {
  return {
    id: `full-width-tab-${index}`,
   'aria-controls': `full-width-tabpanel-${index}`,
  };
}

//định dạng nội dung hiển thị trong tab
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper, //màu nền nội dung hiển thị trong tab
    width: 835,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const styles = {
    slide: {
      padding: 0,
      minHeight: 100,
      color: '#BD1414',
    },
   
  };
  

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Tabs
          //value={value}
          onChange={handleChange}
          //indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Tất cả" {...indexProps(0)} />
          <Tab label="Hôm nay" {...indexProps(1)} />          
        </Tabs>
      </AppBar>

      
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <TableSaveDoc/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <TableSaveDoc/>
        </TabPanel>
        
      </SwipeableViews>
    </div>
  );
}