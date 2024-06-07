
import { useEffect, useState } from 'react'
import './App.css'

function App() {


  const [data , setData] = useState([])

  console.log(data)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setData(json))
  }, [])



  return (
    <>
      <div className="card flex flex-wrap gap-7">
        {
          data.map((item)=>{
            return(
              <div className="singelUser w-[300px] h-[400px] bg-[#704264] rounded-[15px] p-5 flex items-center flex-col gap-5">
          <div className="img_col w-[200px] h-[200px] rounded-full overflow-hidden">
            <img src="https://i.ibb.co/GxGq5fL/291234-Copy.jpg" alt="id-img" />
          </div>
          <div className="user_text">
            <h1 className='text-[20px] font-semibold text-[#FDFFC2]'>id : {item.id}</h1>
            <p className='text-[17px] font-bold text-[#FDFFC2] py-2'>Name : {item.name}</p>
            <p className='text-[16px] font-medium text-[#FDFFC2]'>Email : {item.email}</p>
          </div>
        </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
