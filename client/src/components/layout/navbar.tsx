import { Link } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Home, LayoutDashboard, Map, Mail } from "lucide-react";

export default function Navbar() {
  const { user, logoutMutation } = useAuth();

  return (
    <nav className="bg-white border-b border-red-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <a className="font-bold text-xl text-primary">WeatherAlert</a>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/">
              <a className="flex items-center gap-2 hover:text-primary transition-colors">
                <Home size={18} /> Home
              </a>
            </Link>
            <Link href="/dashboard">
              <a className="flex items-center gap-2 hover:text-primary transition-colors">
                <LayoutDashboard size={18} /> Dashboard
              </a>
            </Link>
            <Link href="/map">
              <a className="flex items-center gap-2 hover:text-primary transition-colors">
                <Map size={18} /> Map
              </a>
            </Link>
            <Link href="/contact">
              <a className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={18} /> Contact
              </a>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-primary">
            <Bell size={18} />
          </Button>

          {user && (
            <Link href="/profile">
              <a>
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {user.username.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </a>
            </Link>
          )}

          <Button 
            variant="outline"
            onClick={() => logoutMutation.mutate()}
            className="border-red-200 hover:bg-red-50"
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}