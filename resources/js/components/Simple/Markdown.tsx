import * as React from 'react';
import MarkdownReact from 'markdown-to-jsx';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styled from 'styled-components';

interface IComponent {
  id: string;
  className: string | null;
  children: any;
};

const H2 = styled.h2`
  font-size: 2.2em;
  font-weight: 400;
  margin: 0.5em 0;
`;

const H3 = styled.h3`
  font-size: 1.8em;
  font-weight: 400;
  margin: 0.5em 0;
`;

const H4 = styled.h4`
  font-size: 1.6em;
  font-weight: 400;
  margin: 0.5em 0;
`;

const H5 = styled.h5`
  font-size: 1.4em;
  font-weight: 400;
  margin: 0.5em 0;
`;

const H6 = styled.h6`
  font-size: 1.2em;
  font-weight: 400;
  margin: 0.5em 0;
`;

const PreWrapper = styled(SyntaxHighlighter)`
  background: #FBFBFB !important;
  padding: 0.2em 0.4em 0 0.4em;
  overflow-x: auto;
`;

const Pre = ({children}: IComponent) => (
  <PreWrapper>
    {children.props.children}
  </PreWrapper>
);

const Markdown: React.FunctionComponent = ({
  children,
}) => {
  const refs = new Map<string, React.MutableRefObject<any>>();
  React.useEffect(() => {
    const ref = refs.get(window.location.hash.substr(1));
    if (ref) {
      window.scrollTo(0, ref.current.offsetTop);
    }
  }, []);

  return (
    <MarkdownReact
      options={{
        overrides: {
          h1: {
            component: function MarkdownH2({id, children}: IComponent) {
              const ref = React.useRef(null);
              refs.set(id, ref);
              return <H2 id={id} ref={ref}>
                {children}
              </H2>;
            },
          },
          h2: {
            component: function MarkdownH3({id, children}: IComponent) {
              const ref = React.useRef(null);
              refs.set(id, ref);
              return <H3 id={id} ref={ref}>
                {children}
              </H3>;
            },
          },
          h3: {
            component: function MarkdownH4({id, children}: IComponent) {
              const ref = React.useRef(null);
              refs.set(id, ref);
              return <H4 id={id} ref={ref}>
                {children}
              </H4>;
            },
          },
          h4: {
            component: function MarkdownH5({id, children}: IComponent) {
              const ref = React.useRef(null);
              refs.set(id, ref);
              return <H5 id={id} ref={ref}>
                {children}
              </H5>;
            },
          },
          h5: {
            component: function MarkdownH6({id, children}: IComponent) {
              const ref = React.useRef(null);
              refs.set(id, ref);
              return <H6 id={id} ref={ref}>
                {children}
              </H6>;
            },
          },
          pre: {
            component: Pre,
          },
        },
      }}>
      {children}
    </MarkdownReact>
  );
};

export default Markdown;
