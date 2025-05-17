/*import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <img 
                src="https://media-hosting.imagekit.io//78cdeb4ec0094533/logo.png?Expires=1836590236&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DGHaM~nfdihmuuKEb16NQ27qI7T3QxIUGFB-C2bRB3~VQxiDP1pCei7FNH9MFxpd3qY~M9Wysxj2PdssbwdSjsPSo~nXLVQZuaCsSgTkLVv-nQ8CJ3B-5jbS9zeyjGAmuZ2AlRSElxWoY~XHCU0KX6sCzL3V-OctxCcqxVTG~ixZvMHwWMuVzjbNmpFC~oZ9lFmrEx4-2V9-Rqj7~dU0K9VYlASk3r1YleghnQCIoMPXzuhxRxZjPGKMrB9R-fJH0RX7Rw-ExAioZD~liR9E3tD95FB6xU6Th6sln7TQul2Igpn5yguGFacz75fR36qR~5LgtovarqeYfv-ZOTgD8A__"  
                alt="Logo"
                className="size-9 rounded-lg" 
              />
              <h1 className="text-lg font-bold">Écho</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={"/settings"}
              className="btn btn-sm gap-2 transition-colors"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className="btn btn-sm gap-2">
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;*/

import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <img 
                src="https://res.cloudinary.com/dvfkurhis/image/upload/v1743365752/wdojfh0ceibgbdkkjqxs.png"  
                alt="Logo"
                className="size-9 rounded-lg" 
              />
              <h1 className="text-lg font-bold">Echo</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
