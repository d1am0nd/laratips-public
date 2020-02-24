import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {getTags} from '../../api/tags';
import {Tag} from '../../api/interfaces';
import {routeHome, routeTag} from '../../routes';

const Wrapper = styled.aside`
  flex-direction: column;
  display: flex;

  @media (min-width: 65em) {
    &:before {
      background-color: #FBFBFB;
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 999em;
      height: 100%;
      z-index: -1;
    }
    overflow: visible;
    position: sticky;
    top: 0;
    background: none;
    width: 15em;
    height: 100vh;
  }
`;

const Logo = styled(Link)`
  margin-top: 0.3em
  font-size: 3em;
  color: #f4645f;
  text-decoration: none;
`;

const List = styled.ul`
  padding-left: 0;
  list-style: none;
  margin: 1em 0;
`;

const ListItem = styled.li`
  font-size 1.4em;
  margin: 0 0 0.5em 0;
`;

const TagLink = styled(Link)`
  text-decoration: none;
  color: black;
  transition: color 0.1s;

  &:hover {
    color: #909090;
  }
`;

const Sidebar = () => {
  const [tags, setTags] = React.useState<Array<Tag>>([]);

  React.useEffect(() => {
    getTags()
      .then(({data}) => {
        setTags(data.data);
      })
      .catch(console.log);
  }, []);

  return (
    <Wrapper>
      <Logo to={routeHome()}>
        Laratips
      </Logo>
      <List>
        {tags.map((tag) => (
          <ListItem key={tag.id}>
            <TagLink to={routeTag(tag)}>
              {tag.name}
            </TagLink>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default Sidebar;
