import Router from "../../router";

export const App = () => {
  return (
    <div id="global" className="global">
      <div className="wrapper">
        <header>header</header>
        <article>
          <Router/>
        </article>
      </div>
      <footer>footer</footer>
    </div>
  )
}