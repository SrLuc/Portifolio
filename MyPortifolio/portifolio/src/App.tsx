
import Apresentation from "./components/apresentation"
import Me from "./components/me"
import Skill from "./components/skills"
import Cv from "./components/cv"
import MyServices from "./components/myServices"
import More from "./components/more"

function App() {

  return (
    <div>
     <Apresentation/>
     <Me/>
     <Skill/>
     <Cv/>
     <MyServices children/>
     <More/>
    </div>
  )
}

export default App
