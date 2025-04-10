import { useState } from 'react'

// const Hello = (props) => {
// // 可以传入，因为props是一个对象，运用点运算符
// // props = {
// //   name: 'Arto Hellas',
// //   age: 35,
// // }

// // const { name, age } = props
// // 解构方法

// // 函数中定义函数
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - props.age
//   }
//   // const bornYear = () => new Date().getFullYear() - age
//   // 去除大括号和return

//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>

//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }
// // 函数中定义函数

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />

//     </>
//   )
// }
// 一个函数
// 需要被jsx编译
// () => (
//   <div>
//   <p>Hello world</p>
// </div>
// )
// ECMAScript 6，也称为ES6。
// 定义该组件的函数可以包含任何种类的JavaScript代码。
// 把你的组件修改成如下样子，
// 观察控制台中发生了什么。


// import { useState } from 'react'

// const App = () => {

//   const [ counter, setCounter ] = useState(0)
//   // useState 创建空间
//   // 该函数调用将state添加到组件中，并将其初始化为0值。
//   // 自动解构
//   setTimeout(
//     () => setCounter(counter + 1),  // 设置值
//     // 在调用setTimeout函数一秒钟后被调用
//     1000
//   )

//   return (
//     <div>{counter}</div>
//   )
// }
// // 每次都会更新
// // 因为涉及到了状态更新


// import { useState } from 'react'
// const App = () => {
//   const [ counter, setCounter ] = useState(0)


//   const handleClick = () => {
//     console.log('clicked')
//     setCounter(counter+1)
//   }

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={handleClick}>
//         plus
//       </button>
//       <button onClick ={() => {setCounter(0)}}>
//         reset
//       </button>
//     </div>
//   )
// }
// Event handler
// 无论如何，让我们把事件处理程序分成独立的函数。
// then
// onClick属性的值是一个变量，包含对一个函数的引用。



// import { useState } from 'react'
//   const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }
//   const Button = (props) => {
//     return (
//       <button onClick={props.onClick}>
//         {props.text}
//       </button>
//     )
//   }

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)

//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter}/>

//       <Button
//         onClick={increaseByOne}
//         text='plus'
//       />
//       <Button
//         onClick={setToZero}
//         text='zero'
//       />
//       <Button
//         onClick={decreaseByOne}
//         text='minus'
//       />
//     </div>
//   )
// }

// Passing state to child components
// 缩小组件
// 提升共同状态

// const App = () => {
//   const initClicks = {
//     left: 0,
//     right: 0
//   }
//   const [clicks, setClicks] = useState(initClicks)

//   const handleLeftClick = () => {
//     const newClicks = {
//       left: clicks.left + 1,
//       right: clicks.right
//     }
//     setClicks(newClicks)
//   }

//   const handleRightClick = () => {
//     const newClicks = {
//       left: clicks.left,
//       right: clicks.right + 1
//     }
//     setClicks(newClicks)
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }

//复杂状态
// const handleLeftClick = () =>
//   setClicks({ ...clicks, left: clicks.left + 1 })
// const handleRightClick = () =>
//   setClicks({ ...clicks, right: clicks.right + 1 })
// { ...clicks, right: clicks.right + 1 }
// 新对象
// const handleLeftClick = () => {
//   clicks.left++
//   setClicks(clicks)
// }
// 不可以
// 然而，在React中是禁止直接改变状态的
// 因为它可能导致意想不到的副作用。
// 改变状态必须始终通过将状态设置为一个新的对象来完成。
// 如果前一个状态对象的属性没有改变，它们需要简单地复制，
// 这可以通过将这些属性复制到一个新的对象中，
// 并将其设置为新的状态来完成。

// point4 = {a: 0, b: 0, c: 0, d: 0}
// {...point4}
// {a: 0, b: 0, c: 0, d: 0}
// {...point4,d:point4.d+1}
// {a: 0, b: 0, c: 0, d: 1}

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     //返回一个数组的新副本
//     setLeft(left + 1)
//   }
//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }
//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }

// 实参
// 形参
// 超形参


// const App = () => {
//   const [value, setValue] = useState(10)
//   const setToValue = (newValue) => () => {
//     console.log('value now', newValue)  // print the new value to console
//     setValue(newValue)
//   }
//   // 相当于 return 一个 function
//   // 不然 return 一个 undefine

//   return (
//     <div>
//       {value}
//       <button onClick={setToValue(1000)}>thousand</button>
//       <button onClick={setToValue(0)}>reset</button>
//       <button onClick={setToValue(value + 1)}>increment</button>
//     </div>
//   )
// }

import Note from './components/Note'
const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note} />
        )}
        {/* 必须用key */}
      </ul>
    </div>
  )
}



export default App