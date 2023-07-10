import {getProjects, Tree} from "@nx/devkit";

export function getLibraryProjectNames(tree: Tree): string[]{

  console.log('projects', getProjects(tree));

  const projectNames = [];
  getProjects(tree).forEach((projectConfiguration, projectName) => {
    if(projectConfiguration.projectType === 'library'){
      projectNames.push(projectName);
    }
  });
  return projectNames;
}

export function getLibrarySourceRoot(tree: Tree, libraryName: string): string{
  return getProjects(tree).get(libraryName).sourceRoot;
}
