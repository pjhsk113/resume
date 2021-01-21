import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'Spring Boot',
    },
    {
      title: 'JPA',
    },
    {
      title: 'AWS(EC2)',
    }
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
      title: 'Linux',
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
