import { Link, Outlet } from 'react-router-dom'

export default function RootNew() {
  return (
    <>
      <div id='detail'>
        {/* Children znaci tuka pushtame deca od strani kako na primer vo route pagot imame dete od contacts */}
        {/* Ovoj Outlet ja prikazuva children elementot vo slucajov contact.jsx */}
        <Outlet />
      </div>
      <div id='sidebar'>
        <h1>Semos Academy</h1>
        <div>
          <form id='search-form' role='search'>
            <input
              id='q'
              aria-label='Search contacts'
              placeholder='Search'
              type='search'
              name='q'
            />
            <div id='search-spinner' aria-hidden hidden={true} />
            <div className='sr-only' aria-live='polite'></div>
          </form>
          <form method='post'>
            <button type='submit'>New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`/contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
