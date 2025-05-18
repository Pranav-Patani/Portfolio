import sprite from "/assets/sprite.svg";
import { useTheme } from "../context/ThemeContext";

function Logo() {
  const { theme } = useTheme();
  const logoSrc =
    theme === "light" ? `${sprite}#logo-dark` : `${sprite}#logo-light`;
  return (
    <svg role="img" className="h-10 w-5">
      <use xlinkHref={logoSrc}></use>
    </svg>
  );
}

export default Logo;
