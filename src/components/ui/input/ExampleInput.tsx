import { PersonIcon } from "@radix-ui/react-icons";
import { Input } from "./Input";

export const ExampleInput = () => {
  return (
    <>
      <div>
        <Input
          id="username"
          label="Username"
          placeholder="Enter your username"
        />
      </div>

      <div>
        <Input
          id="email"
          label="Email"
          placeholder="Enter your email"
          helperText="We will not share your email with anyone."
        />
      </div>

      <Input
        id="password"
        label="Password"
        placeholder="Enter your password"
        error="Password must be at least 8 characters"
      />

      <div>
        <Input
          id="email"
          label="Email"
          placeholder="Enter your email"
          leftIcon={<PersonIcon />}
          rightIcon={<PersonIcon />}
        />
      </div>

      <Input
        id="disabled"
        label="Disabled Input"
        placeholder="You cannot type here"
        disabled
      />
    </>
  );
};
