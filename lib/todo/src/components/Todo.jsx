export default function Todo({ todo, id, markComplete }) {
  console.log(todo);
  function handleClick(e) {
    markComplete(id);
  }
  return (
    <>
      <div className="todo-card">
        {!todo.complete ? (
          <p>{todo.title}</p>
        ) : (
          <p className="strikethrough">{todo.title}</p>
        )}
        {!todo.complete ? (
          <button onClick={handleClick}> Mark As Complete </button>
        ) : (
          <button onClick={handleClick}> Mark As Incomplete </button>
        )}
      </div>
    </>
  );
}
