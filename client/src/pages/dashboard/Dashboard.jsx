import { useAuth } from "../../hooks/useAuth";
const Dashboard = () => {
  const auth = useAuth();
  console.log(auth);
  return (
    <div className='min-h-screen bg-background text-text flex items-center justify-center'>
      <h1 className='text-4xl font-bold'>Dashboard</h1>
    </div>
  );
};
export default Dashboard;
