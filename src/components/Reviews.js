import '../css/product.css';
import { useState, useEffect } from 'react'
import RatingStar from './RatingStar';
import { endpoint } from '../utils/API'

function Reviews({reviewLists, productKey}) {
    const [items, setItems] = useState(reviewLists)
    const [currentRating, setCurrentRating] = useState(0);
    const [currentStar, setCurrentStar] = useState(0);
    const [ready, setReady] = useState(false);


    const io = require("socket.io-client");
    const socket = io(endpoint);

    useEffect(() => {
        let total = 0
        items.forEach((item) =>
            total += item.star_count
        )

        const avg_star = (total / items.length).toFixed(2)
        setCurrentRating(avg_star)
        setCurrentStar(Math.ceil(avg_star))
        setReady(true)
    }, [items])


    //Subscribe to socket room
    useEffect(() => {
        socket.emit('join', `room-${productKey}`)
        
        socket.on('newreview', (data) => {
            data.star_count = data.star_count / 2
            setItems(oldReviews => [...oldReviews, data])
        })
    }, [socket, productKey, items])

    return (
        <div>
            <section>
                <div>
                    { ready && (
                        <>
                            <span className="is-xl"> {currentRating} </span> &nbsp;
                            <span> <RatingStar totalActive={currentStar} /> </span> 
                        </>
                        )
                    }
                </div>
            </section>
            <br />

            <p>Reviews</p>
            
            {
                items.map((item, index) => (
                    <div key={index}>
                        <p><RatingStar totalActive={item.star_count} /> - 
                        <b>{item.star_count}</b> {item.review}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Reviews;