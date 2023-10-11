import './Ingredients.css'

export default function Ingredients() { 
        return ( 
           <div className='Ingredients'> 
                <div className="Ingredients-container"> 
                    <div className='Ingredients-text'>
                        <h1>Ingredients</h1>
                        <hr></hr>
                        <p className='Ingredients-paragraph'>Our authentic gelato, crafted with traditional recipes 
                            and savoir-faire from renowned gelato makers in Bologna, 
                            offers a unique experience and indulgence at its best. 
                            With its creamy texture and rich flavours, our gelato is
                            the perfect balance of sweetness and richness. 
                            Made in small batches using traditional methods and 
                            high-quality ingredients, our gelato offers the perfect balance of texture and flavour.
                        </p>
                    </div>
                    <div className='Ingredients-img'>
                            <img src='./ingredient-chocolate.jpg'></img>
                    </div>
                </div>
            </div>   
        ); 
};