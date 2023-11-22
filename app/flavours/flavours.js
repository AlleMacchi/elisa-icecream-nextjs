import "./flavoursMenu.css";
import Head from "../components/head/head";

export default function FlavoursMenu(){
    return(      
        <>        
            <Head
                title="Flavours"
                content="Traditional icecream Flavours"
                href="https://www.elisagelato.com.au/flavours"
            />
            <div className=" flavours-box">     
                <div className='flavoursMenu-title'><h1>Traditional Flavours</h1></div>         
                    {/* Gelati */}       
                    <div class="flavoursMenu-item"> 
                        <img src="./Antica Bologna.png"></img>
                    </div>
                    <div class="flavoursMenu-item">
                        <img src="./Elisa.png"></img>
                    </div>
                    <div class="flavoursMenu-item">
                        <img src="./Fior di Panna.png"></img>
                    </div>
                    <div class="flavoursMenu-item">
                        <img src="./Stracciatella.png"></img>
                    </div>
                    <div class="flavoursMenu-item">
                        <img src="./Nocciola.png"></img>
                    </div>
                    <div class="flavoursMenu-item">
                        <img src="./Pistacchio.png"></img>
                    </div>
                    <div class="flavoursMenu-item">
                        <img src="./Bacio.png"></img>
                    </div>
                    <div class="flavoursMenu-item">
                        <img src="./Arachide.png"></img>
                    </div>
                    <div class="flavoursMenu-item">
                        <img src="./Cioccolato.png"></img>
                    </div>
                    <div class="flavoursMenu-item">
                        <img src="./Crema Vaniglia.png"></img>
                    </div>
                    <div class="flavoursMenu-item"> 
                        <img src="./Caramello.png"></img>
                    </div>
                    <div class="flavoursMenu-item">
                        <img src="./Tiramisu.png"></img>
                    </div>
                    <div class="flavoursMenu-item">
                        <img src="./Fragola.png"></img>
                    </div>
                    <div class="flavoursMenu-item">
                        <img src="./Limone.png"></img>
                    </div>
                    <div class="flavoursMenu-item">
                        <img src="./Mango.png"></img>
                    </div>
                    <div class="flavoursMenu-item">
                        <img src="./Cocco.png"></img>
                    </div>

                    {/* Granite */}
                    <div class="flavoursMenu-item">
                        
                    </div>
                    <div class="flavoursMenu-item">
                        <img src="./Granita alla Fragola.png"></img>
                    </div>
                    <div class="flavoursMenu-item"> 
                        <img src="./Granita al Limone.png"></img>
                    </div>

                </div>
        </>
    )
}