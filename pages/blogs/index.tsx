import type { GetServerSideProps, NextPage } from "next";
import { OBJ_TYPE } from "../../src/common/types";
import PostsList from "../../src/views/posts-list";

interface MyPageProps {
  data?: OBJ_TYPE[];
}

const PostsPage: NextPage<MyPageProps> = ({ data }) => {
  if (!data) return <div>Loading...</div>;
  else return <PostsList data={data} />;
};

export default PostsPage;

export const getServerSideProps: GetServerSideProps<MyPageProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data: OBJ_TYPE[] = await res.json();
  return {
    props: {
      data,
    },
  };
};
