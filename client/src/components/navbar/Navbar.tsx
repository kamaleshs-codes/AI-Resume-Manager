import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleHome = () => {
    navigate("/home");
  };

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className='sticky top-0 z-50 border-b border-border bg-surface shadow-sm'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6'>
        {/* Left */}
        <button
          onClick={handleHome}
          className='text-2xl font-bold text-primary transition hover:opacity-80'>
          ResumePilot AI
        </button>

        {/* Right */}
        <div className='flex items-center gap-4'>
          <span className='text-sm font-medium text-text'>
            Welcome, {user?.username}
          </span>

          <Button type='button' onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
