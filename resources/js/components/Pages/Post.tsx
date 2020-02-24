import * as React from 'react';
import {useParams} from 'react-router';
import {withTracker} from '../Hoc/withTracker';
import {getPost} from '../../api/posts';
import {Post} from '../../api/interfaces';
import Page from '../Simple/Page';
import {idFromSlug, niceDate} from '../../helpers';
import Markdown from '../Simple/Markdown';
import styled from 'styled-components';

const Date = styled.div`

`;

const Post = () => {
  const [post, setPost] = React.useState<Post>(undefined);
  const {slug} = useParams();

  React.useEffect(() => {
    getPost(idFromSlug(slug))
      .then(({data}) => setPost(data.data))
      .catch(console.log);
  }, [slug]);

  return (
    <Page
      title={post ? post.title : ''}
      intro={post ? post.intro : ''} >
      <Date>{post
        ? `Published on ${niceDate(post.published_at)}`
        : ''}</Date>
      {post
        ? <Markdown>
          {post.content}
        </Markdown>
        : ''}
    </Page>
  );
};

export default withTracker(Post);
