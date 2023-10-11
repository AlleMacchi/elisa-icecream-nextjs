import Card from '../Cards/cards';
import './WhatPeopleSay.css'

export default function WhatPeopleSay() { 
        return ( 
            <div className='whatSay-container'> 
                <div className='whatSay-title'><h1>What people are saying</h1></div>                
                <div>
                    <Card 
                        comment='Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu 
                                fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        name='John Ben'
                    />
                </div>
                <div>
                    <Card 
                        comment='Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu 
                                fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        name='John Ben'
                    />
                </div>
                <div>
                    <Card 
                        comment='Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu 
                                fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        name='John Ben'
                    />
                </div>
            </div>   
        ); 
};