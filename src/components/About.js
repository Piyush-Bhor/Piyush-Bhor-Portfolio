import React, { useState, useEffect } from "react";


export default function About() {

  const [text, setText] = useState("I craft elegant solutions with code. Let's build something amazing together.");
  const newTexts = [
    "robust backend systems.",
    "powerful APIs.",
    "efficient server-side solutions.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);

  const typeText = () => {
    const currentText = newTexts[currentIndex];
    let currentCharacterIndex = 0;
    setText("");
  
    const typingInterval = setInterval(() => {
      setText((prevText) => prevText + currentText[currentCharacterIndex]);
      currentCharacterIndex++;
  
      if (currentCharacterIndex === currentText.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          if (currentIndex === newTexts.length - 1) {
            setCurrentIndex(0);
          } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }
          setTypingComplete(true);
        }, 1500); // Change the delay after typing each text (in milliseconds) if desired
      }
    }, 100); // Change the typing speed (in milliseconds) if desired
  };
  
  useEffect(() => {
    typeText();
  }, [currentIndex]);
  

    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Piyush.
                <br className="hidden lg:inline-block" />I build &nbsp;
                {typingComplete && (
                  <span className="typed-text">{text}</span>
                )}
              </h1>
              <p className="mb-8 leading-relaxed">
                With a passion for clean code and scalable architectures, I strive to deliver high-performance solutions.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            
          </div>
        </section>
    );
}