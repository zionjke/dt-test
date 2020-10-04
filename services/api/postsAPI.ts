import axios from 'axios'
import {Post, PostsState} from "../../interfaces/post";

const instance = axios.create({
    baseURL: 'https://simple-blog-api.crew.red'
})

export const postsAPI = {
    fetchPosts(): Promise<PostsState['items']> {
        return instance.get('/posts').then(({data}) => data)
    },
    fetchPost(postId): Promise<Post> {
        return instance.get(`/posts/${postId}?_embed=comments`).then(({data}) => data)
    },
    createPost(title: string, body: string): Promise<Post> {
        return instance.post('/posts', {title, body}).then(({data}) => data)
    },
    deletePost(id:number):Promise<Post> {
        return instance.delete(`/posts/${id}`)
    },
    updatePost(id:number,title:string,body:string):Promise<Post> {
        return instance.put(`/posts/${id}`,{title,body}).then(({data}) => data)
    },
    createComment(postId:number,body:string): Promise<Comment> {
        return instance.post('/comments',{postId,body}).then(({data}) => data)
    }
}
