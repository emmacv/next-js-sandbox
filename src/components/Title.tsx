
const Title = () => {

  const backgroundColor = typeof window !== 'undefined' ? 'red' : 'blue';

  console.log(typeof window !== 'undefined' ? 'client' : 'server')

  return (
    <div style={{ backgroundColor }}>Title</div>
  )
}

export default Title
