import React, { useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { usePdf } from 'react-pdf-js';


const Checkdetail = ({ match }) => {
  const { id } = match.params
 
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(null);

  const renderPagination = (page, pages) => {
    if (!pages) {
      return null;
    }
    let previousButton = <Button className="previous" onClick={() => setPage(page - 1)}><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></Button>;
    if (page === 1) {
      previousButton = <Button className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></Button>;
    }
    let nextButton = <Button className="next" onClick={() => setPage(page + 1)}><a href="#">Next <i className="fa fa-arrow-right"></i></a></Button>;
    if (page === pages) {
      nextButton = <Button className="next disabled"><a href="#">Next <i className="fa fa-arrow-right"></i></a></Button>;
    }
    return (
      <nav>
        {previousButton}
        {nextButton}
      </nav>
    );
  }

  const canvasEl = useRef(null);

  const [loading, numPages] = usePdf({
    file: match.src,
    //url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
    page,
    canvasEl
  });

  useEffect(() => {
    setPages(numPages);
  }, [numPages]);

  return (

    <div>
      <div className="container text-right">
        <div className="text-capitalize text-left d-sm-flex justify-content-between align-items-center mb-4" style={{ fontFamily: 'ABeeZee, sans-serif' }}>
          <p>Tên văn bản: Báo Cáo Tổng Kết cuối năm</p>
          <p>Người nộp: Trinh Huỳnh</p>
          
        </div>

        <div class="center" style={{marginBottom: '15px'}} >
        <Button  variant="contained" color="primary" style={{ maxWidth: '75px', maxHeight: '45px', color: " #000000" }} href="./checkdoc">Duyệt</Button> {' '}
        
        <Button  variant="contained" style={{ maxWidth: '75px', maxHeight: '45px',  }} onClick={handleClickOpen}>Hủy</Button>

        </div>


        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Ghi chú</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Ghi chú thông tin cần bổ sung để chỉnh sửa hoàn chỉnh
        </DialogContentText>
            <TextField
              autoFocus
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Hủy
          </Button>
            <Button onClick={handleClose} color="primary">
              Lưu
          </Button>
          </DialogActions>
        </Dialog>
      </div>

      <form class="center">
        <div>
          {loading && <span>Loading...</span>}
          <canvas ref={canvasEl} />
          {renderPagination(page, pages)}
        </div>
      </form>
    </div>
  );
}

export default Checkdetail;