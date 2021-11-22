import React from 'react';
import { NavItemContainer } from './style';

function index(props) {
    // const active = props.active;
    return (
        <div>
            {props.items.map((item) => {
                return (
                    <NavItemContainer key={item.id}>
                        <NavItemContainer.Icon>
                            <img src={item.iconUrl} alt="icon" />
                        </NavItemContainer.Icon>
                        <NavItemContainer.Title>{item.title}</NavItemContainer.Title>
                    </NavItemContainer>
                )
            })}
        </div>
    );
}

export default index;