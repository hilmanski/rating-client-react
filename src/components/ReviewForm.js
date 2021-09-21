import '../css/product.css';
import { useState, useEffect } from 'react'
import RatingStar from './RatingStar';

function ReviewForm() {

    function submitReview() {

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
                        <RatingStar hoverable={true} />
                    </div>

                    <p>Review</p>
                    <textarea placeholder="start typing.." id="review_textarea" cols="30" rows="2"></textarea>
                    <br />

                    <button onClick={submitReview}>Submit Review</button>
                </div>
            </div>
        </div>
    )
}

export default ReviewForm;