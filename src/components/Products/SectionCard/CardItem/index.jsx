import React,{useState} from 'react';
import { CardItemContainer, IconContainer, IconWrapper, ItemsContainer, NewProductWrapper } from './style';

function Index(props) {
    const data = props.sectionCardData;
    const [list, setList] = useState(data);

  const onDelete = (id)=> {
      const newData = list.filter((value) => {
            return value.id !== id;
        })
        console.log(newData)
        setList(newData);
    }

    return (
        <ItemsContainer>
            <NewProductWrapper>
                <h4 className='title'>Yangi maxsulot qo’shish</h4>
                <p className='product-name'>Maxsulot nomi</p>
                <NewProductWrapper.Input placeholder='Chizburger' />
                <p className='categoriy'>Kategoriya</p>
                <NewProductWrapper.Input placeholder='Chizburger' />
                <p className='price'>Narxi</p>
                <NewProductWrapper.Input placeholder='18,500 UZS' />
                <p className='price'>Qo’shimcha ma’lumot</p>
                <NewProductWrapper.Input placeholder='Katta burgur, 2 karra pishloq bor' />
                <NewProductWrapper.Input className='load-img' type="file" />
                <NewProductWrapper.Button>Saqlash</NewProductWrapper.Button>
            </NewProductWrapper>
            {list.map((item, index) => {
                return (
                    <CardItemContainer key={item.id}>
                        <div className='product'>
                            <div>
                                <img src={item.imgUrl} alt="mini-logo" />
                            </div>
                            <div>{item.title}</div>
                        </div>
                        <div>{item.categoriy}</div>
                        <div>{item.price}</div>
                        <div>{item.additional}</div>
                        <IconContainer>
                            <IconWrapper>
                                {item.action.editIcon}
                            </IconWrapper>
                            <IconWrapper onClick={()=> onDelete(item.id)}>
                                {item.action.deleteIcon}
                            </IconWrapper>
                        </IconContainer>
                    </CardItemContainer>
                )
            })}
        </ItemsContainer>
    );
}

export default Index;