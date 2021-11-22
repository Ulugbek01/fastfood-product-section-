import React from 'react';
import CardItem from './CardItem';
import { Button } from './style';
import CardItemsNavbar from './CardItemsNavbar';
import { sectionCardData } from '../../../mock/sectionCardData';

function index(props) {
    // const [sectionCardData, setSectionCardData] = useState(sectionCardData);
    return (
        <div>
            <CardItemsNavbar/>
            <CardItem sectionCardData = {sectionCardData}/>
            <Button>Yana yuklash</Button>
        </div>
    );
}

export default index;