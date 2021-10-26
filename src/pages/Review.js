import React, { useState, useEffect } from "react";
import PageTitle from "../components/pageTitle/PageTitle";
import PostList from "../components/post/PostList";
import usePagination from "../hooks/PaginationHook";
import Pagination from "../components/pagination/Pagination";

function Review() {
    const postsPerPage = 40;
    const [reviewData, setReviewData] = useState([]);
    const [currentPage, setCurrentPage, currentPosts, paginate] = usePagination(reviewData, postsPerPage);

    useEffect(()=>{
        fetch(
            'https://react-cosmetics-shop-bdae3-default-rtdb.firebaseio.com/review.json',
        ).then(response => {
            return response.json();
        }).then((data) => {
            setReviewData(data);
        });
    },[]);

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