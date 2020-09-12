import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getTopStories, getStoryById, getShowStories, getJobStories, getAskStories } from './services';
// import {v1 as uuidv1} from 'uuid'
import Story from './components/Story';
// import { getAllUsers } from './services';

const App = () => {

  const [storyIds, setStoryIds] = useState([])
  // const [stories, setStories] = useState([])

  // useEffect(() => {
  //   getTopStories().then(res => {
  //     res.data.slice(0,10).forEach(id => {
  //       getStoryById(id).then(res => {
  //        setStories(prev => [...prev, res.data]) 
  //       })
  //     })
  //   })
  // }, [])

  useEffect(() => {
    getTopStories().then(res => {
      setStoryIds(res.data)
    })
  }, [])

  // useEffect(() => {
  //   storyIds.slice(0, 10).forEach(id => {
  //     getStoryById(id).then(res => {
  //       setStories(prev => [...prev, res.data])
  //     })
  //   })
  // }, [storyIds])

  return (
    <>
      {/* {stories.map(story => <p key={story.id}>{JSON.stringify(story)}</p>)} */}
      <button onClick={() => {
        // setStories([])
        getJobStories().then(res => {
          setStoryIds(res.data)
        })
      }}>JOB</button>
      <button onClick={() => {
        // setStories([])
        getShowStories().then(res => {
          setStoryIds(res.data)
        })
      }}>SHOW</button>
      <button onClick={() => {
        // setStories([])
        getAskStories().then(res => {
          setStoryIds(res.data)
        })
      }}>ASK</button>
      <br />
      {storyIds.map(id => <Story  key={id} id={id} />)}
      </>
  )
  // const [users, setUsers] = useState([])

  // getAllTodos().then(res => {
  //   setTodos(res.data) // ako nemamo niz, tj ako smo ga setovali na prazno
  //   // ako vec imamo neki niz, pa dodajemo na stari
  //   // let tmp = [...todos]
  //   // tmp.push(...tmp(res.data))
  //   // setTodos(tmp)
  // })

//   useEffect(() => {
//       getAllUsers().then(res => {
//         setUsers(res.data.data)
//       })
//   },[])

//   return (
//     <>
//     {users.map(user => <p key={user.id}>{user.email}</p>)}
//     </>
//   )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
