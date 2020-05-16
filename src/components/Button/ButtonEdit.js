import React from 'react';

function ButtonEdit(){
    return(
        <div className="form-group d-lg-flex justify-content-lg-center">
            <button className="btn btn-primary" id="btn_doc" type="button">
                <i className="fa fa-edit" />&nbsp;Sửa
            </button>
        </div>
    );
}

export default ButtonEdit;