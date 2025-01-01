import React from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void;
  ownID?: string;
  checked: boolean;
}

const ANode = ({ onClick, ownID, checked }: Props) => {
  return (
    <StyledWrapper>
      <label className="container">
        <input
          type="checkbox"
          onChange={onClick}
          id={ownID}
          checked={checked}
        />
        <div className="checkmark" />
      </label>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  /* Hide the default checkbox */
  .container input {
    display: none;
  }

  .container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 50px;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.5em;
    width: 1.5em;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    transition: all 0.25s;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
    --spread: 30px;
  }

  .container input:checked ~ .checkmark {
    background-color: #000000;
    box-shadow: -15px -15px var(--spread) 0px rgba(68, 188, 255, 0.4),
      0 -15px var(--spread) 0px rgba(255, 68, 236, 0.4),
      15px -15px var(--spread) 0px rgba(255, 103, 94, 0.4),
      15px 0 var(--spread) 0px rgba(68, 188, 255, 0.4),
      15px 15px var(--spread) 0px rgba(255, 68, 236, 0.4),
      0 15px var(--spread) 0px rgba(255, 103, 94, 0.4),
      -15px 15px var(--spread) 0px rgba(68, 188, 255, 0.4);
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    transform: rotate(0deg);
    border: 0.15em solid rgba(0, 0, 0, 0.863);
    left: 0;
    top: 0;
    width: 1.5em; /* Increased from 1.1em to 1.5em */
    height: 1.5em; /* Increased from 1.1em to 1.5em */
    border-radius: 50%;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    left: 0.6em; /* Adjusted from 0.45em to 0.6em */
    top: 0.3em; /* Adjusted from 0.25em to 0.4em */
    width: 0.4em; /* Increased from 0.25em to 0.4em */
    height: 0.8em; /* Increased from 0.5em to 0.8em */
    border-color: rgba(238, 238, 238, 0) white white #fff0;
    border-width: 0 0.2em 0.2em 0; /* Increased from 0.15em to 0.2em */
    border-radius: 0em;
    transform: rotate(45deg);
  }

  /* Add hover effect */
  .container:hover .checkmark {
    box-shadow: 0 0 40px rgba(255, 255, 255, 1);
  }
`;

export default ANode;
