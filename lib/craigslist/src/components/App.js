import '../styles/App.css';
import results from '../data/results'
console.log(results)
function App() {
  return (
    <div className="App">
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
     <header >
      <div className="breadcrumb-wrapper">

      <p>Washington, D.C.</p>{"/"}<p>all Washington, D.C.</p>{"/"}<p>For Sale</p>{"/"}<p>Furniture</p>{"/"}
      </div>
     </header>
     <section className="container">
        <h1>Couch</h1>
        <div class="result-grid">
          {results && results.map((result,idx)=>{
            return <div className="result-card">
              <div className="result-image-header">
              <img  src={result.img} alt={result.title+idx} />
              </div>
              <div className="card-body">
                <h2 className="title">{result.title}</h2>
                <p className="price">{result.price}</p>
              </div>
            </div>
          })}
        </div>
     </section>
     
    </div>
  );
}

export default App;
