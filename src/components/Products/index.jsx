import React from 'react';
import Header from './Header';
import SectionCard from './SectionCard';
import Sidebar from './SideBar';
import { AsideWrapper, ProductContainer } from './style';

function index(props) {
    return (
        <ProductContainer>
            <Sidebar/>
            <AsideWrapper>
                <Header/>
                <SectionCard/>
            </AsideWrapper>
        </ProductContainer>
    );
}

export default index;