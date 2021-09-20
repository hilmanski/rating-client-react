import '../css/product.css';
import { useState, useEffect } from 'react'
import RatingStar from './RatingStar';

function Reviews({reviewLists}) {
    const [items] = useState(reviewLists)
    const [currentRating, setCurrentRating] = useState(0);
    const [currentStar, setCurrentStar] = useState(0);


    useEffect(() => {
        console.log(items)
        let total = 0
        items.forEach((item) =>
            total += item.star_count
        )

        const avg_star = (total / items.length).toFixed(2)
        setCurrentRating(avg_star)
        setCurrentStar(Math.ceil(avg_star))
    }, [items])

    return (
        <div>
            <section>
                <div>
                    <span className="is-xl"> {currentRating} </span> &nbsp;
                    <span> <RatingStar totalActive={currentStar} /> </span>
                </div>
            </section>
            <br />

            <p>Reviews</p>
            
            {
                items.map(item => (
                    <div key={item.key}>
                        <p><RatingStar totalActive={item.star_count} /> - 
                        <b>{item.star_count}</b> {item.review}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Reviews;