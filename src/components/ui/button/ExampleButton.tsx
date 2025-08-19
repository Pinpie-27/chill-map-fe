import { Separator } from "@radix-ui/themes";
import { Button } from "./Button";
import { PersonIcon } from "@radix-ui/react-icons";

export const ExampleButton = () => {
  return (
    <>
      <div>
        <div className="p-4">Example Button Small</div>

        <Button radius="full" size="small" variant="primary">
          Click me
        </Button>

        <div className="flex w-full justify-center">
          <Separator size="4" className="m-2" />
        </div>

        <Button size="small" variant="secondary">
          Click me
        </Button>

        <div className="flex w-full justify-center">
          <Separator size="4" className="m-2" />
        </div>
        <Button size="small" variant="outline">
          Click me
        </Button>

        <div className="flex w-full justify-center">
          <Separator size="4" className="m-2" />
        </div>

        <Button size="small" variant="ghost">
          Click me
        </Button>

        <div className="flex w-full justify-center">
          <Separator size="4" className="m-2" />
        </div>

        <Button size="small" variant="danger">
          Click me
        </Button>
        <div className="flex w-full justify-center">
          <Separator size="4" className="m-2" />
        </div>
        <Button size="small" variant="success">
          Click me
        </Button>
      </div>

      <div>
        <div className="p-4">Example Button Medium</div>

        <Button size="medium" variant="primary">
          Click me
        </Button>

        <div className="flex w-full justify-center">
          <Separator size="4" className="m-2" />
        </div>

        <Button size="medium" variant="secondary">
          Click me
        </Button>

        <div className="flex w-full justify-center">
          <Separator size="4" className="m-2" />
        </div>
        <Button size="medium" variant="outline">
          Click me
        </Button>

        <div className="flex w-full justify-center">
          <Separator size="4" className="m-2" />
        </div>

        <Button size="medium" variant="ghost">
          Click me
        </Button>

        <div className="flex w-full justify-center">
          <Separator size="4" className="m-2" />
        </div>

        <Button size="medium" variant="danger">
          Click me
        </Button>
        <div className="flex w-full justify-center">
          <Separator size="4" className="m-2" />
        </div>
        <Button size="medium" variant="success">
          Click me
        </Button>
      </div>

      <div>
        <div className="p-4">Example Button Large</div>

        <Button size="large" variant="primary">
          Click me
        </Button>

        <div className="flex w-full justify-center">
          <Separator size="4" className="m-2" />
        </div>

        <Button size="large" variant="secondary">
          Click me
        </Button>

        <div className="flex w-full justify-center">
          <Separator size="4" className="m-2" />
        </div>
        <Button size="large" variant="outline">
          Click me
        </Button>

        <div className="flex w-full justify-center">
          <Separator size="4" className="m-2" />
        </div>

        <Button size="large" variant="ghost">
          Click me
        </Button>

        <div className="flex w-full justify-center">
          <Separator size="4" className="m-2" />
        </div>

        <Button size="large" variant="danger">
          Click me
        </Button>
        <div className="flex w-full justify-center">
          <Separator size="4" className="m-2" />
        </div>
        <Button size="large" variant="success">
          Click me
        </Button>
      </div>

      <div>
        <div className="p-4">Example Button Icon</div>

        <Button leftIcon={<PersonIcon />}>Click</Button>

        <div className="flex w-full justify-center">
          <Separator size="4" className="m-2" />
        </div>

        <Button rightIcon={<PersonIcon />}>Click</Button>
      </div>
    </>
  );
};
