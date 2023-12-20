import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import animationData from './assets/146283-data-visualization.json'
import { useRef } from 'react'

function App() {

  const dataRef = useRef<LottieRefCurrentProps>(null)

  return (
    <div className="min-h-screen flex items-center justify-center text-[#c94c16] font-poppins">
      <div>
        <h1 className='lg:mx-24 mb-24 mr-48'>We help you track your data, through amazing, modern visualizations.</h1>
      </div>
      <Lottie
        lottieRef={dataRef}
        loop={false}
        animationData={animationData}
      />
    </div>

  )
}

export default App
