import React from "react";
import { connect, styled } from "frontity";
import dayjs from "dayjs";

function Post({ state, libraries }) {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  const formattedDate = dayjs(post.date).format("DD/MM/YYYY");
  const Html2React = libraries.html2react.Component;
  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <PostInfo>
        <p>
          <strong>Post: </strong>
        </p>
        {formattedDate}
        <p>
          <strong>Author: </strong>
        </p>
        {author.name}
      </PostInfo>
      <Html2React html={post.content.rendered} />
    </div>
  );
}

export default connect(Post);

const PostInfo = styled.div`
  background-image: linear-gradient(to right, #f4f4f4, #ffffff);
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid lightseagreen;
  font-size: 0.8em;
  & > p {
    margin: 0;
  }
`;
