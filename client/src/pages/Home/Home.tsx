import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import { useAuth } from "../../hooks/useAuth";

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <main className='min-h-screen bg-background'>
      {/* Navbar */}
      <header className='border-b border-border bg-surface'>
        <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6'>
          <h1 className='text-xl font-bold text-primary'>ResumePilot AI</h1>

          <div className='flex items-center gap-4'>
            <div className='text-right'>
              <p className='font-medium text-text'>{user?.username}</p>

              <p className='text-sm text-text-muted'>{user?.email}</p>
            </div>

            <Button type='button' onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <section className='mx-auto max-w-7xl p-8'>
        <Card>
          <h2 className='text-3xl font-bold'>
            Welcome back,
            <span className='ml-2 text-primary'>{user?.username}</span>
          </h2>

          <p className='mt-3 text-text-muted'>
            Your ResumePilot AI dashboard is ready.
          </p>
        </Card>
      </section>
    </main>
  );
};

export default Home;
