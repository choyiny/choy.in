import { graphql, useStaticQuery } from "gatsby";

type Props = {
  workYaml: {
    work: Project[];
  };
};

export const useWork = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      workYaml {
        work {
          name
          description
          link
          logo
        }
      }
    }
  `);
  // return data.workYaml.work;
  return [];
};
