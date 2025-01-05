const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground">
              We strive to provide innovative solutions that make a positive
              impact on people&apos;s lives. Our team is dedicated to creating
              products that are not only functional but also user-friendly and
              accessible to all.
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground">
              We envision a world where technology seamlessly integrates into
              everyday life, enhancing productivity and fostering connections.
              Our goal is to be at the forefront of this technological
              revolution, leading the way with cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
