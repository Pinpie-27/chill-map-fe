import { useState } from "react";
import { Input } from "../../ui/input/Input";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Button } from "../../ui/button/Button";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 min-h-screen w-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              Welcome Back
            </h1>
            <p className="text-slate-600">Sign in to your account</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Input
                label="Email"
                placeholder="Enter your email"
                radius="xl"
                size="large"
                type="email"
                validateOnBlur={true}
                // showValidationHelper={true}
              ></Input>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Input
                label="Password"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                radius="xl"
                size="large"
                validateOnBlur={true}
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-1 focus:outline-none"
                  >
                    {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                  </button>
                }
              />
            </div>
            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="size-4 text-teal-600 bg-slate-50 border-slate-300 rounded focus:ring-teal-500 focus:ring-2"
                />
                <span className="text-sm text-slate-600">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-teal-600 hover:text-teal-700 font-medium"
              >
                Forgot password?
              </button>
            </div>

            <Button radius="xl" size="large" className="w-full">
              Sign in
            </Button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-slate-600 mt-6">
            Don't have an account?
            <Button variant="ghost" className="text-primary">
              Sign up
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
