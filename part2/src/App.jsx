import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'
// 很精彩的实践

const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  // 效果钩子
  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])


  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() > 0.5,
    }
    // id 自动加入
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }



  const toggleImportanceOf = id => {
    // 2. 从本地状态中找到对应 id 的笔记对象
    const note = notes.find(n => n.id === id);
  
    // 3. 创建新对象，反转 important 属性
    const changedNote = { ...note, important: !note.important };
  
    // 4. 发起 PUT 请求更新服务器数据
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))})
      .catch(error => {
          alert(
            `the note '${note.content}' was already deleted from server`
          )
          setNotes(notes.filter(n => n.id !== id))
        })
  };

  // 新增处理输入变化的函数
  const handleNoteChange = (event) => {
    setNewNote(event.target.value); // 更新 newNote 状态
  };


  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)


  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
            // 自己写的回调函数
            // () = > 
          />
        )}
      </ul>

      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App