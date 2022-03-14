
import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import NewsComponent from './Components/NewsComponent';
import { Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

// export default class App extends Component {

//   state = {
//     progress : 0
//   }

//   setProgress= (progress) => {
//     this.setState({progress:progress});
//   }

//   pageSize=6;
//   render() {
//     return (
//       <div>
//         <LoadingBar
//         color='#f11946'
//         progress={this.state.progress}
//       />
//         <NavBar/>
//         <Routes>
//           <Route path="/" element={<NewsComponent setProgress={this.setProgress} key='general' pageSize={this.pageSize} country='in' category='general'/>} />
//           <Route path="/business" element={<NewsComponent setProgress={this.setProgress} key='business' pageSize={this.pageSize} country='in' category='business'/>} />
//           <Route path="/entertainment" element={<NewsComponent setProgress={this.setProgress} key='entertainment' pageSize={this.pageSize} country='in' category='entertainment'/>} />
//           <Route path="/health" element={<NewsComponent setProgress={this.setProgress} key='health' pageSize={this.pageSize} country='in' category='health'/>} />
//           <Route path="/sports" element={<NewsComponent setProgress={this.setProgress} key='sports' pageSize={this.pageSize} country='in' category='sports'/>} />
//           <Route path="/science" element={<NewsComponent setProgress={this.setProgress} key='science' pageSize={this.pageSize} country='in' category='science'/>} />
//           <Route path="/technology" element={<NewsComponent setProgress={this.setProgress} key='technology' pageSize={this.pageSize} country='in' category='technology'/>} />
//         </Routes>
//       </div>
//     )
//   }
// }


const App = () => {
  const pageSize = 6;
  
  const [progress,setProgress] = useState(0);


  return(
    <>
      <div>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <NavBar/>
        <Routes>
          <Route path="/" element={<NewsComponent setProgress={setProgress} key='general' pageSize={pageSize} country='in' category='general'/>} />
          <Route path="/business" element={<NewsComponent setProgress={setProgress} key='business' pageSize={pageSize} country='in' category='business'/>} />
          <Route path="/entertainment" element={<NewsComponent setProgress={setProgress} key='entertainment' pageSize={pageSize} country='in' category='entertainment'/>} />
          <Route path="/health" element={<NewsComponent setProgress={setProgress} key='health' pageSize={pageSize} country='in' category='health'/>} />
          <Route path="/sports" element={<NewsComponent setProgress={setProgress} key='sports' pageSize={pageSize} country='in' category='sports'/>} />
          <Route path="/science" element={<NewsComponent setProgress={setProgress} key='science' pageSize={pageSize} country='in' category='science'/>} />
          <Route path="/technology" element={<NewsComponent setProgress={setProgress} key='technology' pageSize={pageSize} country='in' category='technology'/>} />
        </Routes>
      </div>
      
    </>
  )

}

export default App


