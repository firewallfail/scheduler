import React from "react";

import "./InterviewerList.scss"

import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  const { value, onChange } = props;

  const interviewers = props.interviewers.map(interviewer =>
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === value}
      setInterviewer={() => onChange(interviewer.id)}
    />);

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
}