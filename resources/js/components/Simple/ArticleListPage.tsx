import * as React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router';
import Page from '../Simple/Page';
import {Post} from '../../api/interfaces';
import {niceDate} from '../../helpers';
import {routePost} from '../../routes';

const borderSize = 2;

const ListItem = styled.article`
  cursor: pointer;
  padding: 0 0 0 0.${2 + borderSize}em;
  margin: 0 0 1.5em -0.${3 + borderSize}em;
  border-left: 0.${borderSize}em solid #f4645f;
`;

const ListTitle = styled.div`
  font-size: 2em;
  margin: 0.5em 0;
`;

const ListIntro = styled.div`
  font-size: 1.4em;
  margin: 0.5em 0 0.8em 0;
`;

const ListDate = styled.div`
  font-size: 1.1em;
`;

interface IProps {
  title: string;
  intro?: string;
  posts: Array<Post>;
}

const ArticleListPage: React.FunctionComponent<IProps> = ({
  title,
  intro,
  posts,
}) => {
  const history = useHistory();

  return (
    <Page
      title={title}
      intro={intro} >
      {posts.map((post) => (
        <ListItem
          key={post.id}
          onClick={() => history.push(routePost(post))}>
          <ListTitle>
            {post.title}
          </ListTitle>
          <ListIntro>
            {post.intro}
          </ListIntro>
          <ListDate>
            Published on {niceDate(post.published_at)}
          </ListDate>
        </ListItem>
      ))}
    </Page>
  );
};

export default ArticleListPage;
