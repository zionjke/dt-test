import Wrapper from "../../components/Wrapper";
import {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import { addPostTC } from "../../store/posts/thunks";
import  Router  from "next/router";
import styles from '../../styles/NewPost.module.scss'

const NewPost = () => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');

    const onAddNewPostTitle = (e:ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.currentTarget.value)
    }

    const onAddNewPostBody = (e:ChangeEvent<HTMLTextAreaElement>):void => {
        setBody(e.currentTarget.value)
    }

    const handleClickAddPost = ():void => {
        if(title === '') {
            alert("Enter the title")
        } else if(body === '') {
            alert("Enter the text")
        } else {
            dispatch(addPostTC(title,body))
            setTitle("")
            setBody("")
            Router.push('/')
        }
    }

    return(
        <Wrapper title={'Create new post'}>
            <div className={styles.post__form}>
                <input type="text" value={title} onChange={onAddNewPostTitle} placeholder={'Title'}/>
                <textarea value={body} onChange={onAddNewPostBody} placeholder={'Text'}></textarea>
                <button onClick={handleClickAddPost}>Add New post</button>
            </div>
        </Wrapper>
    )
}

export default NewPost
