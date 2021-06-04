
import logo from './images/ironhack-logo.svg';
import menu from './images/menu-top.svg';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';


import './App.css';

const statement = <h1>Say Hello to ReactJS</h1>;

const goals =  <h2>You will learn how to use <br></br> the most popular frontend library, <br></br> and become a super Ninja developer.</h2>

const btn = <p class="btn">Awesome!</p>
 
 
function App() {
  return (
    <div className="App">
      <main>
      <header class="header">
            <img src={logo} className="Ih-logo" alt="logo" />
            <img src={menu} className="Menu-logo" alt="logo" />
      </header>
      
      {statement}
      {goals}
      {btn}
      </main>

      <div class="cards">
        <section class="card">
          <img src={icon1} className="icon1" alt="icon1" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs</p>
        </section>
        <section class="card">
          <img src={icon2} className="icon1" alt="icon2" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state</p>
        </section>
        <section class="card">
          <img src={icon3} className="icon1" alt="icon3" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's</p>
        </section>
        <section class="card">
          <img src={icon4} className="icon1" alt="icon4" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers</p>
        </section>
      </div> 
    </div>

    
  );
}
 
export default App;