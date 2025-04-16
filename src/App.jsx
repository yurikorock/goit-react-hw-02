//App.jsx

import { useState } from "react";

import "./App.module.css";
import Description from "./components/Description/Description";
import Option from "./components/Option/Option";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Option updateFeedback={updateFeedback} />
      <Notification message="No feedback yet" />
      <Feedback feedback={feedback} />
    </>
  );
};
export default App;
