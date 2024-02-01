
/*
  Como quiero que quede mi header?
  Me gustaria que sea sensillo donde pueda poner mi nombre y apellido y alguna boludes y evitar poner sofware developer o algo tan simple necesito destacar, algo mas informal
*/

const Header = () => {

  const chars = ['w','e','b','d','e','v','e','l','o','p','e','r'];

  return (
    <header className='flex flex-col h-screen justify-center items-start'>
      <h1 className='text-6xl font-semibold text-wrap uppercase'>Web</h1>
      <h1 className='text-6xl font-semibold text-wrap uppercase'>Developer</h1>
      <p>Soy un desarrollador web Argentino. Tengo pocos años de experiencia en el rubro pero con muchas ganas crecer.</p>
    </header>
  )
}

export default Header