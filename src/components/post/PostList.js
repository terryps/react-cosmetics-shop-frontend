import PostItem from "./PostItem";
import styles from "./PostList.module.css";

function PostList(props) {
    return (
        <div className={styles.container}>
            <ul className={styles.ul} style={{gridTemplateColumns: `repeat(${props.postsPerPage/10}, 1fr)`}}>
                {props.currentPosts.map(post => (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        link={post.link}
                        image={post.image}
                        title={post.title}
                    />
                ))}
            </ul>
        </div>
    );
}

export default PostList;