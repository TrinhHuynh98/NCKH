function SideNarbar() {
    return(
    <nav className="navbar navbar-dark fixed-top align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" style={{height: '200px', backgroundColor: 'rgb(85,120,222)'}}>
        <div className="container-fluid d-flex flex-column p-0">
            <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                <div><img id="img_logo" src="assets/img/d.png" /></div>
                <div className="sidebar-brand-text mx-3"><span className="text-capitalize" id="text_main_nav">TRANG cHỦ</span></div>
            </a>
            <ul className="nav navbar-nav text-light">
                <li className="nav-item" role="presentation">
                    <a className="nav-link" href="1.1.html"><i className="icon ion-document" id="size_icon" /><span id="text_main_nav"><strong>Tài Liệu</strong>&nbsp;</span></a>
                    <a className="nav-link" href="1.1.html"><i className="icon ion-android-calendar" id="size_icon" /><span id="text_main_nav"><strong>Sự Kiện</strong></span></a>
                    <a className="nav-link" href="1.1.html"><i className="icon ion-ios-people-outline" id="size_icon" /><span id="text_main_nav"><strong>Người Dùng</strong><br /></span></a>
                    <a className="nav-link" href="1.1.html"><i className="la la-bar-chart" id="size_icon" /><span id="text_main_nav"><strong>Thống Kê</strong></span></a>
                </li>
            </ul>
        </div>
    </nav>

    );
}