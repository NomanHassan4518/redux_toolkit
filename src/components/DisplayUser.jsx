import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import styled from "styled-components";
import {MdDeleteForever} from 'react-icons/md'
import { removeUser } from '../Store/Slice/UserSlice';



const DisplayUser = () => {
    let data = useSelector((state) => {
        return state.user
    })
    let dispatch=useDispatch();
    // console.log(data);
    const deleteUser=(index)=>{
        dispatch(removeUser(index))
    }
    return <Wrapper>
        {data.length > 0 ? (data.map((user, index) => (
            <li className='name' key={index}>
                {user}
                <button className='btn-delete' onClick={()=> deleteUser(index)}>
                    <MdDeleteForever className='delete-icon'/>
                </button>
                </li>

        ))) : <h1>No Data Found</h1>}
    </Wrapper>

}

const Wrapper = styled.section`
.name{
    text-align:start;
    margin-bottom:18px;
    display:flex;
    align-items:center;
    justify-content: space-between;
}

`

export default DisplayUser
