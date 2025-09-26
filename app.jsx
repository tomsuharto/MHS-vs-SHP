const { useEffect, useMemo, useState } = React;

function useScrollSpy(ids = []){
  const [active, setActive] = useState(ids[0] || null);
  useEffect(() => {
    const observers = [];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if(!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting){
          setActive(id);
        }
      }, { rootMargin: "-40% 0px -55% 0px", threshold: [0, 1] });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [ids.join('|')]);
  return active;
}

const Section = ({ id, title, children }) => (
  <section id={id} className="card">
    <h2>{title}</h2>
    <hr className="sep" />
    {children}
  </section>
);

const Table = ({ head=[], rows=[] }) => (
  <table className="table">
    <thead>
      <tr>{head.map((h,i)=><th key={i}>{h}</th>)}</tr>
    </thead>
    <tbody>
      {rows.map((r,ri)=>(
        <tr key={ri}>{r.map((c,ci)=><td key={ci}>{c}</td>)}</tr>
      ))}
    </tbody>
  </table>
);

function App(){
  const data = window.REPORT_DATA;
  const ids = [
    "exec","profiles","key-finding","academics","student-exp","regional","financials",
    "research","decisions","success","methodology","final","sources"
  ];
  const active = useScrollSpy(ids);
  const [light, setLight] = useState(false);

  useEffect(()=>{
    document.documentElement.classList.toggle('light', light);
  }, [light]);

  return (
    <>
      <header className="site">
        <div className="toolbar">
          <div className="title">
            <b>{data.title}</b> <span className="badge">Report</span>
          </div>
          <div className="controls">
            <button onClick={()=>setLight(v=>!v)}>{light ? "Dark Mode" : "Light Mode"}</button>
            <button onClick={()=>window.print()}>Print / Save PDF</button>
          </div>
        </div>
      </header>

      <div className="wrapper">
        <aside className="toc">
          <h3>Contents</h3>
          {[
            ["exec","Executive Summary"],
            ["profiles","School Profiles Overview"],
            ["key-finding","Key Finding: Elite Outcomes"],
            ["academics","Academic Performance"],
            ["student-exp","Student Experience"],
            ["regional","Regional Context"],
            ["financials","Financial Analysis"],
            ["research","Research-Based Insights"],
            ["decisions","Decision Framework"],
            ["success","Critical Success Factors"],
            ["methodology","Methodological Concerns"],
            ["final","Final Recommendations"],
            ["sources","Data Sources & Methodology"]
          ].map(([id,label])=>(
            <a key={id} href={"#"+id} className={active===id ? "active" : ""}>{label}</a>
          ))}
        </aside>

        <main className="report">
          <section className="card" id="hero">
            <h1># {data.title}</h1>
            <h2>## {data.subtitle}</h2>
          </section>

          <Section id="exec" title="Executive Summary">
            {data.execSummary.map((p,i)=><p key={i}>{p}</p>)}
          </Section>

          <Section id="profiles" title="School Profiles Overview">
            <h3>Montclair High School</h3>
            <ul>
              <li><b>Type</b>: {data.profiles.montclair.type}</li>
              <li><b>Enrollment</b>: {data.profiles.montclair.enrollment}</li>
              <li><b>Annual Cost</b>: {data.profiles.montclair.annualCost}</li>
              <li><b>Total 4-Year Cost</b>: {data.profiles.montclair.totalCost}</li>
              <li><b>Student-Teacher Ratio</b>: {data.profiles.montclair.ratio}</li>
              <li><b>Graduating Class Size</b>: {data.profiles.montclair.classSize}</li>
              <li><b>NJ State Ranking</b>: {data.profiles.montclair.ranking}</li>
              <li><b>PolarisList HYP Ranking</b>: {data.profiles.montclair.polaris}</li>
              <li><b>Niche Overall Grade</b>: {data.profiles.montclair.niche}</li>
            </ul>
            <hr className="sep" />
            <h3>Seton Hall Preparatory School</h3>
            <ul>
              <li><b>Type</b>: {data.profiles.shp.type}</li>
              <li><b>Enrollment</b>: {data.profiles.shp.enrollment}</li>
              <li><b>Annual Tuition</b>: {data.profiles.shp.annualCost}</li>
              <li><b>Total 4-Year Cost</b>: {data.profiles.shp.totalCost}</li>
              <li><b>Student-Teacher Ratio</b>: {data.profiles.shp.ratio}</li>
              <li><b>Graduating Class Size</b>: {data.profiles.shp.classSize}</li>
              <li><b>Ranking</b>: {data.profiles.shp.ranking}</li>
              <li><b>PolarisList HYP Ranking</b>: {data.profiles.shp.polaris}</li>
              <li><b>Niche Overall Grade</b>: {data.profiles.shp.niche}</li>
            </ul>
          </Section>

          <Section id="key-finding" title="Key Finding: Nearly Identical Elite College Outcomes">
            <div className="kpi">
              <div className="box">
                <b>≈ 2.8%</b>
                Montclair Ivy League matriculation
              </div>
              <div className="box">
                <b>2.67%</b>
                Seton Hall Prep Ivy League matriculation
              </div>
              <div className="box">
                <b>15–20%</b>
                SHP Elite placement (T25 + LAC10)
              </div>
              <div className="box">
                <b>~15%</b>
                MHS Elite placement (historical)
              </div>
            </div>
            <h3>Ivy League Breakdown (SHP 2024)</h3>
            <ul>
              {data.ivyRates.shpBreakdown.map((s,i)=><li key={i}>{s}</li>)}
            </ul>
            <p><b>Top 50 Universities Placement</b>: SHP {data.top50.shp}; MHS {data.top50.montclair}</p>
            <p><b>Four-Year College Attendance</b>: SHP {data.fourYear.shp}; MHS {data.fourYear.montclair}</p>
          </Section>

          <Section id="academics" title="Academic Performance Comparison">
            <h3>Standardized Test Scores</h3>
            <Table head={["Metric","Montclair High","Seton Hall Prep","Difference"]} rows={data.tests} />
            <p><i>Note</i>: Significant discrepancies exist between official school data and Niche self-reported data. Official sources are generally more reliable for planning purposes.</p>

            <h3>Advanced Placement Programs</h3>
            <ul>
              <li><b>Montclair High</b>: {data.apPrograms.montclair}</li>
              <li><b>Seton Hall Prep</b>: {data.apPrograms.shp}</li>
            </ul>

            <h3>Academic Achievement Indicators</h3>
            <ul>
              <li><b>Montclair High</b>: {data.achievements.montclair}</li>
              <li><b>Seton Hall Prep</b>: {data.achievements.shp}</li>
            </ul>
          </Section>

          <Section id="student-exp" title="Student Experience Analysis">
            <h3>Niche.com Student Survey Results — Safety & Environment</h3>
            <Table head={["Metric","Montclair High","Seton Hall Prep","Advantage"]} rows={data.nicheSafety} />
            <h3>Teacher Quality Ratings</h3>
            <Table head={["Metric","Montclair High","Seton Hall Prep","Advantage"]} rows={data.teacherQuality} />
            <h3>Clubs & Activities</h3>
            <Table head={["Metric","Montclair High","Seton Hall Prep","Advantage"]} rows={data.clubs} />

            <h3>Qualitative Student Experience</h3>
            <h4>Montclair High School — Strengths</h4>
            <ul>{data.qualInsights.montclair.strengths.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <h4>Montclair High School — Challenges</h4>
            <ul>{data.qualInsights.montclair.challenges.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <blockquote>{data.qualInsights.montclair.quote}</blockquote>

            <h4>Seton Hall Preparatory — Strengths</h4>
            <ul>{data.qualInsights.shp.strengths.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <h4>Seton Hall Preparatory — Challenges</h4>
            <ul>{data.qualInsights.shp.challenges.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <blockquote>{data.qualInsights.shp.quote}</blockquote>
          </Section>

          <Section id="regional" title="Regional Context: New Jersey Elite School Rankings">
            <h3>Elite Tier (15–25% Ivy League Rates)</h3>
            <ul>{data.njContext.eliteTier.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <h3>High-Performing Tier (2–10% Ivy League Rates)</h3>
            <ul>{data.njContext.highTier.map((s,i)=><li key={i}>{s}</li>)}</ul>
          </Section>

          <Section id="financials" title="Financial Analysis and Opportunity Costs">
            <h3>Direct Costs</h3>
            <ul>{data.finances.direct.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <h3>Alternative Investment Strategy</h3>
            <ul>{data.finances.altInvest.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <h3>Return on Investment</h3>
            <p>{data.finances.roi}</p>
          </Section>

          <Section id="research" title="Research-Based Insights">
            <ol>{data.research.map((s,i)=><li key={i}>{s}</li>)}</ol>
          </Section>

          <Section id="decisions" title="Decision Framework">
            <h3>Choose Montclair High School If</h3>
            <h4>Academic Factors</h4>
            <ul>{data.decisions.pickMHS.academic.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <h4>Social/Cultural Factors</h4>
            <ul>{data.decisions.pickMHS.social.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <h4>Financial Factors</h4>
            <ul>{data.decisions.pickMHS.financial.map((s,i)=><li key={i}>{s}</li>)}</ul>

            <h3>Choose Seton Hall Preparatory School If</h3>
            <h4>Academic Factors</h4>
            <ul>{data.decisions.pickSHP.academic.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <h4>Social/Cultural Factors</h4>
            <ul>{data.decisions.pickSHP.social.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <h4>Financial Factors</h4>
            <ul>{data.decisions.pickSHP.financial.map((s,i)=><li key={i}>{s}</li>)}</ul>
          </Section>

          <Section id="success" title="Critical Success Factors for Each School">
            <h3>Montclair High School Success Strategy</h3>
            <ol>{data.successFactors.mhs.map((s,i)=><li key={i}>{s}</li>)}</ol>
            <h3>Seton Hall Prep Success Strategy</h3>
            <ol>{data.successFactors.shp.map((s,i)=><li key={i}>{s}</li>)}</ol>
          </Section>

          <Section id="methodology" title="Methodological Concerns: “Top 50 Universities” Analysis">
            <p><b>Reliable Data</b>: {data.methodologyConcerns.reliable}</p>
            <h4>Problematic Methodology</h4>
            <ul>{data.methodologyConcerns.problems.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <p><b>Recommendation</b>: {data.methodologyConcerns.recommendation}</p>
          </Section>

          <Section id="final" title="Final Recommendations">
            <h3>{data.finalRecs.headline}</h3>
            <ul>{data.finalRecs.rationale.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <h4>Exception: Seton Hall Preparatory School</h4>
            <ul>{data.finalRecs.exceptions.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <p><b>The Bottom Line</b>: {data.finalRecs.bottomLine}</p>
          </Section>

          <Section id="sources" title="Data Sources and Methodology Notes">
            <h4>Primary Sources</h4>
            <ul>{data.sources.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <h4>Analysis Limitations</h4>
            <ul>{data.limitations.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <h4>Verification Needs</h4>
            <ul>{data.verificationNeeds.map((s,i)=><li key={i}>{s}</li>)}</ul>
            <footer>
              <small>Report compiled from comprehensive data analysis including official school statistics, college placement records, student surveys, and peer-reviewed educational research.</small>
            </footer>
          </Section>

          <footer>
            Built with ❤️ in React. Toggle light/dark, print to PDF, and use the sticky table of contents to navigate.
          </footer>
        </main>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
