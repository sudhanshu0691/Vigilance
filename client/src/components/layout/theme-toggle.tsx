import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark");
    setTheme(newTheme);
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </Button>
  );
}
