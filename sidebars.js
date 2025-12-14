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
        "infraestructura/indraestructura-staging-environment",
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
          label: "Modelos",
          items: ["integraciones/modelos/int-ingesta"],
        },
        {
          type: "category",
          label: "Flujos",
          items: ["integraciones/flujos/int-ingesta-flujo-contenidos"],
        },
        {
          type: "category",
          label: "Partners",
          items: [
            {
              type: "category",
              label: "Claro Video",
              items: [
                "integraciones/partners/claro-video/int-ing-partner-claro-video",
                {
                  type: "category",
                  label: "Anexos",
                  items: [
                    "integraciones/partners/claro-video/anexos/int-partnet-claro-video-anexos-posters",
                    "integraciones/partners/claro-video/anexos/int-partnet-claro-video-anexos-checklist",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    "devops-compendio",
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
