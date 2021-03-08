import React from 'react'
import { OkImg, InnerWrapper, Titulo, Wrapper, Divisor, InnerWrapper1, OkText } from './styles'

export default function Text() {
  return (
    <Wrapper>
      <InnerWrapper>
        <h2>Detail Info</h2>
        <Divisor />
        <h2>Client Name</h2>
        <p>Michel Groch</p>
        <h2>Date</h2>
        <p>April, 2015</p>
        <h2>Categoty</h2>
        <p>Feature-Length Film</p>
      </InnerWrapper>
      <InnerWrapper1>
        <p>For instance, whenever I go back to the guest house during the morning to copy out the contract, these gentlemen are always still sitting</p>
        <p>Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.
        “How about if I sleep a little bit longer and forget all this nonsense”, he thought, but that was something he was unable to do because he was used to
          sleeping on his right, and in his present state couldn’t get into that position.</p>
        <p>For instance, whenever I go back to the guest house during the morning to copy out the contract, these gentlemen are always still sitting there eating their breakfasts.
        But who knows, maybe that would be the best thing for me. If I didn’t have my parents to think about I’d have given in my notice a long time ago,
          I’d have gone up to the boss and told him just what I think, tell him everything I would, let him know just what I feel.</p>
        <OkText>
          <OkImg src='./img/ok.png' />
          <a>Duis aute irure dolor in reprehenderit</a>
        </OkText>
        <OkText>
          <OkImg src='./img/ok.png' />
          <a>Excepteur sint occaecat cupidatat</a>
        </OkText>
        <OkText>
          <OkImg src='./img/ok.png' />
          <a>Dignissimos ducimus qui blanditiis</a>
        </OkText>
      </InnerWrapper1>
    </Wrapper>
  )
}
