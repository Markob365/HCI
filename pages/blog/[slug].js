import { getPostBySlug, getPosts } from 'helper';
import Image from 'next/image';

const BlogPost = ({ post }) => (
    <main className="w-2/3 mx-auto my-0">
        <h1 className="text-center text-8xl text-gray-800">{post.title}</h1>
        <h2 className="text-center text-5xl my-8 text-gray-600">
            Some subtitle can go here
        </h2>
        <Image
            src={post.imgSrc}
            alt="post image"
            layout="fixed"
            width={800}
            height={600}
        />
        <p>{post.body}</p>
        <p>Read more bellow</p>
        <a href={post.link}>
            <span>Learn more</span>
        </a>
    </main>
);

export default BlogPost;

export async function getStaticPaths() {
    const posts = await getPosts();

    const paths = posts.map((post) => ({
        params: {
            slug: post.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const params = context.params;
    const post = await getPostBySlug(params.slug);

    return {
        props: { post },
    };
}
