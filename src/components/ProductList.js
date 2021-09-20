import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function ProductList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://fakerating.deta.dev/products")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.items);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                {items.map(item => (
                    <div key={item.key}>
                        <h3><Link to={`/product/${item.key}`}>{item.title}</Link></h3>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default ProductList;
