import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'Spring Boot',
      level: 3,
    },
    {
      title: 'AWS(EC2)',
      level: 2,
    },
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'JPA',
      level: 2,
    },
    {
      title: 'Django',
      level: 2,
    },
    {
      title: 'C/C++',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'Oracle',
      level: 2,
    },
    {
      title: 'MariaDB',
      level: 2,
    },
    {
      title: 'MongoDB',
      level: 2,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'JavaScript',
      level: 2,
    },
    {
      title: 'Vue.js',
      level: 2,
    },
    {
      title: 'TypeScript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
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
