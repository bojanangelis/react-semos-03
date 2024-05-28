import Header from './components/Header'
import ToDoList from './components/ToDoList'

function App() {
  // za doma
  // validations na addTodo funkcija i updateTodo
  // ako is checked backgroundot da e zelen i togash da ima kopche delete trash icon.
  // text-white koga e checked i da imam crvena ikonka deleted kopche.
  // handleDeleteTodo funkcijata da ja napravite.

  // da imate history od desna strana
  // ako jas gi izbrisham taskovite da odat vo history deleted.
  // cancel button ako ne sakame da go editirame inputot
  // znaci koga ke kliknam na edit sakam inputot da mi bide popolnet so inicijalnata vrednost
  // na primer ako kliknam Learn React sakam na edit da ne e prazen string nego Learn React da pishuva i nego da go izmenam

  return (
    <div className='bg-sky-400 h-screen flex flex-col items-center pt-56'>
      <Header />
      <ToDoList />
    </div>
  )
}

export default App
