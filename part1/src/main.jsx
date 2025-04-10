import ReactDOM from 'react-dom/client'

import App from './App'

// let counter = 1
// ReactDOM.createRoot(
//   document.getElementById('root')
// ).render(
//   <App counter={counter} />
// )
// counter += 1
// 这样无法重新渲染

// let counter = 1

// const refresh = () => {
//   ReactDOM.createRoot(
//     document.getElementById('root')
//   ).render(
//     <App counter={counter} />
//   )
// }
// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)
// //这样可以
// // 重复调用render方法并不是重新渲染组件的推荐方式

// ReactDOM.createRoot(
//   document.getElementById('root')
// ).render(<App />)

// 这里使用useState

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <App notes={notes} />
)