import sprite from "../data/images/sprite.svg";
import { useTheme } from "../context/ThemeContext";

function Logo({ h = 10, w = 5 }) {
  const { theme } = useTheme();
  const logoSrc =
    theme === "light" ? `${sprite}#logo-dark` : `${sprite}#logo-light`;
  return (
    <svg role="img" className={`h-${h} w-${w}`}>
      <use xlinkHref={logoSrc}></use>
    </svg>
  );
}

export default Logo;
