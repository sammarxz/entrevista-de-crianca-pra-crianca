import { useState } from "react";

export const useColorSelection = (closeContextMenu: () => void) => {
  const [selectedRect, setSelectedRect] = useState<number | null>(null);

  const handleColorSelect = (color: string) => {
    if (selectedRect !== null) {
      const colorClass = `bg--${color.toLocaleLowerCase()}`;
      const rects = document.querySelectorAll(".teste1__rect");
      const selectedRectElement = rects[selectedRect] as HTMLElement;

      // Remove classes de cor existentes
      for (const className of selectedRectElement.classList) {
        if (className.startsWith("bg--")) {
          selectedRectElement.classList.remove(className);
        }
      }

      // Adiciona a nova classe de cor
      selectedRectElement.classList.add(colorClass);

      closeContextMenu();
    }

    setSelectedRect(null);
  };

  return { setSelectedRect, handleColorSelect };
};
