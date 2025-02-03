import JoinForm from '../components/JoinForm'
import { processJoin } from '../service/actions'

const JoinContainer = () => {
  return <JoinForm formAction={processJoin} />
}

export default JoinContainer
