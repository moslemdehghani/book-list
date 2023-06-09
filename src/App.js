
import { useState , useEffect } from 'react';

import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import View from './view';

const getDataFromLs = () => {
  let data = localStorage.getItem("books")
  if(data){
    return JSON.parse(data)
  }else{
    return []
  }
}
function App() {
  const [books , setbooks] = useState(getDataFromLs())
 const [title , setTitle] = useState("");
 const [author , setAuthor] = useState("");
 const [number , setNumber] = useState("");

 

 const handleSubmit = (e) => {
      e.preventDefault();
      let book = {
        title,
        author,
        number
      }
      setbooks([...books,book])
 }

 const deletBook = (number) => {
    const filterBooks = books.filter((element , index)=>{
      return element.number !== number
    })
    setbooks(filterBooks)
 }

useEffect (()=>{
  localStorage.setItem('books' , JSON.stringify(books))
}, [books])

  return (
    <div className="wrapper">
      <h1>لیست کتاب ها</h1>
      <p>کتاب جدید خود را  اضافه کنید.</p>
      <div className="main">
        <div className="form-container">
          <form  autoComplete="off" onSubmit={handleSubmit}>
              <div className="forn-group">
                <lable htmlFor="">
                    عنوان
                </lable>
                <input type="text" className="form-control"  required 
                onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="forn-group">
                <lable htmlFor="">
                    نویسنده
                </lable>
                <input type="text" className="form-control"  required
                onChange={(e) => setAuthor(e.target.value)}
                 />
              </div>
              <div className="forn-group">
                <lable htmlFor="">
                    شماره #
                </lable>
                <input type="text" className="form-control"  required
                onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                  <button type="submit" className="btn btn-success btn-md mt-4">
                    افزودن
                  </button>
              </div>
          </form>
        </div>
        <div className="view-container">
          {
            books.length > 0 &&
            <>
            <div className="table-responsive w-100">
            <table className="table">
                <thead>
                  <tr>
                    <th>شماره</th>
                    <th>عنوان</th>
                    <th>نویسنده</th>
                    <th>حذف</th>
                  </tr>
                </thead>
                <tbody>
                <View books={books} deletBook={deletBook} />
                </tbody>
            </table>
          </div>
          <button className='btn btn-danger btn-sm' onClick={()=> setbooks([])}>حذف همه</button>
          </>
          }
          {
            books.length < 1 && <div>کتابی توی کتاب خونه وجود ندارد</div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
