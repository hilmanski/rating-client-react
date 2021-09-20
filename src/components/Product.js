import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import RatingStar from './RatingStar';

function Product() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState({});
    //const [currentRating, setcurrentRating] = useState(0);

    const { key } = useParams();

    useEffect(() => {
        fetch(`https://fakerating.deta.dev/products/${key}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
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

                <section>
                    <div>
                        <span class="is-xl" id="current-rating-nr"></span> &nbsp;
                        <span> <RatingStar /> </span>
                    </div>    
                </section> 
            </div>
        );
    }
}

export default Product;
