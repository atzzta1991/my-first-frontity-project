import React from "react";
import { connect, css, Global, Head, styled } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./List";
import Post from "./Post";
import Page from "./Page";
import Loading from "./Loading";
import Error from "./Error";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Head>
        <title>My first Frontity Theme</title>
        <meta
          name="description"
          content="Based on the Frontity step by step tutorial"
        />
      </Head>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Verdana, sans-serif;
          }
        `}
      />
      <Header isPostType={data.isPostType} isPageType={data.isPage}>
        <HeaderContent>
          <h1>Hello Project</h1>
          {state.myFirstTheme.isUrlVisible ? (
            <>
              <p>Current URL: {state.router.link}</p>
              <Button onClick={actions.myFirstTheme.toggleUrl}>
                &#x3c; Hide URL
              </Button>
            </>
          ) : (
            <Button onClick={actions.myFirstTheme.toggleUrl}>
              Show URL &#x3e;
            </Button>
          )}
          <Menu>
            <Link link="/">Home</Link>
            <br />
            <Link link="/destinations">Destinations</Link>
            <br />
            <Link link="/ve-chung-toi">About Us</Link>
            <br />
          </Menu>
        </HeaderContent>
      </Header>
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Page when={data.isDestinations} />
          <Error when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Root);

const Header = styled.header`
  background-color: #e5edee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${(props) =>
    props.isPostType
      ? (props) => (props.isPageType ? "lightseagreen" : "lightsteelblue")
      : "maroon"};

  h1 {
    color: #4a4a4a;
  }
`;

const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`;

const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;
  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;
  :hover {
    cursor: pointer;
    color: #888;
  }
`;
