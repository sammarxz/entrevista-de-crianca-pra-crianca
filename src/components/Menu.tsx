interface MenuProps {
  xPos: number;
  yPos: number;
  onSelectOption: (option: string) => void;
}

const menuOptions = ["vermelho", "verde", "azul"];

export const Menu = ({ xPos, yPos, onSelectOption }: MenuProps) => {
  const handleOptionSelect = (option: string) => {
    onSelectOption(option);
  };

  return (
    <nav className="menu" style={{ top: yPos, left: xPos }}>
      <ul className="menu__list">
        {menuOptions.map((option) => (
          <li key={option} className="menu__list__item">
            <button onClick={() => handleOptionSelect(option)}>
              <span className={`bg--${option}`}></span>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
