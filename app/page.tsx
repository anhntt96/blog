import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Anh Nguyen | Senior Software Engineer
      </h1>
      <p className="mb-4">
        {`
With over 6 years of experience in software engineering, I specialize in creating scalable and robust applications. Currently, I'm a Senior Software Engineer at Grab, where I lead projects and mentor junior developers. My background includes various programming languages and frameworks, making me adept at tackling complex problems. Outside of work, I’m passionate about continuous learning, fitness, and helping others achieve their potential.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
