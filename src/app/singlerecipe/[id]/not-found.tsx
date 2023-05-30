import Link from "next/link";

export default function NotFound(props) {
  console.log("logging props", props);
  return (
    <div>
      <h2>Not Found jhjhj</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  );
}
