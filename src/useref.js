import React, { useRef, useState } from 'react';

 export default function USEREF() {
  const buttonRef = useRef(null); // Create a secret pocket for the button
  const [isToggled, setIsToggled] = useState(false); // State for toggle state

  const handleToggle = () => {
    setIsToggled(!isToggled); // Flip the toggle state

    if (buttonRef.current) {
      buttonRef.current.classList.toggle('toggled'); // Add/remove a class for styling
    }
  };

  return (
    <button ref={buttonRef} className={`toggle-button ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
      Toggle Me!
    </button>
  );
}
