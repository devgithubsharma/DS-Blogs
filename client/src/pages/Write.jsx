import React,{ useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function Write () {
  const [value, setValue] = useState('');
  return (
    <div className='write'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContent">
        <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span><b> Visibility: </b> Public
            </span> 
          <input style={{display:`none`}} type='file' id='file' name=''></input>
          <label className='file' htmlFor='file'>Upload file</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        
        <div className="item">
          <h1>Category</h1>

          <div className='cats'>
          <input type="radio" name='cat' value="art" id='art' />
          <label  htmlFor='art'>Art</label>
          </div>

          <div className='cats'>
          <input type="radio" name='cat' value="sports" id='sports' />
          <label  htmlFor='sports'>Sports</label>
          </div>

          <div className='cats'>
          <input type="radio" name='cat' value="technology" id='technology' />
          <label  htmlFor='technology'>Technology</label>
          </div>

          <div className='cats'>
          <input type="radio" name='cat' value="food" id='food' />
          <label  htmlFor='food'>Food</label>
          </div>

          <div className='cats'>
          <input type="radio" name='cat' value="foriegn_affairs" id='foriegn_affairs' />
          <label  htmlFor='foriegn_affairs'>Foriegn Affairs</label>
          </div>

          <div className='cats'>
          <input type="radio" name='cat' value="cinema" id='cinema' />
          <label htmlFor='cinema'>Cinema</label>
          </div>

        </div>
      </div>
    </div>
  )
}


