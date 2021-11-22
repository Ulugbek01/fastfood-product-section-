import React from 'react';
import { HeaderContainer } from './style';
import AddProduct from './AddProduct';
import SearchItem from './SearchItem';


function index(props) {
    return (
        <HeaderContainer>
            <AddProduct/>
            <SearchItem/>
        </HeaderContainer>
    );
}

export default index;