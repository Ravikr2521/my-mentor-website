
"use client"
import React ,{ useState, useEffect } from "react";

const TypeWriterText = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (index < text.length) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText + text[index]);
          setIndex(index + 1);
        }, speed);
  
        return () => clearTimeout(timer);
      }
    }, [index, displayedText, text, speed]);

   
  
    return (
      <div>
        {displayedText}
      </div>
    );
  };
  

  
  export default TypeWriterText;
  