import { useState } from "react";
import WorkoutGroup from "./components/WorkoutGroup";
import Header from "./components/Header";
import CollapsibleSection from "./components/CollapsibleSection";
import NoExercise from "./components/NoExercise";

function App() {
  const [exerciseState, setExerciseState] = useState({
    selectedExercise: undefined,
    exercise: [],
  });

  function handleStartExercise() {
    setExerciseState((prevState) => {
      return {
        ...prevState,
        selectedExercise: null,
      };
    });
  }

  let content;

  if (exerciseState.selectedExercise === null) {
    content = <CollapsibleSection />;
  } else if (exerciseState.selectedExercise === undefined) {
    content = <NoExercise onStartAddExercise={handleStartExercise} />;
  }

  return (
    <main className="container mx-auto max-w-screen-lg p-6 bg-white shadow-md">
      <Header />
      <WorkoutGroup onStartAddExercise={handleStartExercise} />
      {content}
    </main>
  );
}

export default App;
