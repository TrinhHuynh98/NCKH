import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class ButtonUpload extends Component {

  render() {
    return (

      <div>

        <Popup modal trigger={
          <button className="btn btn-outline-primary btn-sm text-truncate text-center text-dark border rounded border-primary add-another-btn"
            data-bs-hover-animate="pulse"
            type="button"
            style={{ margin: '2px', lineHeight: '25px', fontSize: '15px', backgroundColor: '#ffffff', color: 'rgb(38,81,146)' }}>
            Tải tệp
      <i className="fas fa-cloud-upload-alt edit-icon"
              style={{ color: 'rgb(38,81,146)' }} />
          </button>
        } >
          <form className="text-center border border-light" action="#!">
            <p className="h4 mb-4">Tải File</p>

            <input type="text" className="form-control" placeholder="File name" />

            <input type="file" className="form-control" placeholder="Your file" />

            <button className="btn btn-info btn-block my-4" type="submit">Tải lên</button>
          </form>
        </Popup>
      </div>

    );

  }
}
export default ButtonUpload;

