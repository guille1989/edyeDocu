// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "intro",
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
                  label: "Anexos-Claro Video",
                  items: [
                    "integraciones/partners/claro-video/anexos/int-partnet-claro-video-anexos-posters",
                    "integraciones/partners/claro-video/anexos/int-partnet-claro-video-anexos-checklist",
                  ],
                },
              ],
            },
             {
              type: "category",
              label: "Dish Mexico",
              items: [
                "integraciones/partners/dish-mexico/int-ing-partner-dish-mexico",
                {
                  type: "category",
                  label: "Anexos-Dish Mexico",
                  items: [
                    "integraciones/partners/dish-mexico/anexos/int-partnet-dish-mexico-anexos-posters",
                    "integraciones/partners/dish-mexico/anexos/int-partnet-dish-mexico-anexos-checklist",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    "devops-compendio"
  ],
};

export default sidebars;
