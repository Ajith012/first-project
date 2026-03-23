import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Search(){
    const [keyword,setKeyword]=useState(" ");
    const navigate= useNavigate();
    const searchhandler=()=>{
        navigate('/search?keyword='+keyword)
    }
    return <div className="input-group" style={{display:"flex"}}>
          <input
            type="text"
            id="search_field"
            onChange={(e)=>setKeyword(e.target.value)}
            className="form-control"
            onBlur={searchhandler}
            placeholder="Enter Product Name ..."
            style={{
              padding:"8px",width:"300px",height:"8px",marginRight:"px",display:"flex",borderRadius:"10px"
            }}
          />
          <div className="input-group-append" >
            <button  onClick={searchhandler} id="search_btn" className="btn" style={{height:"26px" ,borderRadius:"5px"}}>
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
}