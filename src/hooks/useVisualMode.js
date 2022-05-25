import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  //Change the view for an interview slot
  const transition = (transition, replace = false) => {
    setMode(transition);
    if (replace) {
      const newHistory = history;
      newHistory.pop();
      newHistory.push(transition);
      setHistory(newHistory);
      return;
    }
    setHistory(prev => [...prev, transition]);
  }

  //Bring the view for an interview slot back one state
  const back = () => {
    if (history.length <= 1) return;
    const backHistory = history;
    backHistory.pop();
    setMode(backHistory[backHistory.length - 1]);
  }

  return { mode, transition, back };
}