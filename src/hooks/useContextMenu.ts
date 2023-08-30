import { useEffect, useState } from "react";

export const useContextMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
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

  const openContextMenu = (x: number, y: number) => {
    setMenuPosition({ x, y });
    setShowMenu(true);
  };

  const closeContextMenu = () => {
    setShowMenu(false);
  };

  return { showMenu, menuPosition, openContextMenu, closeContextMenu };
};
