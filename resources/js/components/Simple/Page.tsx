import * as React from 'react';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

const Wrapper = styled.div`
  padding: 1em 0;
`;

const H1 = styled.h1`
  font-size: 3em;
  font-weight: 400;
  margin: 0.3em 0 0 0;
  border-bottom: 1px solid grey;
  @media (max-width: 65em) {
    margin-top: 0;
  }
`;

const Intro = styled.div`
  font-size: 1.8em;
  margin-bottom: 1em;
`;

interface IProps {
  title: string;
  intro: string;
};

const Page: React.FunctionComponent<IProps> = ({
  title,
  intro,
  children,
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{!!title
          ? `${title} - Laratips`
          : `Laratips`}</title>
        <meta name="description" content={intro} />
      </Helmet>
      <H1>{title || '...'}</H1>
      <Wrapper>
        {
          intro
            ? <Intro>
              {intro}
            </Intro>
            : null
        }
        {children}
      </Wrapper>
    </>
  );
};

export default Page;
