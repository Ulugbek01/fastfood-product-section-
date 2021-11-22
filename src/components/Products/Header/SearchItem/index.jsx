import React from 'react';
import { CategoriyBox, FilterWrapper, SearchContainer, SearchItem } from './style';
import {ReactComponent as Filter} from '../../../../assets/icons/filter.svg';
import {ReactComponent as Search} from '../../../../assets/icons/search.svg';

function index(props) {
    return (
        <SearchContainer>
            <div className='search-container'>
                <SearchItem placeholder='Qidirish'>
                </SearchItem>
                <Search className="search-item" />
            </div>
            <FilterWrapper>
                <Filter></Filter>
                <CategoriyBox.Additional></CategoriyBox.Additional>
                <CategoriyBox>
                    <p className='title'>Kategoriya</p>
                    <select name="filter" id="filter">
                        <option value="ichimliklar">Ichimliklar</option>
                        <option value="yengil taomlar">Yengil taomlar</option>
                        <option value="milliy taomlar">Milliy taomlar</option>
                        <option value="shirinliklar">Shirinliklar</option>
                    </select>
                    <div className='filter-type'>
                        <div>
                            <span></span>
                            <p>Narx bo’yicha (O’sish tartibida)</p>
                        </div>
                        <div>
                            <span className='active'></span>
                            <p>Narx bo’yicha (Kamayish tartibida)</p>
                        </div>
                       <div>
                           <span></span>
                           <p>Narx bo’yicha (Kamayish tartibida)</p>
                       </div>
                        <div>
                            <span></span>
                            <p>Narx bo’yicha (Kamayish tartibida)</p>
                        </div>
                    </div>
                </CategoriyBox>
            </FilterWrapper>
        </SearchContainer>
    );
}

export default index;