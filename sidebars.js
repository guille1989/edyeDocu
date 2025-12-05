// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "intro", // Agregar el documento intro al principio
    {
      /*
      type: 'category',
      label: 'Edyes-Arquitectura',
      items: [
        'arquitectura/overview',           // docs/arquitectura/overview.md
        'arquitectura/infraestructura',    // docs/arquitectura/infraestructura.md
        'arquitectura/seguridad-monitoreo' // docs/arquitectura/seguridad-monitoreo.md
      ],
    */
    },
    {
      type: "category",
      label: "🗄️ Edyes-Infraestructura",
      items: [
        "infraestructura/indraestructura-production-environment",
        "infraestructura/indraestructura-staging-environment"
      ],
    },
    {
      type: "category",
      label: "🛠️ Edyes-DevOps",
      items: [
        "devops/devops-estructura",
        "devops/devops-estrategia",
        "devops/devops-planificacion",
        "devops/devops-desarrollo",
        "devops/devops-ci",
        "devops/devops-cd",
        "devops/devops-operaciones",
      ],
    },
    {
      type: "category",
      label: "🔌 Edyes-Integraciones",
      items: [
        "integraciones/int-overview",
        {
          type: "category",
          label: "🤝 Int-Adobe",
          items: [
            "integraciones/adobe/int-adobe-liberty",
            "integraciones/adobe/int-adobe-claro-puerto-rico",
          ],
        },
        {
          type: "category",
          label: "🤝 Int-SAML AUTH",
          items: [
            "integraciones/salm-auth/int-salm-auth-neo-tv"
          ],
        },
      ],
    },
    {
      /*
      type: 'category',
      label: 'Edyes-Aplicaciones',
      items: [
        'aplicaciones/admin',
        'aplicaciones/play',
        'aplicaciones/api',
      ],
    */
    },

    {
      /*
      type: 'category',
      label: 'Edyes-Integraciones',
      items: [
        'integraciones/overview',
      ],
    */
    },
  ],
};

export default sidebars;
