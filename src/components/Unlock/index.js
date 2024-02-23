import {useState} from 'react'
import {MainContainer, ImageOf, Para, Button} from './styledComponents'

const lock = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
const unlock = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Unlock = () => {
  const [initialVal, setVal] = useState(false)

  const lockAndUnlock = () => {
    setVal(prevState => !prevState)
  }
  const res = initialVal ? 'Lock' : 'Unlock'
  const resImg = initialVal ? unlock : lock
  const resP = initialVal ? 'Unlocked' : 'Locked'
  const altOf = initialVal ? 'unlock' : 'lock'

  return (
    <MainContainer>
      <ImageOf src={resImg} alt={altOf} />
      <Para>Your Device is {resP}</Para>
      <Button type="button" onClick={lockAndUnlock}>
        {res}
      </Button>
    </MainContainer>
  )
}

export default Unlock
