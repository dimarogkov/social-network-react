import './App.css';

const App = () => {
  return (
    <div className='main'>

      <header className='header'>
        <img src='https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1.png' alt='logo' />
      </header>

      <nav className='nav'>
        <ul>
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Messages</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Music</a>
          </li>
          <li>
            <a>Setting</a>
          </li>
        </ul>
      </nav>

      <div className='content'>
        <h2>Content Block</h2>
      </div>

    </div>
  );
}

export default App;
