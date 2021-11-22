import React from 'react';
import { LogOutContainer } from './style';

import log_out from '../../../../assets/icons/log-out.svg';
import { NavItemContainer } from '../NavItems/style';


function index(props) {
    return (
        <LogOutContainer>
            <NavItemContainer.Icon>
                <img src={log_out} alt="log-out" />
            </NavItemContainer.Icon>
            <p className='title'>Chiqish</p>
        </LogOutContainer>
    );
}

export default index;