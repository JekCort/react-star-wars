import cn from 'classnames'
import './App.module.css';
import style from './App.module.css'
const App = () =>{
  return (
      <h1 className={cn(style.header, style.text)}>Hello</h1>
  )
}

export default App;
