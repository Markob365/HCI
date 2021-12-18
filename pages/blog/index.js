import { getPosts } from 'helper';
import Link from 'next/link';

const BlogIndex = ({ posts }) => {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link href={`blog/${post.slug}`}>
                        <h1 className="text-lg cursor-pointer">{post.title}</h1>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default BlogIndex;

export async function getStaticProps() {
    const posts = await getPosts();

    return {
        props: { posts },
    };
}
