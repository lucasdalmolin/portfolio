
import Navbar from '../Navbar/Navbar'
// import { useWindowSize } from '../../hooks/useWindowSize'

const Navigation = () => {
  // const { width } = useWindowSize()

  return <Navbar />
}

export default Navigation

type Option = {
  id: string
  name: string
}

export type Options = Array< Option >