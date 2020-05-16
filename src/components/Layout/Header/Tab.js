import React from 'react';

const Tab = (props) => {
    const Items = ({ title, href }) => {
      return (
        
        <li className="nav-item"><a className="nav-link text-capitalize" id="child_nav_dashboard" href={href} style={{fontSize: '15px', color: 'rgb(17,17,17)', fontFamily: '"Nunito", serif'}}><strong>{title}</strong></a>
        </li>
      )
  
    }
    const list = [
        { title: 'TÀI LIỆU', href: '/document' },
        { title: 'LƯU TRỮ', href: '/savedoc' },
        { title: 'XÉT DUYỆT', href: '/checkdoc' }]

    return(
        <ul className="nav nav-tabs">

        {list.map((v, i) => (
            <Items href={v.href} title={v.title} />
          ))}
           
        </ul>
    );

        }
export default Tab;