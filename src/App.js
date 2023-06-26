import "./styles.css";
import { Fragment } from "react";

export default function App() {
  return (
    <div className="App">
      <Blog />
    </div>
  );
}

const Posts = [
  { id: 1, title: "An update", body: "its been a while since I posted..." },
  { id: 2, title: "My new blog", body: "I am starting a new blog!" },
];

function Blog() {
  return Posts.map((post) => (
    <Fragment key={post.id}>
      <PostTitle title={post.title} />
      <PostBody body={post.body} />
    </Fragment>
  ));
}

function PostTitle({ title }) {
  return <h1>{title}</h1>;
}

function PostBody({ body }) {
  return (
    <article>
      <p>{body}</p>
    </article>
  );
}
