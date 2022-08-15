import { graphql, useStaticQuery } from "gatsby";

type Props = {
  projectsYaml: {
    projects: Project[];
  };
};

export const useProjects = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      projectsYaml {
        projects {
          name
          description
          link
          logo
        }
      }
    }
  `);
  return data.projectsYaml.projects;
};
