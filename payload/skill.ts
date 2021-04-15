import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'Spring Boot',
    },
    {
      title: 'Spring MVC',
    },
    {
      title: 'Junit5',
    },
    {
      title: 'assertJ',
    },
    {
      title: 'Gradle',
    },
    {
      title: 'Git, Sourcetree',
    },
    {
      title: 'IntelliJ',
    },
    {
      title: 'AWS(EC2)',
    },
    {
      title: 'Linux',
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
    },
    {
      title: 'MariaDB',
    },
    {
      title: 'MongoDB',
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Frontend',
  items: [
    {
      title: 'JavaScript(ES6)',
    },
    {
      title: 'Vue.js, Vuex',
    },
    {
      title: 'TypeScript',
    },
    {
      title: 'HTML, CSS',
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Collaboration',
  items: [
    {
      title: 'Bitbucket',
    },
    {
      title: 'Jira & Wiki Confluence',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
};

export default skill;
