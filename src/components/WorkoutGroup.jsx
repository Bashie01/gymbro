import Button from "./Button";

export default function WorkoutGroup({ onStartAddExercise }) {
  return (
    <div className="px-6">
      <p className="text-red-500 font-bold">Workout Name</p>
      <p>(Insert Name)</p>
      <div className="flex items-center justify-between">
        <p>Exercise 1</p>
        <Button onClick={onStartAddExercise}>Muscle Group</Button>
      </div>
    </div>
  );
}
