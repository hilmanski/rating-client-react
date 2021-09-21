import '../css/product.css';
import { useState } from 'react'
import RatingStar from './RatingStar';

function ReviewForm({productKey}) {
    const [reviewText, setReviewText] = useState('');
    const [choosenStarCount, setChoosenStarCount] = useState(0);
    
    function submitReview() {
        const newReview = {
            'star_count': choosenStarCount,
            'review': reviewText
        }

        fetch(`https://fakerating.deta.dev/reviews/${productKey}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newReview),
        })
            .then(response => response.json())
            .then(function (data) {
                console.log(data)
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    function updateReviewText(e) {
        setReviewText(e.target.value)
    }


    //========================
    //Modal Toggle
    //========================
    function openModal() {
        document.getElementById('modalRoot').classList.add('visible');
    }

    function rootClick() {
        document.getElementById('modalRoot').classList.remove('visible');
    }

    function modalClick(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    return (
        <div>
            <button onClick={openModal}>Add Review</button>
            <div id="modalRoot" onClick={rootClick}>
                <div className="modal" onClick={modalClick}>
                    <h3>What's your rating?</h3>
                    <p>Rating</p>
                    <div id="ratingstar-submission">
                        <RatingStar totalActive={0} hoverable={true} stateStarUpdate={setChoosenStarCount} />
                    </div>

                    <p>Review</p>
                    <textarea onChange={updateReviewText} placeholder="start typing.." cols="30" rows="2"></textarea>
                    <br />

                    <button onClick={submitReview}>Submit Review</button>
                </div>
            </div>
        </div>
    )
}

export default ReviewForm;