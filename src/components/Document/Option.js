import React from 'react';

export default function Option(){
    return(
    <ul className="social">
        <li><a href data-tip="Xem"><i className="fa fa-search" /></a></li>
        <li><a href data-tip="Sửa"><i className="fa fa-edit" /></a></li>
        <li><a href data-tip="Xóa"><i className="fa fa-trash" /></a></li>
     </ul>
    );
}