import PostCard from "../../components/blog/PostCard";


const Stories = () => {

    const stories = [
        {
            title: 'How to use Axios with VueJs',
            des: 'The promise-based HTTP client Axios can be used with Vue, a simple frontend JavaScript framework, to create web applications....',
            cover: '/images/blog/b-1.jpg',
            date: '2020-01-01',
            readingTime: '5 min read',
            author: 'John Doe',
            authorImg: '/logo/logo-small-100x100.jpg',
        },
        {
            title: 'How to use Axios with VueJs',
            des: 'The promise-based HTTP client Axios can be used with Vue, a simple frontend JavaScript framework, to create web applications....',
            cover: '/images/blog/b-1.jpg',
            date: '2020-01-01',
            readingTime: '5 min read',
            author: 'John Doe',
            authorImg: '/logo/logo-small-100x100.jpg',
        },
        {
            title: 'How to use Axios with VueJs',
            des: 'The promise-based HTTP client Axios can be used with Vue, a simple frontend JavaScript framework, to create web applications....',
            cover: '/images/blog/b-1.jpg',
            date: '2020-01-01',
            readingTime: '5 min read',
            author: 'John Doe',
            authorImg: '/logo/logo-small-100x100.jpg',
        },
        {
            title: 'The guide to syntax highlighting in React',
            des: 'The promise-based HTTP client Axios can be used with Vue, a simple frontend JavaScript framework, to create web applications....',
            cover: '/images/blog/b-1.jpg',
            date: '2020-01-01',
            readingTime: '5 min read',
            author: 'John Doe',
            authorImg: '/logo/logo-small-100x100.jpg',
        },
        {
            title: 'The guide to syntax highlighting in React',
            des: 'The promise-based HTTP client Axios can be used with Vue, a simple frontend JavaScript framework, to create web applications....',
            cover: '/images/blog/b-1.jpg',
            date: '2020-01-01',
            readingTime: '5 min read',
            author: 'John Doe',
            authorImg: '/logo/logo-small-100x100.jpg',
        },
        {
            title: 'The guide to syntax highlighting in React',
            des: 'The promise-based HTTP client Axios can be used with Vue, a simple frontend JavaScript framework, to create web applications....',
            cover: '/images/blog/b-1.jpg',
            date: '2020-01-01',
            readingTime: '5 min read',
            author: 'John Doe',
            authorImg: '/logo/logo-small-100x100.jpg',
        },
        {
            title: 'How to use Axios with VueJs',
            des: 'The promise-based HTTP client Axios can be used with Vue, a simple frontend JavaScript framework, to create web applications....',
            cover: '/images/blog/b-1.jpg',
            date: '2020-01-01',
            readingTime: '5 min read',
            author: 'John Doe',
            authorImg: '/logo/logo-small-100x100.jpg',
        },
        {
            title: 'How to use Axios with VueJs',
            des: 'The promise-based HTTP client Axios can be used with Vue, a simple frontend JavaScript framework, to create web applications....',
            cover: '/images/blog/b-1.jpg',
            date: '2020-01-01',
            readingTime: '5 min read',
            author: 'John Doe',
            authorImg: '/logo/logo-small-100x100.jpg',
        },
    ]

    return (
        <>
            <section className="container mx-auto px-5 pb-20 lg:pb-28">
                <div className="w-full mb-8">
                    <h1 className="text-4xl font-bold">All Stories</h1>
                    <hr />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        stories.map((story, index) => {
                            return (
                                <div key={index} className="flex items-start justify-center w-full "> <PostCard  {...story}></PostCard></div>
                            );
                        })
                    }
                </div>

                <div className="flex items-center justify-center mt-14">
                    <div className="btn-group grid grid-cols-2">
                        <button className="btn btn-outline btn-primary" disabled>Previous page</button>
                        <button className="btn btn-outline btn-primary">Next</button>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Stories;