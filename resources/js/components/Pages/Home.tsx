import * as React from 'react';
import {withTracker} from '../Hoc/withTracker';
import ArticleListPage from '../Simple/ArticleListPage';
import {Post} from '../../api/interfaces';
import {getPosts} from '../../api/posts';

const Home = () => {
  const [posts, setPosts] = React.useState<Array<Post>>([]);

  React.useEffect(() => {
    getPosts()
      .then(({data}) => {
        setPosts(data.data);
      })
      .catch(console.log);
  }, []);

  return (
    <ArticleListPage
      title='Home'
      intro='Laravel tutorials, opinions, articles and cheatsheets'
      posts={posts} />
  );
};

export default withTracker(Home);
