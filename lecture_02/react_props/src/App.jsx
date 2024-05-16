import './App.css'
import Card from './Card'
import Profile from './Profile'
import Profile1 from './Profile1'
import ProfileCard from './ProfileCard'

function App() {
  const person = {
    name: 'Bojan',
    isPrivate: false,
    age: 25,
    avatar_img: 'https://avatars.githubusercontent.com/u/76458601?v=4',
    width: 60,
    height: 60,
  }

  return (
    <>
      {/* ProfileCard is a parent. */}
      {/* jas pushtam JSX kode preku child so Profile1 komponenta. */}
      <ProfileCard>
        {/* Profile1 is a child */}
        <Profile1
          name={person.name}
          isPrivate={person.isPrivate}
          age={person.age}
          avatar_img={person.avatar_img}
          width={person.width}
          height={person.height}
        />
      </ProfileCard>
      {/* od Parent App.jsx mu pushtam podatoci na Profile1 */}
      <Profile1
        name={'Nov Imenjak Bojan'}
        isPrivate={false}
        age={28}
        avatar_img={'slika'}
        width={40}
        height={40}
      />
      <Profile1
        name={person.name}
        isPrivate={person.isPrivate}
        age={person.age}
        avatar_img={person.avatar_img}
        width={person.width}
        height={person.height}
      />

      <Profile1 name={'Vane borisov'} isPrivate={true} age={''} avatar_img={''} />

      <Profile1 name={'Hristijan Petreski'} isPrivate={false} age={''} avatar_img={''} />

      {/* moze i da pushtime po vrednosti. */}
    </>
  )
}

export default App
{
  /* <Header title='SEMOS' subtitle='Education' /> */
}

{
  /* <Card
        isAvailable={true}
        price='$4,138'
        subtitle='Lagomandra'
        img='https://a0.muscache.com/im/pictures/miso/Hosting-801458664154162658/original/d9e9c8c4-63a0-4c24-9863-2ee5db2cd660.jpeg?im_w=720'
        title='Sithonia, Greece'
        availableDates='Jun 16 – 23'
      /> */
}
