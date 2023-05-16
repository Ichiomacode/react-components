import React from 'react'
import Avatar from './Avatar'
import MenuItem from './MenuItem'
// import { IoApps } from "react-icons/io"

import AppIcon from './AppIcon'
const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header-menu">
        <MenuItem title={"Gmail"} />
        <MenuItem title={"Images"} />
        <AppIcon style={{ color: "white" }} />
        <Avatar />
      </div>
    </div>
  );
}

export default Header