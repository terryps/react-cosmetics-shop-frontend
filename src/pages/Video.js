import PageTitle from "../components/pageTitle/PageTitle";
import PostList from "../components/post/PostList";
import usePagination from "../hooks/PaginationHook";
import Pagination from "../components/pagination/Pagination";
import videoData from "../data/video-data.json";

function Video() {
    const postsPerPage = 20;
    const [currentPage, setCurrentPage, currentPosts, paginate] = usePagination(videoData, postsPerPage);

    return (
        <section>
            <PageTitle title="nanda tv" />
            <PostList currentPosts={currentPosts}/>
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