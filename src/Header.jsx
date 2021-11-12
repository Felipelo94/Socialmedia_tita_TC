import React from "react";
import "./Header.css";
import {Avatar, IconButton} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"
          alt="Logo"
        />
        <div className="header__input">
            
        <SearchIcon/>
            <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__center">
      <div className="header__option">
            
            
            </div>


            <div className="header__option header__option--active">
          <HomeIcon/>
            </div>

          <div className="header__option">
          <FlagIcon/>
            </div>

            <div className="header__option">
            <SubscriptionsIcon/>
            </div>

            <div className="header__option">
            <StorefrontIcon/>
            </div>

            <div className="header__option">
            <SupervisedUserCircleIcon/>
            </div>

            

            
      </div>

      <div className="header__right">
          <div className="header__info">
            <Avatar/>
            <h4>Juan</h4>
          </div>
          <IconButton>
            <AddIcon/>
          </IconButton>

          <IconButton>
            <ForumIcon/>
          </IconButton>

          <IconButton>
            <NotificationsActiveIcon/>
          </IconButton>

          <IconButton>
            <ExpandMoreIcon/>
          </IconButton>
      </div>
    </div>
  );
}

export default Header;
