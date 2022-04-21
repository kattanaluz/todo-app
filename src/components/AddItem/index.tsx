type appProps = {
  onClick: () => void
}


export default function AddItem({ onClick }): JSX.Element {
  return (
    <div>
      <h2>Add a new task to your to-do list</h2>
      <input type="text"></input>
    </div>
  );
}
