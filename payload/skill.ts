import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'AWS(EC2)',
    },
    {
      title: 'Spring',
    },
    {
      title: 'Spring Boot',
    },
    {
      title: 'JPA',
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
      title: 'Oracle',
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
  category: 'Front-end',
  items: [
    {
      title: 'JavaScript',
    },
    {
      title: 'Vue.js',
    },
    {
      title: 'TypeScript',
    },
    {
      title: 'HTML/CSS',
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'Vim',
    },
    {
      title: 'Maven',
    },
    {
      title: 'Gradle',
    },
    {
      title: 'TDD',
    },
    {
      title: 'Git / Github',
    },
    {
      title: 'IntelliJ',
    },
    {
      title: 'Bitbucket',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
};

export default skill;
