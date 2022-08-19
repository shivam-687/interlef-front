import FeaturedPostCard from "../../components/blog/FeaturedPostCard";


const Featured = () => {

    const featuredPost = [
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
            <section className="container mx-auto px-5 py-20 lg:py-28">
                <div className="w-full mb-8">
                    <h1 className="text-4xl font-bold">Featured</h1>
                    <hr />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        featuredPost.map((post, index) => {
                            return (
                                <FeaturedPostCard key={index} {...post} />
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default Featured;