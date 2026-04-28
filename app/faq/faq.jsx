"use client";
import React, { useState } from "react";
import "./faq.css";
import Head from "../components/head/head";

const FAQ_ITEMS = [
  {
    q: "Why is Elisa gelato so creamy and flavoursome?",
    a: 'Elisa gelato is made fresh in our laboratorio, in small batches of no more than 4/5 kg of gelato at a time, several times a day depending on products sold. The art of making gelato includes knowing when the right consistency is reached, not too cold and hard, not too warm and soft. Once the right consistency is reached, the gelato is stored in the "pozzetti" counter which is the best way to store gelato, keeping it at the perfect temperature to maintain its creaminess. We use traditional methods and high-quality ingredients to give you an authentic experience of an indulgent gelato from Bologna here in Sydney.',
  },
  {
    q: "Do the fruit flavours contain dairy?",
    a: "No, they don't. We make fruit gelato the traditional way: real fruit, water and sugar. We take allergies very seriously, and while we do our best to keep strict processes and procedures, we cannot guarantee there is no cross contamination between flavours in our laboratorio.",
  },
  {
    q: "Does Elisa gelato contain gluten?",
    a: "While most of our flavours are free from gluten, we cannot guarantee that our gelato is suitable for celiacs / people with gluten intolerance. We take allergies very seriously, and while we do our best to keep strict processes and procedures, we cannot guarantee there is no cross contamination between flavours in our laboratorio.",
  },
  {
    q: "Do you offer ice cream delivery?",
    a: "Yes, Elisa Gelato offers home ice cream delivery, including gelato delivery, across Sydney. Whether you're craving Italian ice cream, chocolate delights, or specific gelato flavors like pistachio gelato, we bring the best gelato near you, right to your doorstep.",
  },
  {
    q: "What gelato flavors do you offer?",
    a: "Our selection includes classic Italian gelato flavors and unique creations that cater to all tastes. From the rich and nutty pistachio gelato to the best chocolate Sydney has to offer, our menu is designed to provide a wide range of options. We continuously update our flavors to ensure there's always something new to try.",
  },
  {
    q: "Which flavours contain nuts?",
    a: "While many of our flavours do not contain nuts, we cannot guarantee that our gelato is suitable for people with a nut allergy or intolerance. We take allergies very seriously, and while we do our best to keep strict processes and procedures, we cannot guarantee there is no cross contamination between flavours in our laboratorio.",
  },
  {
    q: "What do I need to know about take away gelato tubs?",
    a: "In terms of travel time, we usually recommend 20-30 minutes as a safe estimate for the travel time. It obviously depends on the conditions and circumstances on the day (temperature, transport etc.)",
  },
  {
    q: "How long before eating it should I take the gelato out of the freezer?",
    a: "We recommend that you take your gelato out of the freezer and that you keep outside, without the lid, for about 15 minutes before eating it, so it gets back to the right serving temperature and consistency.",
  },
  {
    q: "What is gelato?",
    a: "Gelato is an Italian ice cream known for its dense, rich texture. Unlike traditional ice cream, gelato is made with less air and fat, resulting in a smoother and more intense flavor. At Elisa Gelato, we pride ourselves on serving authentic Italian gelato, offering you a genuine taste of Italy right here in Sydney.",
  },
  {
    q: "What's the difference between gelato and ice cream?",
    a: "The main difference lies in the ingredients and production process. Gelato uses more milk and less cream compared to ice cream, making it denser and lower in fat. This results in a smoother, chewier texture and a more intense flavor. At Elisa Gelato, we focus on creating gelato that embodies these qualities, ensuring a distinct and delightful experience.",
  },
  {
    q: "How is gelato made?",
    a: 'At Elisa Gelato, we craft our gelato in our "laboratorio" in small batches, ensuring each scoop is fresh and full of flavor. Our process involves careful temperature control to achieve the perfect consistency—neither too hard nor too soft. Stored in "pozetti" counters, our gelato is kept at the ideal temperature to maintain its creaminess. We use traditional recipes and high-quality ingredients, bringing the authentic taste of Bologna\'s gelato to Sydney.',
  },
];

function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
      <button className="faq-question" onClick={onClick} aria-expanded={isOpen}>
        <span>{question}</span>
        <span className="faq-chevron" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div className="faq-answer-wrapper">
        <p className="faq-answer">{answer}</p>
      </div>
    </div>
  );
}

export default function FaqDetails() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <Head
        title="Frequently Asked Questions | Elisa Gelato | Italian Gelato Sydney"
        content="Find answers to your questions about Elisa Gelato, the best Italian gelato in Sydney. Visit us at 32-34 Perouse Rd, Randwick NSW 2031, Australia."
        href="https://elisagelato.com.au/faq"
        srcScript="/clarity.js"
      />
      <div className="container-faq">
        <div className="faq-inner">
          <div className="faq-header">
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <p className="faq-subtitle">
              Everything you need to know about our gelato
            </p>
          </div>
          <div className="faq-list">
            {FAQ_ITEMS.map((item, i) => (
              <FaqItem
                key={i}
                question={item.q}
                answer={item.a}
                isOpen={openIndex === i}
                onClick={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
