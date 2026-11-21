import { FaJedi } from "react-icons/fa";
import { useTheme } from "@/componets/ThemeProvider/ThemeProvider.jsx";
import css from "./Section.module.css";

export function Section({ title, children }) {
  const theme = useTheme();
  return (
    <section>
      {title && (
        <h2 className={css.title}>
          <FaJedi className={css.icon} size={theme.iconSize.xxlg} aria-hidden="true" />
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}


