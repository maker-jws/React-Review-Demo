import "../styles/App.css";
import results from "../data/data.json";
// console.log(results);

function Nav() {
  return (
    <nav className="navbar">
      <p className="brand">Craigslist</p>
      <div className="link-menu">
        <p>help</p>
        <p>safety</p>
        <p>privacy</p>
        <p>feedback</p>
        <p>terms</p>
        <button className="post-button">Post</button>
      </div>
    </nav>
  );
}

function Header(props) {
  return <header>{props.children}</header>;
}

function BreadCrumbs({ links }) {
  return (
    <div className="breadcrumb-wrapper">
      {links?.map((link, idx, arr) =>
        idx < arr.length - 1 ? (
          <>
            <p>{link}</p>
            {"/"}
          </>
        ) : (
          <p>Washington, D.C.</p>
        )
      )}
    </div>
  );
}

function Results(props) {
  return <section className="container">{props.children}</section>;
}

function ResultsList({results}) {
  return (
    <div class="result-grid">
      {results &&
        results.map((result, idx) => {
          return (
            <div className="result-card">
              <div className="result-image-header">
                <img src={result.image} alt={result.title + idx} />
              </div>
              <div className="card-body">
                <h2 className="title">{result.title}</h2>
                <p className="price">${result.cost}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

function ResultsHeader({children, title}){
  return ( 
    <>
    {children}
     <h1>{title}</h1>
    </>

  )
}

function App() {
  return (
    <div className="App">
      <Header>
        <Nav />
      </Header>

      <Results>
        <ResultsHeader title="Couch" />
        <ResultsList results={results}/>
      </Results>
    </div>
  );
}

export default App;
