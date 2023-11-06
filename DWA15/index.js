ReactDOM.render(<App />, document.querySelector("#root"));
function App() {
  return (
    <div className="container">
      <div className="business-card">
        <div className="card-content">
          <div className="header">
            <h1 className="title">Tiffany September</h1>
            <p className="subtitle">Junior Software Developer</p>
          </div>
          <div className="contact-info">
            <p>Email: tiffanyseptember30@gmail.com</p>
            <p>Phone: 071 841 6489</p>
          </div>
        </div>
      </div>
    </div>
  );
}
