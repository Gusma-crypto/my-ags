import { PROJECTS } from '../data/content';

export const getFilteredProjects = (category: string) => {
  return category === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === category);
};
