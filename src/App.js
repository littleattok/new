import logo from './logo.svg';
import './App.css';

function Header(props) {          //대문자로 정의해야함
  console.log(props);
  return (
    <header>
      <h1><a href="/">{props.title}</a></h1>
    </header>
  )
}


function Nav() {
  return (
    <nav>
      <ol>
        <li><a href="/read/1">html</a></li>
        <li><a href="/read/1">css</a></li>
        <li><a href="/read/1">js</a></li>
      </ol>
    </nav>
  )
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}, WEB!
    </article>
  )
}
function App() {
  return (
    <div>
      <Header title="My React App"></Header>
      <Nav></Nav>
      <Article title="WWWelcome" body="hello"></Article>
    </div>
  );
}

export default App;
