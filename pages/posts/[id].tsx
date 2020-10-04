import {Post} from "../../interfaces/post";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Wrapper from "../../components/Wrapper";
import {NextPageContext} from "next";
import {postsAPI} from "../../services/api/postsAPI";
import styles from '../../styles/PostPage.module.scss'


interface PostPageProps {
    post: Post
}

const PostPage = ({post: serverPost}:PostPageProps) => {

    const [post,setPost] = useState<Post>(serverPost);
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const data = await postsAPI.fetchPost(router.query.id)
            setPost(data)
        }
        if(!serverPost) {
            load()
        }
    },[])


    return (
        <Wrapper title={'Post page'}>
            <div className={styles.post}>
                <h1 className={styles.post__title}>{post.title}</h1>
                <p className={styles.post__text}>{post.body}</p>
            </div>
        </Wrapper>
    )

}

interface PostNextPageContent extends NextPageContext {
    query: {
        id:string
    }
}

PostPage.getInitialProps = async ({query}:PostNextPageContent) => {
    const post:Post = await postsAPI.fetchPost(query.id)
    return {
        post
    }
}

export default PostPage
