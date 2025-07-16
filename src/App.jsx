import "./hero.js";

import { Button } from "@heroui/react";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex gap-4 items-center">
        <Button className="bg-violet-300 border" size="sm">
          Small
        </Button>
        <Button className="bg-violet-300 border" size="md">
          Medium
        </Button>
        <Button className="bg-violet-300 border" size="lg">
          Large
        </Button>
      </div>
    </>
  );
}

export default App;
