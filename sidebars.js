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
          items: [
            "integraciones/modelos/int-ingesta",
            "integraciones/modelos/int-delivery-api",
          ],
        },
        {
          type: "category",
          label: "Flujos",
          items: [
            "integraciones/flujos/int-ingesta-flujo-general-contenidos",
            "integraciones/flujos/int-delivery-via-api-flujo-general-contenidos",
          ],
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
            {
              type: "category",
              label: "Claro Brasil",
              items: [
                "integraciones/partners/claro-brazil/int-ing-partner-claro-brazil",
                {
                  type: "category",
                  label: "Anexos-Claro Brazil",
                  items: [
                    "integraciones/partners/claro-brazil/anexos/int-partnet-claro-brasil-anexos-checklist",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Sky Brazil",
              items: [
                "integraciones/partners/sky-brazil/int-ing-partner-sky-brazil",
                {
                  type: "category",
                  label: "Anexos-Sky Brazil",
                  items: [
                    "integraciones/partners/sky-brazil/anexos/int-partnet-sky-brazil-anexos-checklist",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Whatch Brazil",
              items: [
                "integraciones/partners/watch-brazil/int-ing-partner-watch-brazil",
                {
                  type: "category",
                  label: "Anexos-Whatch Brazil",
                  items: [
                    "integraciones/partners/watch-brazil/anexos/int-partnet-watch-brazil-anexos-checklist",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "VTR",
              items: [
                "integraciones/partners/vtr/int-ing-partner-vtr",
                {
                  type: "category",
                  label: "Anexos-VTR",
                  items: [
                    "integraciones/partners/vtr/anexos/int-partnet-vtr-anexos-checklist",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "ROKU Premium",
              items: [
                "integraciones/partners/roku-premium/int-ing-partner-roku-premium",
                {
                  type: "category",
                  label: "Anexos-ROKU Premium",
                  items: [
                    "integraciones/partners/roku-premium/anexos/int-partnet-roku-premium-anexos-checklist",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "DirecTV",
              items: [
                "integraciones/partners/directv/int-ing-partner-directv",
                {
                  type: "category",
                  label: "Anexos-DirecTV",
                  items: [
                    "integraciones/partners/directv/anexos/int-partnet-directv-anexos-checklist",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Megacable",
              items: [
                "integraciones/partners/megacable/int-ing-partner-megacable",
                {
                  type: "category",
                  label: "Anexos-Megacable",
                  items: [
                    "integraciones/partners/megacable/anexos/int-partnet-megacable-anexos-checklist",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    "devops-compendio",
  ],
};

export default sidebars;
