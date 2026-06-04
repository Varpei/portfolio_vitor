import {
  profile,
  sobre,
  experiencias,
  skills,
  projetos,
  formacao,
  cursos,
} from "./data/content";

// Pequeno componente que aplica a animação de entrada com um atraso escalonado.
function Reveal({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
  return (
    <div className="reveal" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <main>
      {/* ----------------------------- HERO ----------------------------- */}
      <header className="hero">
        <div className="wrap">
          <Reveal>
            <p className="name">{profile.nome}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              {profile.manchete.split("—").map((parte, i) =>
                i === 1 ? <em key={i}>—{parte}</em> : parte
              )}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="sub">{profile.titulo}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="meta">
              <span>{profile.local}</span>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ----------------------------- SOBRE ----------------------------- */}
      <section className="about">
        <div className="wrap">
          <p className="eyebrow" data-num="01">Sobre</p>
          {sobre.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* -------------------------- EXPERIÊNCIA -------------------------- */}
      <section>
        <div className="wrap">
          <p className="eyebrow" data-num="02">Experiência</p>
          <div className="exp">
            {experiencias.map((e) => (
              <article className="exp-item" key={e.empresa}>
                <div className="exp-period">
                  {e.periodo}
                  {e.atual && <span className="exp-badge">atual</span>}
                  <span className="exp-badge">{e.vinculo}</span>
                </div>
                <div>
                  <h3 className="exp-role">{e.cargo}</h3>
                  <p className="exp-company">{e.empresa}</p>
                  <p className="exp-desc">{e.descricao}</p>
                  <ul className="exp-list">
                    {e.destaques.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- SKILLS ---------------------------- */}
      <section>
        <div className="wrap">
          <p className="eyebrow" data-num="03">Competências</p>
          <div className="skill-grid">
            {skills.map((g) => (
              <div key={g.categoria}>
                <p className="skill-cat">{g.categoria}</p>
                <div className="skill-tags">
                  {g.itens.map((it) => (
                    <span key={it}>{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- PROJETOS --------------------------- */}
      <section>
        <div className="wrap">
          <p className="eyebrow" data-num="04">Projetos</p>
          <div className="proj">
            {projetos.map((p) => (
              <article className="proj-card" key={p.nome}>
                <div className="proj-head">
                  <h3 className="proj-name">{p.nome}</h3>
                  <span className="proj-role">{p.papel}</span>
                </div>
                <p className="proj-summary">{p.resumo}</p>
                <ul className="proj-list">
                  {p.destaques.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <div className="proj-stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <div className="proj-links">
                  {p.repos.map((r) => (
                    <a key={r.url} href={r.url} target="_blank" rel="noreferrer">
                      {r.label} ↗
                    </a>
                  ))}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer">Demo ao vivo ↗</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------ FORMAÇÃO & CURSOS ---------------------- */}
      <section>
        <div className="wrap">
          <p className="eyebrow" data-num="05">Formação & Cursos</p>
          <div className="two-col">
            <div>
              <p className="mini-title">Formação</p>
              <ul className="mini-list">
                {formacao.map((f) => (
                  <li key={f.titulo}>
                    <strong>{f.titulo}</strong>
                    {f.instituicao} · {f.periodo}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mini-title">Cursos</p>
              <ul className="mini-list">
                {cursos.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- CONTATO ---------------------------- */}
      <section className="contact">
        <div className="wrap">
          <p className="eyebrow" data-num="06">Contato</p>
          <h2 className="section-title">
            Aberto a oportunidades em desenvolvimento de software.
          </h2>
          <div className="contact-grid">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>{profile.telefone}</span>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", width: "100%", flexWrap: "wrap", gap: 10 }}>
          <span>© {new Date().getFullYear()} {profile.nome}</span>
          <span>Goiânia · BR</span>
        </div>
      </footer>
    </main>
  );
}
