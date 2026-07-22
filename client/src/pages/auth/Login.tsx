import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import FormField from "../../components/ui/FormFields";
import { useState } from "react";
import { loginApi } from "../../api/auth.api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await loginApi({
        email,
        password,
      });
      login(response.data.token, response.data.user);
      alert("Login Successful!");
      navigate("/dashboard");
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data;

        if (data?.errors?.length) {
          // Show the first Zod validation error
          setError(data.errors[0].message);
        } else if (data?.message) {
          // AppError or generic backend message
          setError(data.message);
        } else if (error.request) {
          setError("Unable to connect to server. Please try again later");
        } else {
          setError("Something went wrong.");
        }

        console.error(error);
      } else {
        setError("Something went wrong.");
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
    setSuccess("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError("");
    setSuccess("");
  };

  return (
    <main className='min-h-screen bg-background'>
      <div className='mx-auto flex min-h-screen max-w-7xl items-center justify-between gap-16 px-8'>
        {/* Left Branding */}
        <section className='max-w-lg'>
          <h1 className='text-5xl font-bold text-primary'>ResumePilot AI</h1>

          <p className='mt-5 text-lg leading-8 text-text-muted'>
            Build professional ATS-friendly resumes with AI assistance. Generate
            resumes faster, optimize them for recruiters, and land your dream
            job.
          </p>

          <div className='mt-10 space-y-4 text-text'>
            <p>✨ AI Resume Generation</p>
            <p>📄 ATS Optimization</p>
            <p>🎨 Professional Templates</p>
          </div>
        </section>

        {/* Login Card */}
        <Card>
          <h2 className='text-center text-3xl font-bold'>Welcome Back</h2>

          <p className='mt-2 text-center text-text-muted'>
            Sign in to continue to ResumePilot AI
          </p>

          <form className='mt-8 space-y-5' onSubmit={handleSubmit}>
            <FormField label='Email' htmlFor='email'>
              <Input
                id='email'
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={handleEmailChange}
              />
            </FormField>

            <FormField label='Password' htmlFor='password'>
              <Input
                id='password'
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={handlePasswordChange}
              />
            </FormField>
            {success && (
              <p className='rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400'>
                {success}
              </p>
            )}
            {error && (
              <p className='rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400'>
                {error}
              </p>
            )}
            <Button type='submit'>Sign In</Button>
          </form>

          <p className='mt-6 text-center text-sm text-text-muted'>
            Don't have an account?{" "}
            <span className='cursor-pointer font-semibold text-accent hover:underline'>
              Register
            </span>
          </p>
        </Card>
      </div>
    </main>
  );
};

export default Login;
