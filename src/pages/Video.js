import React, { useState, useEffect } from "react";
import PageTitle from "../components/pageTitle/PageTitle";
import PostList from "../components/post/PostList";
import usePagination from "../hooks/PaginationHook";
import Pagination from "../components/pagination/Pagination";

function Video() {
    const postsPerPage = 30;
    const [videoData, setVideoData] = useState([]);
    const [currentPage, setCurrentPage, currentPosts, paginate] = usePagination(videoData, postsPerPage);

    useEffect(() => {
        fetch(
            'https://react-cosmetics-shop-bdae3-default-rtdb.firebaseio.com/video.json'
        ).then((response) => {
            return response.json()
        }).then((data) => {
            setVideoData(data);
        })
    }, []);

    return (
        <section>
            <PageTitle title="nanda tv" />
            <PostList currentPosts={currentPosts} postsPerPage={postsPerPage} />
            <Pagination
                currentPage={currentPage}
                postsPerPage={postsPerPage}
                totalPosts={videoData.length}
                paginate={paginate}
            />
        </section>
    );
}

export default Video;