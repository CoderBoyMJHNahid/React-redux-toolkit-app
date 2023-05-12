import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {MdDeleteForever} from "react-icons/all.js";
import {removeUser} from "../stores/slices/userSlice"


const DisplayName = () => {

    const dispatch = useDispatch();

    const data = useSelector((state)=>{
        return state.users;
    })

    const DeleteUser=(id)=>{
        dispatch(removeUser(id))
    }   
    
    const Wrapper = styled.section`
            li{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            border-bottom: 1px solid #eee;
            
            &:first-child{
                border-top: 1px solid #eee;
            }
            }

            .btn-delete{
            background-color: transparent;
            border: 0;
            color: #fff;
            }
    `

  return (
    <Wrapper>
        {
            data.map((elem,index)=>{
                return <li key={index}>{elem}
                <button className=" btn-delete" onClick={()=> DeleteUser(index)}>
                    <MdDeleteForever className="delete-icon"/>
                </button>
          </li>
            })
        }
        
    </Wrapper>
  )
}

export default DisplayName;