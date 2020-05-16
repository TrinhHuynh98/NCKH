import React from 'react';

function ButtonDelete(){
    return(
        <div className="form-group d-lg-flex justify-content-lg-center">
            <button className="btn btn-primary" id="btn_doc" type="button">
                <i className="fa fa-trash" />Xóa &nbsp;
            </button>
        </div>
    );
}

export default ButtonDelete;