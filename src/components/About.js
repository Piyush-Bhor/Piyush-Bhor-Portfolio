import React, { useState, useEffect } from "react";


export default function About() {

  const [text, setText] = useState("I craft elegant solutions with code. Let's build something amazing together.");
  const newTexts = [
    "Vulnerability Researcher",
    "Exploit Developer",
    "Malware Analyst",
    "Software Engineer",
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
    }, 50); // Change the typing speed (in milliseconds) if desired
  };
  
  useEffect(() => {
    typeText();
  }, [currentIndex]);
  

    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-8xl text-7xl mb-4 font-medium text-white">
                Hi, my name is Pi.
                <br className="hidden lg:inline-block" />I am a&nbsp;
                {typingComplete && (
                  <span className="typed-text text-green-500">{text}</span>
                )}
              </h1>
              <p className="mb-8 leading-relaxed text-2xl">
                I discover zero-day vulnerabilities in open-source projects and develop exploits for them. <br></br>
                Occasionally, I reverse-engineer popular malware samples and publish my discoveries on my blog. 
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/piyush-b-bb7394265/"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Linkedin
                </a>
                <a
                  href="./Pi-Bhor.pdf"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  Resume
                </a>
              </div>
            </div>
            
          </div>
        </section>
    );
}