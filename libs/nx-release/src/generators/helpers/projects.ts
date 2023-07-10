import {getProjects, Tree} from "@nx/devkit";

export function getLibraryProjectNames(tree: Tree): string[]{
  const projectNames = [];
  getProjects(tree).forEach((projectConfiguration, projectName) => {
    if(projectConfiguration.projectType === 'library'){
      projectNames.push(projectName);
    }
  });
  return projectNames;
}
