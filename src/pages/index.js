import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const featureLinks = [
  {
    title: 'Arquitectura',
    description:
      'Visibilidad del ecosistema: servicios, flujos y componentes clave de Edyes.',
    href: '/docs/arquitectura/overview',
  },
  {
    title: 'DevOps',
    description:
      'Estrategia, CI/CD, seguridad y monitoreo para mantener entregas confiables.',
    href: '/docs/devops/devops-estrategia',
  },
  {
    title: 'Integraciones',
    description:
      'Guia de uso, despliegue y APIs de las soluciones que construyen la experiencia.',
    href: '/docs/integraciones/int-overview',
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Landing principal de la documentacion de Edyes">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>  Documentacion unificada </div>
          <h1>
            
            Todo el conocimiento de <span className={styles.brand}>Edye</span>{' '}
            en un solo lugar
            
          </h1>
          <p className={styles.lead}>
            
            Guia central para equipos de producto, desarrollo, QA y operaciones:
            arquitectura, aplicaciones, APIs, procesos y mejores practicas.
            
          </p>
          <div className={styles.actions}>
            <Link className={clsx('button button--primary', styles.action)} to="/docs/intro">
              Empezar a explorar
            </Link>
            <Link className={clsx('button button--secondary', styles.action)} to="/docs/devops/devops-planificacion">
              Ver flujo DevOps
            </Link>
          </div>
        </div>
        <div className={styles.heroCard}>
          <p className={styles.cardTitle}>Que resuelve este sitio</p>
          <ul className={styles.cardList}>
            <li>Fuentes oficiales y versionadas de documentacion tecnica.</li>
            <li>Rutas claras a arquitectura, DevOps, aplicaciones y APIs.</li>
            <li>Acceso rapido a normas, diagramas y procedimientos operativos.</li>
          </ul>
          <p className={styles.cardFoot}>Actualiza y consulta antes de desplegar.</p>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.features}>
          {featureLinks.map((feature) => (
            <article key={feature.title} className={styles.card}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link className={styles.link} to={feature.href}>
                 Abrir sección → 
              </Link>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  );
}
