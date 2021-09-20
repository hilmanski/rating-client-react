function RatingStar() {
    let stars = []
    for (var i=0; i<5; i++) {
        stars += `<svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.5 0L20.9664 7.71885L30.2414 10.3647L24.3448 17.7812L24.6107 27.1353L15.5 24L6.38933 27.1353L6.65517 17.7812L0.758624 10.3647L10.0336 7.71885L15.5 0Z"
                        fill="#C4C4C4" />
                </svg>`
    }

    return (
        <>
         {stars}
        </>
    )
}

export default RatingStar;