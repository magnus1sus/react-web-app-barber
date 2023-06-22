import React, {useState} from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";

const products = [
    {id: '1', title: 'Шторы', price: 100, description: 'Удлинённые'},
    {id: '2', title: 'Бокс', price: 100, description: 'Удлинённые'},
    {id: '3', title: 'Полубокс', price: 100, description: 'Удлинённые'},
    {id: '4', title: 'Маллет', price: 100, description: 'Удлинённые'},
    {id: '5', title: 'Спортивный', price: 100, description: 'Удлинённые'},
    {id: '6', title: 'Классический', price: 100, description: 'Удлинённые'},
    {id: '7', title: 'Кроп', price: 100, description: 'Удлинённые'},
    {id: '8', title: 'Под ноль', price: 100, description: 'Удлинённые'},
]

const getTotalPrice = (items) => {
    return item.reduce((acc, item) =>{
    return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();
    const onAdd = (products) => {
        // let product;
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product]
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {}
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Записаться ${getTotalPrice(newItems)}`
            })
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;