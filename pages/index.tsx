import Wrapper from "../components/Wrapper";
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from "react";
import {deletePostTC, getPostsTC, updatePostTC} from "../store/posts/thunks";
import { selectPostsItems } from "../store/posts/selectors";
import {NextPageContext} from "next";
import {postsAPI} from "../services/api/postsAPI";
import {Post} from "../interfaces/post";
import PostBlock from "../components/PostBlock";


interface PostsPageProps {
    posts: Post[]
}

 const Main = ({posts: serverPosts}:PostsPageProps) => {

    const dispatch = useDispatch()
    const posts = useSelector(selectPostsItems)

     const onDeletePost = (id:number):void => {
        dispatch(deletePostTC(id))
     }

     const onUpdatePost = (id:number,title:string,body:string):void => {
        dispatch(updatePostTC(id,title,body))
     }

    useEffect(() => {
        if(!serverPosts) {
            dispatch(getPostsTC())
        }
    },[])

  return (
    <Wrapper title={"Main page"}>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                {
                    posts.map(post => (
                            <PostBlock key={post.id}
                                       onDeletePost={onDeletePost}
                                       onUpdatePost={onUpdatePost}
                                       {...post}/>
                    ))
                }
            </div>
    </Wrapper>
  )
}

Main.getInitialProps = async ({req}:NextPageContext) => {
    if(!req) {
        return {
            posts:null
        }
    }

    const serverPosts = await postsAPI.fetchPosts()
    return {
        serverPosts
    }
}

export default Main
