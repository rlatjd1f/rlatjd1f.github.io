import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'C++',
      level: 2,
    },
    {
      title: 'Shell Scripting',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 1,
    },
    {
      title: 'JS',
      level: 1,
    },
  ],
};

const Framework: ISkill.Skill = {
  category: 'Framework',
  items: [
    {
      title: 'Spring Boot',
      level: 3,
    },
  ],
};

const Infrastructure: ISkill.Skill = {
  category: 'Infrastructure',
  items: [
    {
      title: 'Linux',
      level: 3,
    },
    {
      title: 'Docker',
      level: 3,
    },
    {
      title: 'Kubernetes',
      level: 2,
    },
    {
      title: 'AWS',
      level: 1,
    },
  ],
};

const Database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'Oracle',
      level: 3,
    },
    {
      title: 'Redis',
      level: 2,
    },
    {
      title: 'Elasticsearch',
      level: 2,
    },
    {
      title: 'Kafka',
      level: 2,
    },
  ],
};

const OpenSource: ISkill.Skill = {
  category: 'Open Source',
  items: [
    {
      title: 'Prometheus',
      level: 2,
    },
    {
      title: 'Grafana',
      level: 2,
    },
    {
      title: 'Loki',
      level: 2,
    },
    {
      title: 'Promtail',
      level: 2,
    },
    {
      title: 'Kafka',
      level: 1,
    },
    {
      title: 'fluent-bit',
      level: 1,
    },
    {
      title: 'jaeger',
      level: 1,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, Framework, Infrastructure, Database, OpenSource],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
