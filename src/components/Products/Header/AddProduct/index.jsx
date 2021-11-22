import React from 'react';
import { AddProductContainer, BtnContainer } from './style';
import {ReactComponent as Plus} from '../../../../assets/icons/plus.svg';

function index(props) {
    return (
        <AddProductContainer>
            <BtnContainer>
                <Plus/>
            </BtnContainer>
            <p className='btn-title'>Yangi maxsulot qo’shish</p>
        </AddProductContainer>
    );
}

export default index;