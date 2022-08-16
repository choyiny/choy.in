import { graphql, useStaticQuery } from "gatsby";

type Props = {
  navigationYaml: {
    pages: {
      name: string;
      link: string;
    }[];
  };
};

export const useNavigation = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      navigationYaml {
        pages {
          name
          link
        }
      }
    }
  `);
  return data.navigationYaml.pages;
};
