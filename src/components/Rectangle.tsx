interface RectangleProps {
  onContextMenu: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Rectangle: React.FC<RectangleProps> = ({ onContextMenu }) => {
  return <div className="teste1__rect" onContextMenu={onContextMenu}></div>;
};
