import './sidebar.css'

export default function Sidebar(){
    return(
        <div className="sidebar side-menu">
            <div> <img className="side-img" src="Elisa_Orizzontale_Red.png" alt="Elisa Gelato logo" /> </div>
            <div>
                <ul class="side-menu-items">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/flavours">Flavours</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}