import { styled, keyframes } from "frontity";
import React from "react";

export default function Loading() {
  return <Spinner />;
}

const spin = keyframes`
    0% {transform: rotate(0deg);}
    100%  {transform: rotate(360deg);}
`;

const Spinner = styled.div`
  border: 12px solid #eee;
  border-top: 12px solid steelblue;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 2s linear infinite;
`;
