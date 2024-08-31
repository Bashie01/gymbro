import React from "react";
import Button from "./Button";

function NoExercise({ onStartAddExercise }) {
  return (
    <div>
      <h2>No Exercise Selected</h2>
      <p>Select a exercise or get started on a new one.</p>
      <Button onClick={onStartAddExercise}>Start</Button>
    </div>
  );
}

export default NoExercise;
