import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
// // const promise = axios.get('http://localhost:3001/notes')
// // promise.then(response => {
// //   console.log(response)
// // })
// // 或者
// // axios
// //   .get('http://localhost:3001/notes')
// //   .then(response => {
// //     const notes = response.data
// //     console.log(notes)
// //   })
// // 更可读

// axios
//   .get('http://localhost:3001/notes')
//   .then(response => {
//   const notes = response.data
//   ReactDOM.createRoot(document.getElementById('root'))
//   .render(<App notes={notes} />)
// })

// // axios究竟放哪里

ReactDOM.createRoot(document.getElementById('root')).render(<App />)