import React, {useState}from 'react'
import ClosetLayout from '../layouts/ClosetLayout'

function ApiTrial() {
  const [task, setTask] = useState([]);
  async function getDBData() {
    const url = 'http://localhost/HelloLavarel/public/api/tasks';
    const response = await fetch(url);
    const taskObj = await response.json();
    
    setTask(taskObj);
    // console.log(taskObj);  // (6) [{…}, {…}, {…}, {…}, {…}, {…}] return前是已經打開ㄉ
  }
  getDBData();
  return (
    <ClosetLayout isActive="穿搭">
      <div style={{ paddingTop: '92px' }}></div>
      {task.map((task, idx) => <div key={idx}>{task.id}, {task.title}, {task.details}</div>)}
    </ClosetLayout>
  )
}

export default ApiTrial