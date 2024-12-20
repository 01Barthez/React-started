import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nouvelle fonctionnalité
        'fix', // Correction de bug
        'chore', // Tâches diverses
        'docs', // Documentation
        'style', // Changement de style (non fonctionnel)
        'refactor', // Refactorisation
        'test', // Ajout/modification de tests
        'build', // Construction du projet (builds, dépendances)
        'ci', // Intégration continue (fichiers de pipeline)
        'perf', // Amélioration de la performance
      ],
    ],
    'subject-case': [2, 'always', 'sentence-case'],
  },
};

export default Configuration;
