import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOption from './HeaderOption';
import { BusinessCenter, Chat, Notifications, SupervisorAccount } from '@material-ui/icons';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccount} title='My Network'/>
        <HeaderOption Icon={BusinessCenter} title='Jobs'/>
        <HeaderOption Icon={Chat} title='Messaging'/>
        <HeaderOption Icon={Notifications} title='Notifications'/>
        <HeaderOption avatar="https://scontent.fdel10-1.fna.fbcdn.net/v/t1.18169-9/13631539_657913884359421_7420977628041482052_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KBBZ9ksRlg8AX_blOY1&_nc_ht=scontent.fdel10-1.fna&oh=539b19fb6942b0e23c053ec392f03f17&oe=6140ED9B" title='me'/>
      </div>
    </div>
  )
}

export default Header
