import { Menu, Rectangle } from "./components";

import { useColorSelection, useContextMenu } from "./hooks";

import "./Teste1.css";

export const Teste1 = () => {
  const { showMenu, menuPosition, openContextMenu, closeContextMenu } =
    useContextMenu();
  const { setSelectedRect, handleColorSelect } =
    useColorSelection(closeContextMenu);

  const handleContextMenu = (
    e: React.MouseEvent<HTMLDivElement>,
    rectIndex: number
  ) => {
    e.preventDefault();
    openContextMenu(e.clientX, e.clientY);
    setSelectedRect(rectIndex);
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
        <Rectangle
          key={index}
          onContextMenu={(e) => handleContextMenu(e, index)}
        />
      ))}
    </div>
  );
};
