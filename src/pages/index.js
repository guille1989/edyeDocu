import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const featureLinks = [
  {
    key: 'arch',
    title: (
      <Translate id="home.feature.arch.title">Arquitectura</Translate>
    ),
    description: (
      <Translate id="home.feature.arch.desc">
        Visibilidad del ecosistema: servicios, flujos y componentes clave de Edyes.
      </Translate>
    ),
    href: '/docs/infraestructura/infraestructura-environment',
  },
  {
    key: 'devops',
    title: (
      <Translate id="home.feature.devops.title">DevOps</Translate>
    ),
    description: (
      <Translate id="home.feature.devops.desc">
        Estrategia, CI/CD, seguridad y monitoreo para mantener entregas confiables.
      </Translate>
    ),
    href: '/docs/devops/devops-estrategia',
  },
  {
    key: 'integrations',
    title: (
      <Translate id="home.feature.integrations.title">Integraciones</Translate>
    ),
    description: (
      <Translate id="home.feature.integrations.desc">
        Guia de uso, despliegue y APIs de las soluciones que construyen la experiencia.
      </Translate>
    ),
    href: '/docs/integraciones/int-overview',
  },
];

export default function Home() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const locale = i18n?.currentLocale || 'es';
  const pdfFile = locale === 'en' ? 'compendio-en.pdf' : 'compendio-es.pdf';
  const pdfHref = useBaseUrl(`/${pdfFile}`);
  const description = translate({
    id: 'home.description',
    message: 'Landing principal de la documentacion de Edyes',
  });

  return (
    <Layout
      title={siteConfig.title}
      description={description}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <Translate id="home.badge">Documentacion unificada</Translate>
          </div>
          <h1>
            <Translate
              id="home.title"
              values={{brand: <span className={styles.brand}>Edye</span>}}>
              {'Todo el conocimiento de {brand} en un solo lugar'}
            </Translate>
          </h1>
          <p className={styles.lead}>
            <Translate id="home.lead">
              Guia central para equipos de producto, desarrollo, QA y operaciones:
              arquitectura, aplicaciones, APIs, procesos y mejores practicas.
            </Translate>
          </p>
          <div className={styles.actions}>
            <Link className={clsx('button button--primary', styles.action)} to="/docs/intro">
              <Translate id="home.cta.explore">Empezar a explorar</Translate>
            </Link>
            <Link className={clsx('button button--secondary', styles.action)} to="/docs/devops/devops-estructura">
              <Translate id="home.cta.devops">Ver flujo DevOps</Translate>
            </Link>
            <a
              className={clsx('button button--outline button--secondary', styles.action)}
              href={pdfHref}
              download
            >
              <Translate id="home.cta.pdf">Descarga PDF</Translate>
            </a>
          </div>
        </div>
        <div className={styles.heroCard}>
          <p className={styles.cardTitle}>
            <Translate id="home.card.title">Que resuelve este sitio</Translate>
          </p>
          <ul className={styles.cardList}>
            <li>
              <Translate id="home.card.item1">
                Fuentes oficiales y versionadas de documentacion tecnica.
              </Translate>
            </li>
            <li>
              <Translate id="home.card.item2">
                Rutas claras a arquitectura, DevOps, aplicaciones y APIs.
              </Translate>
            </li>
            <li>
              <Translate id="home.card.item3">
                Acceso rapido a normas, diagramas y procedimientos operativos.
              </Translate>
            </li>
          </ul>
          <p className={styles.cardFoot}>
            <Translate id="home.card.foot">
              Actualiza y consulta antes de desplegar.
            </Translate>
          </p>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.features}>
          {featureLinks.map((feature) => (
            <article key={feature.key} className={styles.card}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link className={styles.link} to={feature.href}>
                <Translate id="home.feature.cta">Abrir seccion</Translate>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  );
}
