import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

export const AnimationExample = () => (
  <>
    <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
      <h1 style={{fontSize: '70px'}}>Animate</h1>
    </Animate>
    
    <AnimateKeyframes
      play
      iterationCount="infinite"
      keyframes={["color: red", "color: blue", "color: green"]}
      duration={3}
    >
      <h1 style={{fontSize: "50px"}}>React simple animate with keyframes</h1>
    </AnimateKeyframes>
    
    <AnimateGroup play  >
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} duration={3} sequenceIndex={0}>
        <p style={{fontSize:'35px'}}>First</p>
      </Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} duration={3} sequenceIndex={4}>
        <p style={{fontSize:'35px'}}>Second</p>
      </Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} duration={3} sequenceIndex={8}>
        <p style={{fontSize:'35px'}}>Third</p>
      </Animate>
    </AnimateGroup>
  </>
);