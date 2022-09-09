import Todo from './Todo'
export default function Todos({ todos, markComplete }) {
  return (
    <>
      <section>
        {todos && todos.length ? todos?.map((todo, idx)=>{
            return <Todo todo={todo} key={idx} id={idx} markComplete={markComplete}/>
        }) : <p>'Nothing to do, get started ...'</p> }
      </section>
    </>
  );
}
