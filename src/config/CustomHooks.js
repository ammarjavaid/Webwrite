import { useState } from "react";

export function useModal(intialValue = false) {
  const [isOpen, setIsOpen] = useState(intialValue);

  document.body.style.overflow = isOpen ? "hidden" : "";

  return {
    isOpen,
    setIsOpen,
  };
}

export function useVerticalModal(intialValue = false) {
  const [isVerticalOpen, setIsVerticalOpen] = useState(intialValue);

  document.body.style.overflow = isVerticalOpen ? "hidden" : "";

  return {
    isVerticalOpen,
    setIsVerticalOpen,
  };
}
