import { useState, useEffect } from 'react'

function RatingStar({totalActive, hoverable=false}) {
    const [totalHighlight, setTotalHighlight] = useState(totalActive);

    function highlightStar(index) {
        setTotalHighlight(index + 1)
    }

    return (
        <>
            {   
                Array(5).fill(null).map((value, index) => (
                    <svg key={index} width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path onMouseEnter={hoverable ? ()=>highlightStar(index) : undefined}
                            d="M15.5 0L20.9664 7.71885L30.2414 10.3647L24.3448 17.7812L24.6107 27.1353L15.5 24L6.38933 27.1353L6.65517 17.7812L0.758624 10.3647L10.0336 7.71885L15.5 0Z"
                            fill={index < totalHighlight ? '#FDCE6E' : '#C4C4C4' } />
                    </svg>
                ))
            }
        </>
    )
}

export default RatingStar;