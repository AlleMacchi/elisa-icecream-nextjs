import React from "react";
import "./faq.css";
import Head from "../components/head/head";

export default function FaqDetails() {
  return (
    <>
      <Head
        title="Frequently Asked Questions | Elisa Gelato | Italian Gelato Sydney"
        content="Find answers to your questions about Elisa Gelato, the best Italian gelato in Sydney. Visit us at 32-34 Perouse Rd, Randwick NSW 2031, Australia."
        href="https://elisagelato.com.au/faq"
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
                    Elisa gelato is made fresh in our laboratorio, in small
                    batches of no more than 4/5 kg of gelato at a time, several
                    times a day depending on products sold. The art of making
                    gelato includes knowing when the right consistency is
                    reached, not too cold and hard, not too warm and soft. Once
                    the right consistency is reached, the gelato is stored in
                    the “pozzetti” counter which is the best way to store
                    gelato, keeping it at the perfect temperature to maintain
                    its creaminess. We use traditional methods and high-quality
                    ingredients to give you an authentic experience of an
                    indulgent gelato from Bologna here in Sydney.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Do the fruit flavours contain dairy?
                  </summary>

                  <span>
                    No, they don’t. We make fruit gelato the traditional way:
                    real fruit, water and sugar. We take allergies very
                    seriously, and while we do our best to keep strict processes
                    and procedures, we cannot guarantee there is no cross
                    contamination between flavours in our laboratorio.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Does Elisa gelato contain gluten?
                  </summary>

                  <span>
                    While most of our flavours are free from gluten, we cannot
                    guarantee that our gelato is suitable for celiacs / people
                    with gluten intolerance. We take allergies very seriously,
                    and while we do our best to keep strict processes and
                    procedures, we cannot guarantee there is no cross
                    contamination between flavours in our laboratorio.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Do you offer ice cream delivery?
                  </summary>
                  <span className="px-4 py-2">
                    Yes, Elisa Gelato offers home ice cream delivery, including
                    gelato delivery, across Sydney. Whether you're craving
                    Italian ice cream, chocolate delights, or specific gelato
                    flavors like pistachio gelato, we bring the best gelato near
                    you, right to your doorstep.
                  </span>
                </details>

                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    What gelato flavors do you offer?
                  </summary>
                  <span className="px-4 py-2">
                    Our selection includes classic Italian gelato flavors and
                    unique creations that cater to all tastes. From the rich and
                    nutty pistachio gelato to the best chocolate Sydney has to
                    offer, our menu is designed to provide a wide range of
                    options. We continuously update our flavors to ensure
                    there's always something new to try.
                  </span>
                </details>

                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Why choose Elisa Gelato for gelato nutrition?
                  </summary>
                  <span className="px-4 py-2">
                    We believe in transparency and quality, offering gelato made
                    with natural ingredients and less fat compared to
                    traditional ice cream. Our gelato provides a delightful
                    treat without compromising on nutrition, making it a
                    preferred choice for those seeking a healthier alternative.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Which flavours contain nuts?
                  </summary>

                  <span className="px-4 py-2">
                    While many of our flavours do not contain nuts, we cannot
                    guarantee that our gelato is suitable for people with a nut
                    allergy or intolerance. We take allergies very seriously,
                    and while we do our best to keep strict processes and
                    procedures, we cannot guarantee there is no cross
                    contamination between flavours in our laboratorio.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What do I need to know about take away gelato tubs?
                  </summary>

                  <span className="px-4 py-2">
                    In terms of travel time, we usually recommend 20-30 minutes
                    as a safe estimate for the travel time. It obviously depends
                    on the conditions and circumstances on the day (temperature,
                    transport etc.)
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How long before eating it should I take the gelato out of
                    the freezer?
                  </summary>

                  <span className="px-4 py-2">
                    We recommend that you take your gelato out of the freezer
                    and that you keep outside, without the lid, for about 15
                    minutes before eating it, so it gets back to the right
                    serving temperature and consistency.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    What is gelato?
                  </summary>
                  <span className="px-4 py-2">
                    Gelato is an Italian ice cream known for its dense, rich
                    texture. Unlike traditional ice cream, gelato is made with
                    less air and fat, resulting in a smoother and more intense
                    flavor. At Elisa Gelato, we pride ourselves on serving
                    authentic Italian gelato, offering you a genuine taste of
                    Italy right here in Sydney.
                  </span>
                </details>

                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    What's the difference between gelato and ice cream?
                  </summary>
                  <span className="px-4 py-2">
                    The main difference lies in the ingredients and production
                    process. Gelato uses more milk and less cream compared to
                    ice cream, making it denser and lower in fat. This results
                    in a smoother, chewier texture and a more intense flavor. At
                    Elisa Gelato, we focus on creating gelato that embodies
                    these qualities, ensuring a distinct and delightful
                    experience.
                  </span>
                </details>

                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    How is gelato made?
                  </summary>
                  <span className="px-4 py-2">
                    At Elisa Gelato, we craft our gelato in our "laboratorio" in
                    small batches, ensuring each scoop is fresh and full of
                    flavor. Our process involves careful temperature control to
                    achieve the perfect consistency—neither too hard nor too
                    soft. Stored in "pozetti" counters, our gelato is kept at
                    the ideal temperature to maintain its creaminess. We use
                    traditional recipes and high-quality ingredients, bringing
                    the authentic taste of Bologna's gelato to Sydney.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
