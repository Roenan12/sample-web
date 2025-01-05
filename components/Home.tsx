"use client";

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Discover amazing things with us
        </p>
        <Button
          variant="secondary"
          size="lg"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default Home;
