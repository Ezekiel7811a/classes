import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-csharp";
import "prismjs/themes/prism-okaidia.css";

const PrismLoader = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <div></div>;
};

export default PrismLoader;
