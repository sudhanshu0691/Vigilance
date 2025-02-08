import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <Button variant="ghost" size="icon" onClick={toggle} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </Button>
  );
}