import React from "react";
import styles from '../components/Pizza.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function slug({ pizza, otherPizzas }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{pizza.name}</title>
            </Head>
            <div className={styles.pizzaWrapperLeft}>
                <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage}></img>
            </div>
            <div className={styles.pizzaWrapperRight}>
                <div className={styles.pizzaInfo}>
                    <p className={styles.pizzaTitle}>{pizza.name}</p>
                    <p className={styles.pizzaDescription}>{pizza.description}</p>
                    <p className={styles.pizzaPrice}>${pizza.price}</p>
                    <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                </div>

                <div className={styles.otherPizzaWrapper}>
                    {otherPizzas.map(otherPizza => {
                        return (
                            <div className={styles.otherPizzas} key={otherPizza.id}>
                                <Link href={'/' + otherPizza.slug}>
                                    <img src={otherPizza.image} alt={otherPizza.name}></img>
                                    <p>{otherPizza.name}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {

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
    ]

    const paths = pizzas.map(pizza => ({
        params: { slug: `${pizza.slug}` }
    }));

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
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
    ]

    const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));

    const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug);

    return {
        props: {
            pizza: pizza[0],
            otherPizzas: otherPizzas.sort(() => Math.random() - Math.random()).slice(0, 3),
        }
    }
}