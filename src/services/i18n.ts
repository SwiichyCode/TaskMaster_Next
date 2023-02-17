import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
// "Inline" English and French translations.
// We can localize to any language and any number of languages.

const resources = {
  en: {
    translation: {
      app_title: "Simplify Your Workflow with Task Master",
      app_subtitle:
        "Enhance your project management with Task Master. Invite collaborators, centralize your ideas, and improve your work efficiency.",
      app_features_title:
        "Easy and effective features for seamless project management.",
      app_features_subtitle:
        "Empower your project management with [App Name]'s powerful features. Gain complete control over your tasks, ideas, and collaboration with easy-to-use tools.",
      app_features_one: "Collaborative Planning",
      app_features_one_subtitle:
        "Collaborate with your team to easily plan and organize your projects. Share ideas, tasks, and comments in real-time for better collaboration.",
      app_features_two: "Task Management",
      app_features_two_subtitle:
        "Efficiently manage your tasks by organizing, prioritizing, and tracking them. Assign tasks to collaborators, set deadlines, and get real-time updates.",
      app_features_three: "Idea Tracking",
      app_features_three_subtitle:
        "Track your ideas and inspirations in one place. Add notes, images, and files for better organization and collaboration.",
      app_features_four: "Project Overview",
      app_features_four_subtitle:
        "Get a complete overview of your project at a glance. Visualize task progress, deadlines, and involved collaborators to stay on track.",
      app_features_five: "Progress Tracking",
      app_features_five_subtitle:
        "Track your project progress in real-time. Get updates on task status, collaborator comments, and deadlines.",
      app_features_six: "Notifications & Alerts",
      app_features_six_subtitle:
        "Receive real-time notifications to never miss anything. Be informed of task updates, comments, and new ideas for better collaboration.",
    },
  },

  fr: {
    translation: {
      app_title: "Simplifiez votre flux de travail avec Task Master",
      app_subtitle:
        "Optimisez votre gestion de projet avec Task Master. Invitez des collaborateurs, centralisez vos idées et améliorez votre efficacité de travail.",
      app_features_title:
        "Des fonctionnalités simples et efficaces pour une gestion optimale de tous vos projets.",
      app_features_subtitle:
        "Transformez votre gestion de projet avec les fonctionnalités puissantes de [Nom de l'application]. Obtenez un contrôle total sur vos tâches, vos idées et votre collaboration avec des outils simples et efficaces.",
      app_features_one: "Collaborative Planning",
      app_features_one_subtitle:
        "Collaborez avec votre équipe pour facilement planifier et organiser vos projets. Partagez des idées, des tâches et des commentaires en temps réel pour une meilleure collaboration.",
      app_features_two: "Gestion des Tâches",
      app_features_two_subtitle:
        "Gérez efficacement vos tâches en les organisant, en les priorisant et en les suivant. Assignez des tâches à des collaborateurs, définissez des échéances et obtenez des mises à jour en temps réel.",
      app_features_three: "Suivi des Idées",
      app_features_three_subtitle:
        "Suivez vos idées et vos inspirations dans un seul endroit. Ajoutez des notes, des images et des fichiers pour une meilleure organisation et une meilleure collaboration.",
      app_features_four: "Aperçu du Projet",
      app_features_four_subtitle:
        "Obtenez un aperçu complet de votre projet en un coup d'œil. Visualisez l'avancement des tâches, les échéances et les collaborateurs impliqués pour rester sur la bonne voie.",
      app_features_five: "Suivi de l'Avancement",
      app_features_five_subtitle:
        "Suivez l'avancement de votre projet en temps réel. Obtenez des mises à jour sur l'état des tâches, les commentaires des collaborateurs et les échéances.",
      app_features_six: "Notifications et Alertes",
      app_features_six_subtitle:
        "Recevez des notifications en temps réel pour ne rien manquer. Soyez informé des mises à jour de tâches, des commentaires et des nouvelles idées pour une meilleure collaboration.",
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  debug: process.env.NODE_ENV === "development",
});
export default i18next;
