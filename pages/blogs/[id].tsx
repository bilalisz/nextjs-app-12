import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { OBJ_TYPE } from "../../src/common/types";
import BlogDetail from "../../src/common/components/BlogDetail";

interface BlogPageProps {
  data?: OBJ_TYPE;
  error?: string;
}

const defaultData = { id: 1, userId: 1, title: "", body: "" };

const BlogPage: NextPage<BlogPageProps> = ({ data, error }) => {
  return (
    <>
      <BlogDetail blog={data ? data : defaultData} />
    </>
  );
};

export default BlogPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: OBJ_TYPE[] = await res.json();
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async ({
  params,
}: GetStaticPropsContext) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params!.id}`
    );
    const post: OBJ_TYPE = await res.json();

    return {
      props: {
        data: post,
      },
    };
  } catch (error) {
    return {
      props: { error: "error..........." },
      notFound: true,
    };
  }
};
