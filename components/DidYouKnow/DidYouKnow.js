import './DidYouKnow.css'

const Banner = () => {
    return(
        <div className="container-DidYouKnow bg-fixed bg-parallax bg-cover">
            <h1 className="DidYouKnow-title">the true taste of Bologna without leaving Sydney</h1>

            <div className="container-icons">
                <div className="container-icon-text">
                    <img class="object-contain h-24 w-96" src="/Icecream-W.png"></img>
                    <h3>FAMOUS FOR OUR ICE CREAM</h3>
                </div>
                <div className="container-icon-text">
                    <img class="object-contain h-24 w-96 py-1" src="/Mobile.png"></img>
                    <h3>PHONE RESERVATIONS</h3>
                </div>
                <div className="container-icon-text">
                    <img class="object-contain h-24 w-96 py-1" src="/Clock.png"></img>
                    <h3>Mon - Wed 15:00 – 21:00</h3>
                    <h3>Thu - Sun 13:00 – 22:00</h3>
                </div>
                <div className="container-icon-text">
                    <img class="object-contain h-24 w-96 py-1" src="/Location.png"></img>
                    <h3>LOCATED IN CITY CENTER</h3>
                </div>
            </div>
        </div>
    )
}

export default Banner;