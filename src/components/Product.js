import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

function Product() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState({});

    const { key } = useParams();

    //Load product data
    useEffect(() => {
        fetch(`https://fakerating.deta.dev/products/${key}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItem(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [key])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1>{item.title}</h1>
                <h2>{item.body}</h2>

                <ReviewForm productKey={key} />

                {
                    item.reviews &&
                        <Reviews reviewLists={item.reviews} />
                }
                
                
            </div>
        );
    }
}

export default Product;
