import { useState, useEffect } from 'react'

function RatingStar({ totalActive, hoverable = false, stateStarUpdate}) {
    const [totalHighlight, setTotalHighlight] = useState(totalActive * 2);


    function highlightStar(index) {
        let count = index+1
        setTotalHighlight(count)
        stateStarUpdate(count)
    }

    return (
        <>
            {   
                Array(10).fill(null).map((value, index) => (
                    <svg key={index} 
                        style={(index % 2 === 0) ? {} : { transform: 'scale(-1, 1)' }}
                        width="15" height="30" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_i)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15 0C14.2677 0 13.6233 0.439371 13.2865 1.06914L9.68361 8.80207L1.56989 10.047C0.910835 10.1495 0.339652 10.6474 0.105321 11.3211C-0.12901 11.9802 0.0320926 12.7271 0.544692 13.2251L6.43226 19.2445L5.02628 27.8122C4.92376 28.5152 5.23132 29.2182 5.78785 29.6576C6.12471 29.8919 6.49085 29.9944 6.90093 29.9944C7.19384 29.9944 7.5014 29.9212 7.80896 29.7601L15 25.7764V0Z" 
                                fill={index < totalHighlight ? '#FDCE6E' : '#C4C4C4'} 
                                onMouseEnter={hoverable ? () => highlightStar(index) : undefined} />
                        </g>
                        <defs>
                            <filter id="filter0_i" x="0" y="0" width="15" height="29.9944" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="-1" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                            </filter>
                        </defs>
                    </svg>

                ))
            }
        </>
    )
}

export default RatingStar;