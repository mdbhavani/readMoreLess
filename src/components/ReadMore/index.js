import {useState} from 'react'

import {
  MainContainer,
  Heading,
  Para,
  Image,
  Paragraph,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const [data, setData] = useState(false)
  const onClickButton = () => setData(prevData => !prevData)
  const buttonText = data ? 'Read Less' : 'Read More'
  const {reactHooksDescription} = props
  console.log(reactHooksDescription)
  const content = data
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Para>Hooks are a new addition to React</Para>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Paragraph>{content}</Paragraph>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </MainContainer>
  )
}

export default ReadMore
