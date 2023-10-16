import './sidebar.css'

export default function Sidebar(){
    return(
        <div className="sidebar side-menu">
            <div> <img className="side-img" src="Elisa_Orizzontale_Red.png" alt="Elisa Gelato logo" /> </div>
            <div>
                <ul class="side-menu-items">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Our story</a></li>
                    <li><a href="/auth-gelato">Authentic gelato</a></li>
                    <li><a href="/flavours">Traditional flavours</a></li>
                    <li><a href="/faq">FAQs</a></li>
                    <li><a href="/contact">Contact us</a></li>
                </ul>
            </div>
        </div>
    )
}