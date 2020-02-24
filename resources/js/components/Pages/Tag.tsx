import * as React from 'react';
import {useParams} from 'react-router';
import {withTracker} from '../Hoc/withTracker';
import ArticleListPage from '../Simple/ArticleListPage';
import {Post, Tag} from '../../api/interfaces';
import {getPosts} from '../../api/posts';
import {getTag} from '../../api/tags';
import {idFromSlug} from '../../helpers';

const Tag = () => {
  const [posts, setPosts] = React.useState<Array<Post>>([]);
  const [tag, setTag] = React.useState<Tag>(undefined);
  const {slug} = useParams();
  const tagId = idFromSlug(slug);

  React.useEffect(() => {
    getPosts({tagIds: [tagId]})
      .then(({data}) => setPosts(data.data))
      .catch(console.log);

    getTag(tagId)
      .then(({data}) => setTag(data.data))
      .catch(console.log);
  }, [slug]);

  return (
    <ArticleListPage
      title={tag ? tag.name : ''}
      posts={posts} />
  );
};

export default withTracker(Tag);
