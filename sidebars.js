// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "🗄️ Edye-Infraestructura",
      items: [
        "infraestructura/infraestructura-environment"
      ],
    },
    {
      type: "category",
      label: "🗂️ Edye-Aplicaciones",
      items: [
        "aplicaciones/app-admin",
        "aplicaciones/app-api",
        "aplicaciones/app-billing",
        "aplicaciones/app-cache",
        "aplicaciones/app-cloud",
        "aplicaciones/app-play",
        "aplicaciones/app-connect",
        "aplicaciones/app-satellite",
      ],
    },
    {
      type: "category",
      label: "🛠️ Edye-DevOps",
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
      label: "🔌 Edye-Integraciones",
      items: [
        "integraciones/int-overview",
        {
          type: "category",
          label: "Tipos de integraciones",
          items: [
            "integraciones/modelos/int-ingesta",
            "integraciones/modelos/int-delivery-api",
            "integraciones/modelos/int-edye-billing",
            "integraciones/modelos/int-api-notifier-apk",
            "integraciones/modelos/int-api-notifier-billing"
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
                    "integraciones/partners/claro-video/anexos/int-partnet-claro-video-anexos-posters"
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
                    "integraciones/partners/dish-mexico/anexos/int-partnet-dish-mexico-anexos-posters"
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Claro Brazil",
              items: [
                "integraciones/partners/claro-brazil/int-ing-partner-claro-brazil"
              ],
            },
            {
              type: "category",
              label: "Sky Brazil",
              items: [
                "integraciones/partners/sky-brazil/int-ing-partner-sky-brazil"
              ],
            },
            {
              type: "category",
              label: "Whatch Brazil",
              items: [
                "integraciones/partners/watch-brazil/int-ing-partner-watch-brazil"
              ],
            },
            {
              type: "category",
              label: "VTR",
              items: [
                "integraciones/partners/vtr/int-ing-partner-vtr"
              ],
            },
            {
              type: "category",
              label: "ROKU Premium",
              items: [
                "integraciones/partners/roku-premium/int-ing-partner-roku-premium"
              ],
            },
            {
              type: "category",
              label: "DirecTV",
              items: [
                "integraciones/partners/directv/int-ing-partner-directv"
              ],
            },
            {
              type: "category",
              label: "Megacable",
              items: [
                "integraciones/partners/megacable/int-ing-partner-megacable"
              ],
            },
            {
              type: "category",
              label: "Walmart",
              items: [
                "integraciones/partners/walmart/int-edye-billing-partner-waltmart"
              ],
            },
            {
              type: "category",
              label: "Mi Bebé y Yo",
              items: [
                "integraciones/partners/mi-bebe-y-yo/int-edye-billing-partner-mi-bebe-y-yo"
              ],
            },
            {
              type: "category",
              label: "Ultralink",
              items: [
                "integraciones/partners/ultralink/int-edye-billing-partner-ultralink"
              ],
            },
            {
              type: "category",
              label: "The Shelf",
              items: [
                "integraciones/partners/the-shelf/int-edye-delivery-via-api-the-shelf"
              ],
            },
            {
              type: "category",
              label: "Telecable",
              items: [
                "integraciones/partners/telecable/int-edye-api-notifier-apk-telecable"
              ],
            },
            {
              type: "category",
              label: "Telefonica (Movistar)",
              items: [
                "integraciones/partners/telefonica-movistar/int-edye-api-notifier-billing-telefonica"
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Anexos",
          items: [
            "integraciones/int-checklist"
          ],
        },
      ],
    },
    {
      type: "category",
      label: "🛡️ Edye-Seguridad y Monitoreo",
      items: [
        "seguridad_monitoreo/seguridad_monitoreo",
      ],
    },
    {
      type: "category",
      label: "👷🏼‍♂️ Edye-Soporte y Técnico",
      items: [
        "soporte_tecnico/soporte_tecnico",
      ],
    },
    "devops-compendio",
  ],
};

export default sidebars;
