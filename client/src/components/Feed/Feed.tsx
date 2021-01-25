import React, { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";
import IFeedData from "../../interfaces/IDataFeed";
import "./Feed.css";
import "../../index.css";

interface IComments {
  post_id: number;
  text: string;
  createdAt: string;
}

const Feed: React.FC<IFeedData> = (props: IFeedData) => {
  const [insertPost, setInserPost] = useState("");
  const [posts, setPosts] = useState<IFeedData[]>([]);
  const [comments, setComments] = useState<string[]>([]);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    Axios.get<IFeedData[]>("http://localhost:3000/listAllPosts")
      .then((responsePost) => {
        Axios.get<IComments[]>("http://localhost:3000/listAllComments").then(
          (responseComment) => {
            setComments(responseComment.data as any);
            setPosts(
              (responsePost.data as IFeedData[]).map((post) => {
                const commentsByIdPost = (responseComment.data as IComments[]).filter(
                  (comment) =>
                    comment?.post_id?.toString?.() === post?.id?.toString?.()
                );
                return {
                  ...post,
                  comments: commentsByIdPost,
                };
              })
            );
          }
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {});
  }, []);

  React.useEffect(() => {
    setComments(posts.map(() => ""));
  }, [posts]);

  const addPost = () => {
    if(insertPost != ""){
      Axios.post("http://localhost:3000/addPost", {
        text: insertPost,
      })
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else{
      alert("write a post")
    }
  
  };

  const addComment = (postId: number, comment: string) => () => {
    
    Axios.post("http://localhost:3000/addComments", {
      text: comment,
      post_id: postId,
    })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onPostChange = (event: any) => {
    setInserPost(event.target.value);
  };

  const onCommentChange = (indexPost: number) => (event: any) => {
    const commentsChanged = comments.map((comment, indexComment) =>
      indexPost === indexComment ? (event.target.value as string) : comment
    );

    setComments(commentsChanged);
  };

  return (
    <div className="feedContainer">
      <div className="feedContent">
        {isAuthenticated && (
          <div className="feedContent">
            <img src={user.picture} className="userPicture" alt={user.name} />
            <h1> Welcome {user.name} </h1>
            <h2>{user.email}</h2>
            <h2>Add a new post</h2>

            <TextField
              multiline
              label="Add Post"
              variant="filled"
              value={insertPost}
              onChange={onPostChange}
              style={{
                marginBottom: "20px",
                backgroundColor: "#e2e2e2",
              }}
            />

            <Button variant="contained" onClick={addPost} color="primary">
              Post
            </Button>

            {posts
              .slice()
              .sort(
                (
                  { createdAt: postA_createdAt_Str },
                  { createdAt: postB_createdAt_Str }
                ) => {
                  const postA_createdAt = new Date(postA_createdAt_Str ?? "");
                  const postB_createdAt = new Date(postB_createdAt_Str ?? "");
                  return (
                    +(postA_createdAt < postB_createdAt) -
                    +(postA_createdAt > postB_createdAt)
                  );
                }
              )
              .map((post, indexPost) => (
                <div className="feedContent" key={post.id}>
                  <h2>{post.text}</h2>
                  <p>{post.createdAt?.toString().substr(0, 10)}</p>
                  {(post.comments as IComments[])
                    .slice()
                    .sort(
                      (
                        { createdAt: commentA_createdAt_Str },
                        { createdAt: commentB_createdAt_Str }
                      ) => {
                        const commentA_createdAt = new Date(
                          commentA_createdAt_Str ?? ""
                        );
                        const commentB_createdAt = new Date(
                          commentB_createdAt_Str ?? ""
                        );
                        return (
                          +(commentA_createdAt < commentB_createdAt) -
                          +(commentA_createdAt > commentB_createdAt)
                        );
                      }
                    )
                    .map((comment) => (
                      <div className="commentsContainer">
                        <p>{comment.text}</p>
                        <p>{comment.createdAt.toString().substring(0, 10)}</p>
                      </div>
                    ))}

                  <TextField
                    multiline
                    label="Add a comment"
                    variant="filled"
                    value={comments[indexPost]}
                    onChange={onCommentChange(indexPost)}
                    style={{
                      marginBottom: "20px",
                      backgroundColor: "#e2e2e2",
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "50%" }}
                    onClick={addComment(post.id, comments[indexPost])}
                  >
                    Comment
                  </Button>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
