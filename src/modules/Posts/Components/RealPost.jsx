import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../slices/PostSlice';

const RealPost = function(){


  const dispatch = useDispatch();
  const data = useSelector(state => state.realpost.posts)
  
    useEffect(()=>{
      dispatch(fetchPost())
    }, [dispatch])
   
    


  
    
  return(
    <div className='wrap'>
        <h1>Posts:</h1>
        <div className="box">
        <ul>
          {
            data.map(post => <li key={post.id}>
                {post.title}
                <div className='bBody'>{post.body}</div>
            </li>)

          }
        </ul>
        </div>
          
      </div>
  )
}

export default RealPost