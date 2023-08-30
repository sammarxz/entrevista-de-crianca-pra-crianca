import { useEffect, useState } from "react";

import { Menu } from "./components";

import "./Teste1.css";

export const Teste1 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedRect, setSelectedRect] = useState<number | null>(null);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showMenu) {
        const contextMenu = document.querySelector(".menu");
        if (contextMenu && !contextMenu.contains(event.target as Node)) {
          setShowMenu(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  const handleContextMenu = (
    e: React.MouseEvent<HTMLDivElement>,
    rectIndex: number
  ) => {
    e.preventDefault();
    setSelectedRect(rectIndex);
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setShowMenu(true);
  };

  const handleColorSelect = (color: string) => {
    setShowMenu(false);
    if (selectedRect !== null) {
      const colorClass = `bg--${color.toLocaleLowerCase()}`;
      const rects = document.querySelectorAll(".teste1__rect");
      (rects[selectedRect] as HTMLElement).classList.add(colorClass);
    }
  };

  return (
    <div className="teste1">
      {showMenu ? (
        <Menu
          xPos={menuPosition.x}
          yPos={menuPosition.y}
          onSelectOption={handleColorSelect}
        />
      ) : null}
      {[0, 1, 2, 3, 4].map((_, index) => (
        <div
          key={index}
          className="teste1__rect"
          onContextMenu={(e) => handleContextMenu(e, index)}
        ></div>
      ))}
    </div>
  );
};
