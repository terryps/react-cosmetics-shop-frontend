import React from "react";
import PageTitle from "../components/pageTitle/PageTitle";
import PostList from "../components/post/PostList";
import usePagination from "../hooks/PaginationHook";
import Pagination from "../components/pagination/Pagination";
import reviewData from "../data/review-data.json";

function Review() {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     fetch(
    //         'https://react-cosmetics-shop-default-rtdb.asia-southeast1.firebasedatabase.app/review'
    //     ).then((response) => {
    //         return response.json();
    //     }).then((data) => {
    //         setPosts(data);
    //         console.log(data);
    //     });
    // }, []);

    const postsPerPage = 40;
    const [currentPage, setCurrentPage, currentPosts, paginate] = usePagination(reviewData, postsPerPage);

    return (
        <section>
            <PageTitle title="3ce review" />
            <PostList currentPosts={currentPosts}/>
            <Pagination
                currentPage={currentPage}
                postsPerPage={postsPerPage}
                totalPosts={reviewData.length}
                paginate={paginate} />
        </section>
    );
}

export default Review;