import 'bootstrap/dist/css/bootstrap.min.css';

function importAll(r) {
  return r.keys().map((item, index) => r(item));
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function App() {
  return (
    <div className="container-sm pb-5">
      {
        images.map(
          img=>
          <img src={img} alt={img} key={img} title={img} className="w-100 col-lg-10 py-4"/>
        )
      }
    </div>
  );
}

export default App;
