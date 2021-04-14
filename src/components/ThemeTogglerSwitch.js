import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import DarkModeToggle from "react-dark-mode-toggle";

class ThemeTogglerSwitch extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <DarkModeToggle
            onChange={e => toggleTheme(theme === 'dark' ? "light" : "dark")}
            checked={theme === "dark"}
            size={60}
          />
        )}
      </ThemeToggler>
    )
  }
}

export default ThemeTogglerSwitch