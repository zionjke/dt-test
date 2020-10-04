import styles from '../styles/PostBlock.module.scss'
import Link from "next/link";
import {ChangeEvent, useState} from "react";
import {addPostTC} from "../store/posts/thunks";
import Router from "next/router";


interface PostBlockProps {
    title:string
    body:string
    id:number
    onDeletePost:(id:number) => void
    onUpdatePost:(id:number,title:string,body:string) => void
}

const PostBlock = ({title,body,id,onDeletePost,onUpdatePost}:PostBlockProps)=> {

    const [visiblePopup, setVisiblePopup] = useState<boolean>(false);
    const [newTitle, setNewTitle] = useState<string>('');
    const [newText, setNewText] = useState<string>('');

    const onAddNewPostTitle = (e:ChangeEvent<HTMLInputElement>): void => {
        setNewTitle(e.currentTarget.value)
    }

    const onAddNewPostBody = (e:ChangeEvent<HTMLTextAreaElement>):void => {
        setNewText(e.currentTarget.value)
    }

    const handleClickUpdatePost = ():void => {
        if(newTitle === '') {
            alert("Enter the title")
        } else if(newText === '') {
            alert("Enter the text")
        } else {
            onUpdatePost(id,newTitle,newText)
            setVisiblePopup(false)
        }
    }

    const handleClickOpenPopup = ():void => {
        setVisiblePopup(true)
    }

    const handleClickClosePopup = ():void => {
        setVisiblePopup(false)
    }

    const handleClickDeletePost = ():void => {
        if(window.confirm('Are yo sure?')) {
            onDeletePost(id)
        }
    }

    return (
            <div className={styles.post}>
                <button onClick={handleClickDeletePost} className={styles.post__delBtn}>X</button>
                <Link href={`/posts/[id]`} as={`/posts/${id}`}>
                    <h3 className={styles.post__title}>{title}</h3>
                </Link>
                <p className={styles.post__text}>{body}</p>
                <button onClick={handleClickOpenPopup}>Update post</button>
                {
                    visiblePopup &&
                    <div className={styles.post__popup}>
                        <button onClick={handleClickClosePopup} className={styles.post__popup__closeBtn}>Close Popup</button>
                        <input type="text" value={newTitle} onChange={onAddNewPostTitle} placeholder={'Title'}/>
                        <textarea value={newText} onChange={onAddNewPostBody} placeholder={'Text'}></textarea>
                        <button onClick={handleClickUpdatePost}>Update post</button>
                    </div>
                }
            </div>
    )
}

export default PostBlock
