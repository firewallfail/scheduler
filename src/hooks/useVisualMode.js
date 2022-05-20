import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (transition, replace = false) => {
    setMode(transition);
    if (replace) {
      const newHistory = history;
      newHistory.pop();
      newHistory.push(transition);
      setHistory(newHistory);
      return;
    }
    const newHistory = history;
    newHistory.push(transition);
    setHistory(newHistory);
  }

  const back = () => {
    if (history.length <= 1) return;
    const backHistory = history;
    backHistory.pop();
    setMode(backHistory[backHistory.length - 1]);
  }

  return { mode, transition, back };
}