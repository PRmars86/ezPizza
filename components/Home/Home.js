import React from "react";
import Link from 'next/link';
import styles from './Home.module.css';
import { useState } from "react";

export default function Home({ children }) {
    const pizzas = [
        {
            id: '1',
            name: 'Cheese Pizza',
            slug: 'cheese-pizza',
            toppings: ['mozzarella cheese'],
            image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
            price: 9.99,
            description: 'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese',
        },
        {
            id: '2',
            name: 'Meat Feast',
            slug: 'meat-feast',
            toppings: ['cheese', 'meatball'],
            image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80',
            price: 19.99,
            description: 'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese',
        },
        {
            id: '3',
            name: 'Supreme',
            slug: 'supreme',
            toppings: ['mozzarella cheese', 'meatball', 'bacon'],
            image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
            price: 29.99,
            description: 'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese',
        },
        {
            id: '4',
            name: 'Pepperoni Pizza',
            slug: 'pepperoni-pizza',
            toppings: ['meatball', 'bacon'],
            image: 'https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
            price: 39.99,
            description: 'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese',
        },
        {
            id: '5',
            name: 'Smoked Sausage Pizza',
            slug: 'smoked-sausage-pizza',
            toppings: ['meatball', 'bacon', 'mozzarella cheese'],
            image: 'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=802&q=80',
            price: 49.99,
            description: 'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese',
        },
        {
            id: '6',
            name: 'Egg & Sausage Pizza',
            slug: 'egg-and-sausage-pizza',
            toppings: ['mozzarella cheese', 'egg'],
            image: 'https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80',
            price: 59.99,
            description: 'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese',
        },
        {
            id: '7',
            name: 'Egg & Sausage Pizza',
            slug: 'egg-and-sausage-pizza',
            toppings: ['mozzarella cheese', 'egg'],
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
            price: 59.99,
            description: 'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese',
        },
        {
            id: '8',
            name: 'Egg & Sausage Pizza',
            slug: 'egg-and-sausage-pizza',
            toppings: ['mozzarella cheese', 'egg'],
            image: 'https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            price: 59.99,
            description: 'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese',
        },
        {
            id: '9',
            name: 'Egg & Sausage Pizza',
            slug: 'egg-and-sausage-pizza',
            toppings: ['mozzarella cheese', 'egg'],
            image: 'https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            price: 59.99,
            description: 'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese',
        },
        {
            id: '10',
            name: 'Egg & Sausage Pizza',
            slug: 'egg-and-sausage-pizza',
            toppings: ['mozzarella cheese', 'egg'],
            image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
            price: 59.99,
            description: 'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese',
        },
    ]

    const [keyword, setKeyword] = useState('');

    const filteredPizzas = pizzas.filter(
        pizza =>
            pizza.name.toLowerCase().includes(keyword) || pizza.toppings.includes(keyword)
    )

    const onInputChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
    };

    return (
        <div>
            <div className={styles.searchWrapper}>
                <input placeholder="Search for pizza or toppings..." className={styles.searchBar} onChange={onInputChange}></input>
            </div>

            <div className={styles.pizzaContainer}>
                {filteredPizzas < 1
                    ?
                    (
                        <div className={styles.nopeContainer}>There is no pizza or topping with that.</div>
                    )
                    :
                    filteredPizzas.map(pizza => {
                        return (
                            <div className={styles.pizzaItem} key={pizza.id}>
                                <Link href={`/${pizza.slug}`} className={styles.pizzaImageBox}>
                                    <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage}></img>
                                </Link>

                                <div className={styles.pizzaText}>
                                    <p className={styles.pizzaHeader}>
                                        {pizza.name}</p>
                                    <p className={styles.pizzaToppings}>
                                        {pizza.toppings.map(t => t).join(', ')}</p>
                                    <p className={styles.pizzaPrice}>
                                        ${pizza.price}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}