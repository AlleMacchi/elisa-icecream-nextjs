import React from 'react'
import './faq.css'
import Head from "../components/head/head";

export default function FaqDetails(){
  return(
    <>
      <Head
          title="Frequently Asked Questions"
          content="Frequently Asked Questions of Elisa Gelato"
          href="https://www.elisagelato.com.au/faq"
      />
      <div className="container-faq">
      <section className="text-gray-700">
        <div className="container px-5 py-1 mx-auto">
          <div className="text-center mb-15 Menu-Faq">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 mt-4 faq-title">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Why is Elisa gelato so creamy and flavoursome?
                </summary>

                <span>
                    Elisa gelato is made fresh in our laboratorio, in small batches of no more than 4/5 kg 
                    of gelato at a time, several times a day depending on products sold. The art of making gelato 
                    includes knowing when the right consistency is reached, not too cold and hard, not too warm and soft.  
                    Once the right consistency is reached, the gelato is stored in the “pozzetti” counter which is the best 
                    way to store gelato, keeping it at the perfect temperature to maintain its creaminess. 
                    We use traditional methods and high-quality ingredients to give you an authentic experience of an indulgent gelato from Bologna here in Sydney.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Do the fruit flavours contain dairy?
                </summary>

                <span>
                    No, they don’t. We make fruit gelato the traditional way: real fruit, water and sugar.
                    We take allergies very seriously, and while we do our best to keep strict processes and procedures, 
                    we cannot guarantee there is no cross contamination between flavours in our laboratorio.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Does Elisa gelato contain gluten?
                </summary>

                <span>
                    While most of our flavours are free from gluten, we cannot guarantee 
                    that our gelato is suitable for celiacs / people with gluten intolerance.
                    We take allergies very seriously, and while we do our best to keep strict 
                    processes and procedures, we cannot guarantee there is no cross contamination 
                    between flavours in our laboratorio.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Which flavours contain nuts?
                </summary>

                <span className="px-4 py-2">
                    While many of our flavours do not contain nuts, we cannot guarantee that our 
                    gelato is suitable for people with a nut allergy or intolerance.
                    We take allergies very seriously, and while we do our best to keep strict 
                    processes and procedures, we cannot guarantee there is no cross contamination between flavours in our laboratorio.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                What do I need to know about take away gelato tubs?
                </summary>

                <span className="px-4 py-2">
                    In terms of travel time, we usually recommend 20-30 minutes as a safe 
                    estimate for the travel time. It obviously depends on the conditions and 
                    circumstances on the day (temperature, transport etc.)
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                How long before eating it should I take the gelato out of the freezer?

                </summary>

                <span className="px-4 py-2">
                    We recommend that you take your gelato out of the freezer and that 
                    you keep outside, without the lid, for about 15 minutes before eating it, 
                    so it gets back to the right serving temperature and consistency.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>  

    </div>
  </> 
  
  )
}