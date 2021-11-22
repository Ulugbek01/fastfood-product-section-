import React from 'react';
import { LogoContainer, LogOutContainer, SideBarContainer } from './style';
import NavItems from './NavItems';
import logo from '../../../assets/imgs/main-logo.png';
import {navItemData} from './navItemData/navItemData';
import LogOut from './LogOut';


function index(props) {
    return (
        <SideBarContainer>
           <LogoContainer>
               <LogoContainer.ImgWrapper>
                <img src={logo} alt="main-logo" />
               </LogoContainer.ImgWrapper>
               <LogoContainer.TextWrapper>
                   <h3 className='title'>Fast Food</h3>
                   <p className='discription'>Online maxsulot sotuvi</p>
               </LogoContainer.TextWrapper>
           </LogoContainer>

           <NavItems items = {navItemData} active={navItemData[1].id}/>
           
           <LogOut/> 
        </SideBarContainer>
    );
}

export default index;