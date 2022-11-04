import Container from "./Container"
import Header from "./Header"


function App() {
  
  return (
  <div id="app" style={appStyle}>
    <Header/>
    <Container/>
  </div>
  )
}

const appStyle = {
  margin: '0px',
  backgroudColor: 'red'
}

export default App
