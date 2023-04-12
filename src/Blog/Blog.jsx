import React from "react";

const Blog = () => {
  return (
    <>
      <div className="mx-5">
        <p>When you should use context api?</p>
        <li>
          Context is primarily used when some data needs to be accessible by
          many components at different nesting levels. Apply it sparingly
          because it makes component reuse more difficult. If you only want to
          avoid passing some props through many levels, component composition is
          often a simpler solution than context.
        </li>
        <p className="mt-5">What is Custom Hook?</p>
        <li>
          Custom React JS hooks are reusable functions that a React JS software
          developer can use to add special and unique functionality to the React
          applications. Usually, if there is a requirement to add a feature.
        </li>
        <p className="mt-5">What is useRef?</p>
        <li>
          useRef is a built-in React hook that accepts one argument as the
          initial value and returns a reference (aka ref). A reference is an
          object having a special property current .
        </li>
        <p className="mt-5">What is useMemo?</p>
        <li>
          useMemo is a React Hook that lets you cache the result of a
          calculation between re-renders. const cachedValue =
          useMemo(calculateValue, dependencies) Reference.
          useMemo(calculateValue, dependencies)
        </li>
      </div>
    </>
  );
};

export default Blog;
