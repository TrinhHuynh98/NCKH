import React from 'react';

const SideNarbar = (props) => {
    const NavItems = ({title, href, icon}) => {
        return (
            <a className="nav-link" href={href}>
                <i className={icon} id="size_icon" />
                <span id="text_main_nav"><strong>{title}</strong>&nbsp;</span>
            </a>
        )    
    }

    const list = [  {title : 'TÀI LIỆU', href : '/',icon:'icon ion-document'},
                    {title : 'SỰ KIỆN', href : '/', icon:'icon ion-android-calendar'}, 
                    {title : 'NGƯỜI DÙNG', href : '/', icon:'icon ion-ios-people-outline'},
                    {title : 'THỐNG KÊ', href : '/', icon:'la la-bar-chart'}]
    return (

        <nav className="navbar navbar-dark fixed-top align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" style={{height: '200px', backgroundColor: 'rgb(85,120,222)'}}>
            <div className="container-fluid d-flex flex-column p-0">
                <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div><img id="img_logo" src="assets/img/d.png" /></div>
                    <div className="sidebar-brand-text mx-3"><span className="text-capitalize" id="text_main_nav">TRANG cHỦ</span></div>
                </a>
                <ul className="nav navbar-nav text-light">
                    <li className="nav-item" role="presentation">
                    {list.map((v,i) => (
                        <NavItems href={v.href} title={v.title} icon={v.icon}/>))}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default SideNarbar;
