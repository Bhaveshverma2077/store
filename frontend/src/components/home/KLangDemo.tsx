import { useState } from "react";

import { Button } from "@/components/ui/Buttons/Button";

export default function KLangDemo() {
  const [activeAction, setActiveAction] =
    useState<keyof typeof codeSnippets>("manipulate");

  const codeSnippets = {
    manipulate: `function manipulateObject() {
  console.log("Manipulating object");
  // Add manipulation logic here
}

manipulateObject();`,
    turn: `function turnRobot(degrees) {
  console.log(\`Turning robot \${degrees} degrees\`);
  // Add turning logic here
}

turnRobot(90);`,
    talk: `function speakPhrase(phrase) {
  console.log(\`Robot says: \${phrase}\`);
  // Add text-to-speech logic here
}

speakPhrase("Hello, I am a robot.");`,
  };

  return (
    <section
      className="w-full py-12 md:py-20 lg:py-28 xl:py-36 bg-gray-2"
      id="first-section"
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-12">
              Welcome to the Future of Robotics
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-11 md:text-xl">
              Program your robot with K-Lang, our open source humanoid
              programming language.
            </p>
          </div>
          <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-xl border bg-gray-1">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="md:w-[75%] mx-auto px-4 md:px-6 mt-6">
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-gray-12">
            K-Lang
          </h2>
          <p className="text-gray-11 md:text-lg">Watch K-Lang in action</p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          <div className="flex flex-row gap-4 col-span-2 md:col-span-1 md:flex-col">
            <Button
              variant={activeAction === "manipulate" ? "default" : "outline"}
              onClick={() => setActiveAction("manipulate")}
            >
              Manipulation
            </Button>
            <Button
              variant={activeAction === "turn" ? "default" : "outline"}
              onClick={() => setActiveAction("turn")}
            >
              Turning
            </Button>
            <Button
              variant={activeAction === "talk" ? "default" : "outline"}
              onClick={() => setActiveAction("talk")}
            >
              Talking
            </Button>
          </div>
          <div
            className="rounded-lg border bg-gray-2 text-gray-12 shadow-sm col-span-2 md:col-span-3"
            data-v0-t="card"
          >
            <pre className="text-sm text-gray-11 bg-gray-3 p-4 rounded-md overflow-x-auto">
              <code>{codeSnippets[activeAction]}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
