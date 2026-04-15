import { useState } from "react";

export const useDone = () => {
  const [isDone, setIsDone] = useState(true);

  // useLayoutEffect(() => {
  //   setIsDone(localStorage.getItem("done") === "true");
  // }, []);

  const setDone = () => {
    localStorage.setItem("done", "true");
    setIsDone(true);
  };

  return [isDone, setDone] as const;
};
