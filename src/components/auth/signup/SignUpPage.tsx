import { useState } from "react";
import { Input } from "../../ui/input/Input";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Button } from "../../ui/button/Button";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 min-h-screen w-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              Create Account
            </h1>
            <p className="text-slate-600">Join us today</p>
          </div>
          <form className="space-y-6">
            <div className="space-y-2">
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                radius="xl"
                size="large"
                type="text"
                required
              ></Input>
            </div>

            <div className="space-y-2">
              <Input
                label="Email"
                placeholder="Enter your email"
                radius="xl"
                size="large"
                type="email"
                validateOnBlur={true}
              ></Input>
            </div>

            <div className="space-y-2">
              <Input
                label="Password"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                radius="xl"
                validateOnBlur={true}
                size="large"
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

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                className="size-4 text-teal-600 bg-slate-50 border-slate-300 rounded focus:ring-teal-500 focus:ring-2 mt-1"
              />
              <label
                htmlFor="terms"
                className="text-sm text-slate-600 leading-relaxed"
              >
                I agree to the{" "}
                <button
                  type="button"
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Terms & Privacy
                </button>
              </label>
            </div>

            <Button radius="xl" size="large" className="w-full">
              Create account
            </Button>
          </form>

          <p className="text-center text-sm text-slate-600 mt-6">
            Already have an account?{" "}
            <Button variant="ghost" className="text-primary">
              Sign up
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
