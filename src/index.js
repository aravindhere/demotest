import React from "react";
import ReactDOM from "react-dom/client";
import 

//---------------Lesson----------------------
// function Greeting() {
//   return <h1>Hello, WOrld</h1>;
// }

// export default Greeting;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Greeting />);

//---------------finishes here----------------------

function BookList() {
  return (
    <div>
      <Book />
      <Book />
      <Book />
    </div>
  );
}

export default BookList;

const Book = () => {
  return (
    <article>
      <Title />
      <Image />
      <Author />
    </article>
  );
};
const Title = () => <h2 className="title">Title here</h2>;
const Image = () => <h2 className="images">Book Image here</h2>;
const Author = () => <h2 className="author">Author Name</h2>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
