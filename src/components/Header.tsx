import { Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-legal-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">CaseMind</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-legal-secondary/10 rounded-full transition-colors">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;