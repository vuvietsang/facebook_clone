import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

const Posts = () => {
  const collections = useCollection(
    query(collection(db, "post"), orderBy("timeStamp", "desc"))
  );
  const realtimePost = collections[0]?.docs;
  console.log(realtimePost);
  return (
    <div>
      {realtimePost?.map((post: any) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timeStamp={post.data().timeStamp}
          image={post.data().image}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  );
};
export default Posts;
