import React from "react";

const ratingOptions = [
  { value: "exceeds", label: "Exceeds", colorClass: "score score--blue" },
  { value: "meets", label: "Meets", colorClass: "score score--gray" },
  { value: "needs", label: "Needs focus", colorClass: "score score--red" },
];

const ratees = [
  {
    id: "riley",
    name: "Riley Morgan",
    role: "Product Design Intern",
    competencies: ["User empathy", "Visual polish", "Communication"],
  },
  {
    id: "jordan",
    name: "Jordan Lee",
    role: "Data Analyst Intern",
    competencies: ["Analytical rigor", "Storytelling", "Collaboration"],
  },
];

const completionData = [
  { name: "Riley Morgan", submitted: true, score: "4.4" },
  { name: "Jordan Lee", submitted: true, score: "4.1" },
  { name: "Casey Nguyen", submitted: false, score: "—" },
];

function JobSimulation() {
  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="eyebrow">Job Simulation · Calibration Session</p>
          <h1>Inclusive, focused feedback in a clean workflow.</h1>
          <p className="subhead">
            Capture thoughtful ratings with a minimal interface designed for calm,
            consistent evaluations.
          </p>
        </div>
        <div className="hero-card">
          <p className="label">Session status</p>
          <p className="hero-stat">24 reviewers · 68% complete</p>
          <div className="progress">
            <span className="progress-bar" style={{ width: "68%" }} />
          </div>
          <p className="helper">Next milestone at 75% completion.</p>
        </div>
      </header>

      <main className="content">
        <section className="panel">
          <div className="panel-header">
            <div>
              <h2>Student landing / identity</h2>
              <p className="muted">
                Confirm your identity before entering the rating experience.
              </p>
            </div>
            <span className="badge">Step 1</span>
          </div>
          <form className="grid" aria-label="Student identity form">
            <label className="field">
              <span>Full name</span>
              <input
                type="text"
                placeholder="Alex Carter"
                required
                autoComplete="name"
              />
            </label>
            <label className="field">
              <span>School email</span>
              <input
                type="email"
                placeholder="alex@school.edu"
                required
                autoComplete="email"
              />
            </label>
            <label className="field">
              <span>Program</span>
              <select defaultValue="">
                <option value="" disabled>
                  Select program
                </option>
                <option>Business Analytics</option>
                <option>Product Design</option>
                <option>Computer Science</option>
              </select>
            </label>
            <label className="field">
              <span>Session code</span>
              <input type="text" placeholder="SIM-2941" required />
            </label>
            <div className="actions">
              <button type="submit" className="button button--primary">
                Continue to rating
              </button>
              <button type="button" className="button button--ghost">
                Need help?
              </button>
            </div>
            <p className="error" role="alert">
              Please complete all required fields before continuing.
            </p>
          </form>
        </section>

        <section className="panel">
          <div className="panel-header">
            <div>
              <h2>Rating flow</h2>
              <p className="muted">
                Provide concise ratings for each peer. Progress is saved
                automatically.
              </p>
            </div>
            <span className="badge">Step 2</span>
          </div>

          <div className="stepper" aria-label="Rating progress">
            <div className="step is-active">
              <span className="step-dot" aria-hidden="true" />
              <div>
                <p className="step-title">Peer review</p>
                <p className="muted">2 of 6 complete</p>
              </div>
            </div>
            <div className="step">
              <span className="step-dot" aria-hidden="true" />
              <div>
                <p className="step-title">Manager calibration</p>
                <p className="muted">Pending</p>
              </div>
            </div>
            <div className="step">
              <span className="step-dot" aria-hidden="true" />
              <div>
                <p className="step-title">Finalize</p>
                <p className="muted">Upcoming</p>
              </div>
            </div>
          </div>

          <div className="cards">
            {ratees.map((ratee) => (
              <article className="card" key={ratee.id}>
                <div className="card-header">
                  <div>
                    <h3>{ratee.name}</h3>
                    <p className="muted">{ratee.role}</p>
                  </div>
                  <span className="pill">4 competencies</span>
                </div>
                <ul className="chip-list">
                  {ratee.competencies.map((competency) => (
                    <li key={competency} className="chip">
                      {competency}
                    </li>
                  ))}
                </ul>
                <fieldset className="rating" aria-label={`Rate ${ratee.name}`}>
                  <legend>Overall rating</legend>
                  <div className="rating-options">
                    {ratingOptions.map((option) => (
                      <label key={option.value} className="rating-option">
                        <input type="radio" name={`${ratee.id}-rating`} />
                        <span className={`score ${option.colorClass}`}>
                          {option.label}
                        </span>
                        <span className="sr-only">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className="field">
                  <span>Notes</span>
                  <textarea rows="3" placeholder="Add concise, actionable feedback." />
                </label>
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <div>
              <h2>Confirmation</h2>
              <p className="muted">
                Review summaries before submitting. Expand for details or refer to
                the legend.
              </p>
            </div>
            <span className="badge">Step 3</span>
          </div>

          <div className="summary">
            <div className="summary-card">
              <h3>Per-ratee summary</h3>
              <ul className="summary-list">
                <li>
                  <span>Riley Morgan</span>
                  <span className="score score--blue">Exceeds</span>
                </li>
                <li>
                  <span>Jordan Lee</span>
                  <span className="score score--gray">Meets</span>
                </li>
              </ul>
            </div>
            <div className="summary-card">
              <h3>Rating legend</h3>
              <ul className="legend">
                <li>
                  <span className="legend-dot legend-dot--blue" />
                  Exceeds expectations
                </li>
                <li>
                  <span className="legend-dot legend-dot--gray" />
                  Meets expectations
                </li>
                <li>
                  <span className="legend-dot legend-dot--red" />
                  Needs focus area
                </li>
              </ul>
            </div>
          </div>

          <div className="accordion">
            <details open>
              <summary>
                Riley Morgan — Product Design Intern
                <span className="score score--blue">Exceeds</span>
              </summary>
              <p className="muted">
                Strong user empathy and refined visual polish. Continue to
                encourage concise stakeholder updates.
              </p>
            </details>
            <details>
              <summary>
                Jordan Lee — Data Analyst Intern
                <span className="score score--gray">Meets</span>
              </summary>
              <p className="muted">
                Clear analytical rigor with steady collaboration. Recommend
                additional storytelling practice on executive summaries.
              </p>
            </details>
          </div>

          <div className="actions">
            <button className="button button--primary">Submit ratings</button>
            <button className="button button--ghost">Edit feedback</button>
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <div>
              <h2>Admin session dashboard</h2>
              <p className="muted">
                Upload rosters, review completion, and export consolidated
                results.
              </p>
            </div>
            <span className="badge">Admin</span>
          </div>

          <div className="dashboard">
            <div className="card">
              <h3>Uploads</h3>
              <p className="muted">
                Import CSV rosters and rubric updates. Files remain private.
              </p>
              <div className="upload">
                <input id="roster" type="file" />
                <label htmlFor="roster" className="button button--secondary">
                  Select file
                </label>
              </div>
            </div>

            <div className="card">
              <h3>Completion</h3>
              <p className="muted">Track who has submitted ratings.</p>
              <ul className="completion">
                {completionData.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <span className={item.submitted ? "status" : "status muted"}>
                      {item.submitted ? `Submitted · ${item.score}` : "Pending"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3>Exports</h3>
              <p className="muted">Download summary reports and raw data.</p>
              <div className="actions">
                <button className="button button--primary">Export summary</button>
                <button className="button button--secondary">Export raw</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default JobSimulation;
