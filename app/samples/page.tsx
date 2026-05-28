"use client"

import { useState } from "react"

export default function SamplesPage() {
  const [activeDosha, setActiveDosha] = useState<"vata" | "pitta" | "kapha">("vata")
  const [emailValues, setEmailValues] = useState({ vata: "", pitta: "", kapha: "" })
  const [successStates, setSuccessStates] = useState({ vata: false, pitta: false, kapha: false })
  const [loadingStates, setLoadingStates] = useState({ vata: false, pitta: false, kapha: false })

  async function submitEmail(dosha: "vata" | "pitta" | "kapha") {
    const email = emailValues[dosha].trim()
    if (!email || !email.includes("@")) return
    setLoadingStates(s => ({ ...s, [dosha]: true }))
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      setSuccessStates(s => ({ ...s, [dosha]: true }))
    } catch {
      setLoadingStates(s => ({ ...s, [dosha]: false }))
    }
  }

  return (
    <>
      <style>{`
        .samples-page { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Georgia, serif; background: #faf8f4; color: #2c2218; line-height: 1.7; }
        .page-header { max-width: 760px; margin: 0 auto; padding: 4rem 2rem 2.5rem; text-align: center; }
        .page-tag { display: inline-block; background: #f5f0e8; color: #7a5c3e; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.3rem 0.9rem; border-radius: 2rem; margin-bottom: 1.25rem; }
        .page-header h1 { font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 800; color: #3d2e1e; line-height: 1.2; letter-spacing: -0.5px; margin-bottom: 1rem; }
        .page-header p { color: #7a6a58; font-size: 1.05rem; max-width: 540px; margin: 0 auto; }
        .tab-bar { display: flex; justify-content: center; gap: 0.75rem; padding: 0 2rem 2rem; flex-wrap: wrap; }
        .tab { padding: 0.5rem 1.4rem; border-radius: 2rem; font-size: 0.88rem; font-weight: 600; cursor: pointer; border: 1.5px solid transparent; transition: all 0.2s; }
        .tab-vata-active { background: #5a8fa3; color: white; border-color: #5a8fa3; }
        .tab-vata-inactive { background: transparent; color: #5a8fa3; border-color: #5a8fa3; opacity: 0.7; }
        .tab-pitta-active { background: #b85c3a; color: white; border-color: #b85c3a; }
        .tab-pitta-inactive { background: transparent; color: #b85c3a; border-color: #b85c3a; opacity: 0.7; }
        .tab-kapha-active { background: #4a6741; color: white; border-color: #4a6741; }
        .tab-kapha-inactive { background: transparent; color: #4a6741; border-color: #4a6741; opacity: 0.7; }
        .section-label { max-width: 860px; margin: 0 auto 1.5rem; padding: 0 2rem; display: flex; align-items: center; gap: 1rem; }
        .section-label h2 { font-size: 1.25rem; font-weight: 700; color: #3d2e1e; }
        .plan-badge { background: #f5f0e8; border: 1px solid #e0d8cc; color: #7a5c3e; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.2rem 0.7rem; border-radius: 2rem; }
        .pages-grid { max-width: 860px; margin: 0 auto 1rem; padding: 0 2rem; display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.25rem; }
        .sample-card { background: white; border: 1px solid #e0d8cc; border-radius: 1rem; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.04); }
        .card-header { padding: 1rem 1.25rem 0.75rem; border-bottom: 1px solid #e0d8cc; background: #f5f0e8; }
        .day-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #7a5c3e; margin-bottom: 0.2rem; }
        .card-header h3 { font-size: 1rem; font-weight: 700; color: #3d2e1e; }
        .card-body { padding: 1rem 1.25rem; }
        .meal-row { margin-bottom: 0.85rem; }
        .meal-time { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #c8843a; margin-bottom: 0.2rem; }
        .meal-name { font-size: 0.92rem; font-weight: 600; color: #3d2e1e; margin-bottom: 0.15rem; }
        .meal-desc { font-size: 0.8rem; color: #7a6a58; line-height: 1.5; }
        .meal-tags { display: flex; flex-wrap: wrap; gap: 0.3rem; margin-top: 0.35rem; }
        .tag { font-size: 0.68rem; font-weight: 600; padding: 0.15rem 0.5rem; border-radius: 1rem; }
        .tag-green { background: #eaf2e8; color: #3d6437; border: 1px solid #c5dcc1; }
        .tag-blue { background: #e6f0f5; color: #3a6e84; border: 1px solid #b8d4e0; }
        .yoga-time { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #4a6741; margin-bottom: 0.2rem; }
        .pose-list { display: flex; flex-direction: column; gap: 0.35rem; margin-top: 0.4rem; }
        .pose-item { display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; }
        .pose-name { color: #2c2218; font-weight: 500; }
        .pose-duration { color: #7a6a58; font-size: 0.75rem; }
        .locked-card { background: white; border: 1px dashed #e0d8cc; border-radius: 1rem; overflow: hidden; position: relative; }
        .locked-content { padding: 0; filter: blur(3px); pointer-events: none; user-select: none; }
        .locked-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(250,248,244,0.1) 0%, rgba(250,248,244,0.97) 60%); display: flex; flex-direction: column; align-items: center; justify-content: flex-end; padding: 1.5rem 1.25rem 1.25rem; text-align: center; z-index: 2; }
        .lock-icon { font-size: 1.5rem; margin-bottom: 0.4rem; }
        .locked-label { font-size: 0.8rem; font-weight: 600; color: #7a5c3e; }
        .unlock-cta { max-width: 860px; margin: 2rem auto 1rem; padding: 0 2rem; }
        .unlock-box { border-radius: 1.25rem; padding: 2.5rem 2rem; text-align: center; color: white; }
        .unlock-box h3 { font-size: 1.4rem; font-weight: 800; margin-bottom: 0.5rem; }
        .unlock-box p { opacity: 0.85; font-size: 0.95rem; margin-bottom: 1.5rem; max-width: 440px; margin-left: auto; margin-right: auto; }
        .email-row { display: flex; gap: 0.6rem; max-width: 420px; margin: 0 auto; flex-wrap: wrap; justify-content: center; }
        .email-input { flex: 1; min-width: 200px; padding: 0.75rem 1.1rem; border-radius: 2rem; border: none; font-size: 0.92rem; outline: none; background: white; color: #2c2218; }
        .btn-unlock { background: #c8843a; color: white; font-weight: 700; font-size: 0.9rem; padding: 0.75rem 1.5rem; border-radius: 2rem; border: none; cursor: pointer; white-space: nowrap; }
        .btn-unlock:hover { background: #b5732a; }
        .privacy-note { font-size: 0.75rem; opacity: 0.6; margin-top: 0.75rem; }
        .success-msg { font-size: 1.05rem; font-weight: 600; padding: 1rem; }
        .other-doshas { max-width: 860px; margin: 3rem auto 0; padding: 0 2rem 4rem; }
        .other-doshas h2 { font-size: 1.1rem; font-weight: 700; color: #3d2e1e; margin-bottom: 1.25rem; text-align: center; }
        .dosha-preview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .dp-card { border-radius: 1rem; padding: 1.5rem; }
        .dp-pitta { background: linear-gradient(135deg, #fdf0eb 0%, #fae4da 100%); border: 1px solid #f0ccc0; }
        .dp-kapha { background: linear-gradient(135deg, #eaf2e8 0%, #d8ebd5 100%); border: 1px solid #c0d9bc; }
        .dp-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.5rem; }
        .dp-pitta .dp-label { color: #b85c3a; }
        .dp-kapha .dp-label { color: #4a6741; }
        .dp-title { font-size: 1rem; font-weight: 700; color: #3d2e1e; margin-bottom: 0.5rem; }
        .dp-desc { font-size: 0.83rem; color: #7a6a58; line-height: 1.55; margin-bottom: 1rem; }
        .dp-items { list-style: none; padding: 0; margin: 0; }
        .dp-items li { font-size: 0.82rem; color: #2c2218; padding: 0.25rem 0; border-bottom: 1px solid rgba(0,0,0,0.06); display: flex; align-items: center; gap: 0.4rem; }
        .dp-items li:last-child { border-bottom: none; }
        .dp-locked-bar { background: rgba(0,0,0,0.06); border-radius: 0.5rem; padding: 0.6rem 0.9rem; font-size: 0.78rem; color: #7a6a58; text-align: center; font-weight: 500; margin-top: 0.85rem; }
        @media (max-width: 600px) {
          .pages-grid { grid-template-columns: 1fr; padding: 0 1.25rem; }
          .section-label, .unlock-cta, .other-doshas { padding: 0 1.25rem; }
          .dosha-preview-grid { grid-template-columns: 1fr; }
          .other-doshas { padding-bottom: 3rem; }
        }
      `}</style>

      <div className="samples-page">
        <div className="page-header">
          <div className="page-tag">Sample Plans</div>
          <h1>A taste of what&apos;s inside<br />your personalized kit</h1>
          <p>Every DoshaFlow kit is built for your constitution. Here&apos;s a preview of what Vata, Pitta, and Kapha members receive — meal plans, movement, and daily rituals tailored to how your body actually works.</p>
        </div>

        {/* TABS */}
        <div className="tab-bar">
          <button className={`tab ${activeDosha === "vata" ? "tab-vata-active" : "tab-vata-inactive"}`} onClick={() => setActiveDosha("vata")}>Vata (Air + Space)</button>
          <button className={`tab ${activeDosha === "pitta" ? "tab-pitta-active" : "tab-pitta-inactive"}`} onClick={() => setActiveDosha("pitta")}>Pitta (Fire + Water)</button>
          <button className={`tab ${activeDosha === "kapha" ? "tab-kapha-active" : "tab-kapha-inactive"}`} onClick={() => setActiveDosha("kapha")}>Kapha (Earth + Water)</button>
        </div>

        {/* VATA PANEL */}
        {activeDosha === "vata" && (
          <div>
            <div className="section-label">
              <h2>7-Day Vata Meal Plan</h2>
              <span className="plan-badge">Sample — Days 1–3</span>
            </div>
            <div className="pages-grid">
              {/* Day 1 */}
              <div className="sample-card">
                <div className="card-header"><div className="day-label">Day 1 · Monday</div><h3>Ground &amp; Nourish</h3></div>
                <div className="card-body">
                  <div className="meal-row"><div className="meal-time">Morning · 7:30am</div><div className="meal-name">Warm spiced oatmeal</div><div className="meal-desc">Rolled oats with ghee, cinnamon, cardamom, soaked raisins and a drizzle of raw honey.</div><div className="meal-tags"><span className="tag tag-green">Grounding</span><span className="tag tag-blue">Vata-pacifying</span></div></div>
                  <div className="meal-row"><div className="meal-time">Lunch · 12:30pm</div><div className="meal-name">Red lentil dal with basmati rice</div><div className="meal-desc">Soft dal with cumin, ginger, turmeric and ghee. Served warm with steamed carrots.</div><div className="meal-tags"><span className="tag tag-green">Main meal</span></div></div>
                  <div className="meal-row"><div className="meal-time">Evening · 6:00pm</div><div className="meal-name">Kitchari with roasted root vegetables</div><div className="meal-desc">Split mung beans and rice with warming spices. Deeply settling for the nervous system.</div><div className="meal-tags"><span className="tag tag-blue">Light dinner</span></div></div>
                  <div className="meal-row"><div className="meal-time">Bedtime · 9:30pm</div><div className="meal-name">Golden milk</div><div className="meal-desc">Warm milk with turmeric, black pepper, ashwagandha, and a pinch of nutmeg.</div></div>
                </div>
              </div>
              {/* Day 2 */}
              <div className="sample-card">
                <div className="card-header"><div className="day-label">Day 2 · Tuesday</div><h3>Warm &amp; Steady</h3></div>
                <div className="card-body">
                  <div className="meal-row"><div className="meal-time">Morning · 7:30am</div><div className="meal-name">Stewed apple with ghee</div><div className="meal-desc">Sliced apple cooked with ghee, cinnamon and clove. Followed by a soft-boiled egg and warm herbal tea.</div><div className="meal-tags"><span className="tag tag-green">Easy digestion</span></div></div>
                  <div className="meal-row"><div className="meal-time">Lunch · 12:30pm</div><div className="meal-name">Vegetable soup with fresh bread</div><div className="meal-desc">Slow-cooked seasonal vegetables, bone or vegetable stock, bay leaf, black pepper.</div><div className="meal-tags"><span className="tag tag-blue">Vata-pacifying</span></div></div>
                  <div className="meal-row"><div className="meal-time">Snack · 4:00pm</div><div className="meal-name">Dates with almond butter</div><div className="meal-desc">3–4 medjool dates with almond butter. Steadies Vata energy in the late afternoon dip.</div><div className="meal-tags"><span className="tag tag-green">Energy bridge</span></div></div>
                  <div className="meal-row"><div className="meal-time">Evening · 6:00pm</div><div className="meal-name">Sesame noodles with sautéed greens</div><div className="meal-desc">Rice noodles, toasted sesame oil, tamari, wilted spinach, ginger, and toasted sesame seeds.</div></div>
                </div>
              </div>
              {/* Day 3 */}
              <div className="sample-card">
                <div className="card-header"><div className="day-label">Day 3 · Wednesday</div><h3>Rest &amp; Restore</h3></div>
                <div className="card-body">
                  <div className="meal-row"><div className="meal-time">Morning · 7:30am</div><div className="meal-name">Warm rice porridge (congee)</div><div className="meal-desc">Slow-cooked white rice with ginger, sesame oil, spring onion. Light on the digestive system.</div><div className="meal-tags"><span className="tag tag-green">Digestive reset</span></div></div>
                  <div className="meal-row"><div className="meal-time">Lunch · 12:30pm</div><div className="meal-name">Mung bean kitchari</div><div className="meal-desc">Whole mung beans, basmati rice, cumin seeds, mustard seeds, turmeric, and a generous amount of ghee.</div><div className="meal-tags"><span className="tag tag-blue">Cleansing</span><span className="tag tag-green">Balancing</span></div></div>
                  <div className="meal-row"><div className="meal-time">Evening · 6:00pm</div><div className="meal-name">Stuffed sweet potato</div><div className="meal-desc">Baked sweet potato with black beans, sautéed greens, tahini, cumin and lime.</div><div className="meal-tags"><span className="tag tag-green">Grounding</span></div></div>
                </div>
              </div>
              {/* Days 4-7 locked */}
              <div className="locked-card">
                <div className="locked-content">
                  <div style={{background:"#f5f0e8",padding:"1rem 1.25rem 0.75rem",borderBottom:"1px solid #e0d8cc"}}><div style={{fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#7a5c3e",marginBottom:"0.2rem"}}>Days 4–7</div><div style={{fontSize:"1rem",fontWeight:700,color:"#3d2e1e"}}>Sustain &amp; Thrive</div></div>
                  <div style={{padding:"1rem 1.25rem"}}>
                    <div style={{marginBottom:"0.7rem",fontSize:"0.85rem",color:"#7a6a58"}}>Day 4 — Digestive fire reset with warming kitchari breakfast, spiced lentil lunch, ginger broth evening</div>
                    <div style={{marginBottom:"0.7rem",fontSize:"0.85rem",color:"#7a6a58"}}>Day 5 — Protein focus: soaked almonds, egg dishes, well-cooked meats for Vata strength</div>
                    <div style={{marginBottom:"0.7rem",fontSize:"0.85rem",color:"#7a6a58"}}>Day 6 — Herbal integration: teas, churnas, and the daily supplement routine</div>
                    <div style={{fontSize:"0.85rem",color:"#7a6a58"}}>Day 7 — Weekly reset meal and planning your second week</div>
                  </div>
                </div>
                <div className="locked-overlay"><div className="lock-icon">🔒</div><div className="locked-label">Days 4–7 included in your full kit</div></div>
              </div>
            </div>

            {/* YOGA SECTION */}
            <div className="section-label" style={{marginTop:"2.5rem"}}>
              <h2>Vata Movement &amp; Yoga Plan</h2>
              <span className="plan-badge">Sample — Sessions 1–3</span>
            </div>
            <div className="pages-grid">
              {/* Session 1 */}
              <div className="sample-card">
                <div className="card-header"><div className="day-label">Session 1 · Morning Grounding</div><h3>Root &amp; Settle — 30 min</h3></div>
                <div className="card-body">
                  <div className="meal-row"><div className="yoga-time">Opening · 5 min</div><div className="meal-name">Seated breath awareness</div><div className="meal-desc">Three rounds of slow diaphragmatic breathing (4 counts in, 6 counts out). Settles scattered Vata mind.</div></div>
                  <div className="meal-row"><div className="yoga-time">Main Practice · 20 min</div><div className="meal-name">Grounding flow sequence</div>
                    <div className="pose-list">
                      <div className="pose-item"><span className="pose-name">Mountain Pose (Tadasana)</span><span className="pose-duration">1 min</span></div>
                      <div className="pose-item"><span className="pose-name">Chair Pose (Utkatasana)</span><span className="pose-duration">30 sec × 3</span></div>
                      <div className="pose-item"><span className="pose-name">Warrior I</span><span className="pose-duration">45 sec each side</span></div>
                      <div className="pose-item"><span className="pose-name">Forward Fold (slow)</span><span className="pose-duration">2 min</span></div>
                      <div className="pose-item"><span className="pose-name">Child&apos;s Pose</span><span className="pose-duration">3 min</span></div>
                    </div>
                  </div>
                  <div className="meal-row"><div className="yoga-time">Close · 5 min</div><div className="meal-name">Savasana with grounding intention</div><div className="meal-desc">Lie with a blanket. Visualize roots growing from the base of the spine into the earth.</div></div>
                </div>
              </div>
              {/* Session 2 */}
              <div className="sample-card">
                <div className="card-header"><div className="day-label">Session 2 · Midweek Reset</div><h3>Slow Flow — 25 min</h3></div>
                <div className="card-body">
                  <div className="meal-row"><div className="yoga-time">Opening · 5 min</div><div className="meal-name">Nadi Shodhana (alternate nostril breathing)</div><div className="meal-desc">10 rounds. The single best pranayama for calming Vata&apos;s scattered nervous system.</div></div>
                  <div className="meal-row"><div className="yoga-time">Main Practice · 15 min</div><div className="meal-name">Hip &amp; lower back sequence</div>
                    <div className="pose-list">
                      <div className="pose-item"><span className="pose-name">Supine knee hugs</span><span className="pose-duration">2 min</span></div>
                      <div className="pose-item"><span className="pose-name">Reclined pigeon</span><span className="pose-duration">2 min each side</span></div>
                      <div className="pose-item"><span className="pose-name">Supta Baddha Konasana</span><span className="pose-duration">3 min</span></div>
                      <div className="pose-item"><span className="pose-name">Legs up the wall</span><span className="pose-duration">5 min</span></div>
                    </div>
                  </div>
                  <div className="meal-row"><div className="yoga-time">Note</div><div className="meal-desc">Vata types benefit from slow, still poses held longer. Avoid strong dynamic flows. Warmth in the room is important.</div></div>
                </div>
              </div>
              {/* Session 3 */}
              <div className="sample-card">
                <div className="card-header"><div className="day-label">Session 3 · Evening Wind-Down</div><h3>Nervous System Release — 20 min</h3></div>
                <div className="card-body">
                  <div className="meal-row"><div className="yoga-time">Opening · 3 min</div><div className="meal-name">Abhyanga self-massage (optional)</div><div className="meal-desc">Warm sesame oil on feet and lower legs before the sequence. Signals safety to the nervous system.</div></div>
                  <div className="meal-row"><div className="yoga-time">Main Practice · 15 min</div><div className="meal-name">Yin sequence for sleep</div>
                    <div className="pose-list">
                      <div className="pose-item"><span className="pose-name">Dragon pose (hip flexor)</span><span className="pose-duration">3 min each side</span></div>
                      <div className="pose-item"><span className="pose-name">Caterpillar (seated forward fold)</span><span className="pose-duration">4 min</span></div>
                      <div className="pose-item"><span className="pose-name">Supine twist</span><span className="pose-duration">2 min each side</span></div>
                      <div className="pose-item"><span className="pose-name">Savasana</span><span className="pose-duration">5 min</span></div>
                    </div>
                  </div>
                  <div className="meal-row"><div className="yoga-time">Kit Add-On</div><div className="meal-desc">Full kit includes a 7-session progression, weekly walks protocol, breath practices for anxiety, and a playlist for each session.</div><div className="meal-tags" style={{marginTop:"0.4rem"}}><span className="tag tag-green">7 sessions total</span><span className="tag tag-blue">Audio included</span></div></div>
                </div>
              </div>
              {/* Sessions 4-7 locked */}
              <div className="locked-card">
                <div className="locked-content">
                  <div style={{background:"#f5f0e8",padding:"1rem 1.25rem 0.75rem",borderBottom:"1px solid #e0d8cc"}}><div style={{fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#7a5c3e",marginBottom:"0.2rem"}}>Sessions 4–7</div><div style={{fontSize:"1rem",fontWeight:700,color:"#3d2e1e"}}>Full Movement Program</div></div>
                  <div style={{padding:"1rem 1.25rem"}}>
                    <div style={{marginBottom:"0.6rem",fontSize:"0.83rem",color:"#7a6a58"}}>Session 4 — Building heat safely: warming flow for cold, stiff Vata joints</div>
                    <div style={{marginBottom:"0.6rem",fontSize:"0.83rem",color:"#7a6a58"}}>Session 5 — Walking protocol: 30-min grounding walk with breath timing</div>
                    <div style={{marginBottom:"0.6rem",fontSize:"0.83rem",color:"#7a6a58"}}>Session 6 — Strength for Vata: resistance work that grounds without depleting</div>
                    <div style={{fontSize:"0.83rem",color:"#7a6a58"}}>Session 7 — Weekly integration and building your 30-day routine</div>
                  </div>
                </div>
                <div className="locked-overlay"><div className="lock-icon">🔒</div><div className="locked-label">Sessions 4–7 in your full kit</div></div>
              </div>
            </div>

            {/* VATA EMAIL CTA */}
            <div className="unlock-cta">
              <div className="unlock-box" style={{background:"linear-gradient(135deg, #4a6741 0%, #354e2d 100%)"}}>
                <h3>Get your full personalized Vata kit</h3>
                <p>All 7 days of meals, 7 movement sessions, daily rituals, herbal recommendations, and your dosha breakdown — tailored to you.</p>
                {!successStates.vata ? (
                  <div className="email-row">
                    <input type="email" className="email-input" placeholder="Your email address" value={emailValues.vata} onChange={e => setEmailValues(s => ({...s, vata: e.target.value}))} />
                    <button className="btn-unlock" onClick={() => submitEmail("vata")} disabled={loadingStates.vata}>{loadingStates.vata ? "..." : "Get the Full Kit →"}</button>
                  </div>
                ) : (
                  <div className="success-msg">✓ You&apos;re on the list. Full kit coming your way.</div>
                )}
                <p className="privacy-note">No spam. Just your plan. Unsubscribe anytime.</p>
              </div>
            </div>

            {/* OTHER DOSHAS TEASER */}
            <div className="other-doshas">
              <h2>Not sure which type you are? <a href="/quiz" style={{color:"#c8843a",textDecoration:"none"}}>Take the quiz →</a></h2>
              <div className="dosha-preview-grid">
                <div className="dp-card dp-pitta" style={{cursor:"pointer"}} onClick={() => setActiveDosha("pitta")}>
                  <div className="dp-label">Pitta · Fire + Water</div>
                  <div className="dp-title">Cool, Calm &amp; Focused</div>
                  <div className="dp-desc">Prone to heat, inflammation, and burnout. The Pitta plan centers cooling foods and movement that channels fire without burning out.</div>
                  <ul className="dp-items"><li>Coconut, cucumber, fennel, coriander</li><li>Moon salutations over sun salutations</li><li>Sitali cooling breath practice</li></ul>
                  <div className="dp-locked-bar">Click to preview Pitta plan →</div>
                </div>
                <div className="dp-card dp-kapha" style={{cursor:"pointer"}} onClick={() => setActiveDosha("kapha")}>
                  <div className="dp-label">Kapha · Earth + Water</div>
                  <div className="dp-title">Light, Warm &amp; Moving</div>
                  <div className="dp-desc">Prone to heaviness and sluggishness. The Kapha plan uses stimulating foods and vigorous daily movement to create fire and energy.</div>
                  <ul className="dp-items"><li>Millet, buckwheat, ginger, black pepper</li><li>Brisk morning walks before eating</li><li>Kapalabhati breath to clear and energize</li></ul>
                  <div className="dp-locked-bar">Click to preview Kapha plan →</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PITTA PANEL */}
        {activeDosha === "pitta" && (
          <div>
            <div style={{maxWidth:"760px",margin:"0 auto",padding:"0 2rem"}}>
              <div className="dosha-preview-grid">
                <div className="dp-card dp-pitta">
                  <div className="dp-label">Pitta · 7-Day Meal Plan Preview</div>
                  <div className="dp-title">Cool, Calm &amp; Nourishing</div>
                  <div className="dp-desc">Pitta runs hot. Your plan centers cooling foods, moderate protein, and anti-inflammatory ingredients to balance fire without suppressing it.</div>
                  <ul className="dp-items"><li>Coconut and cucumber-based cooling breakfasts</li><li>Leafy green salads with lime (allowed for Pitta)</li><li>Basmati rice, fennel, coriander, and sweet vegetables</li><li>Avoiding nightshades, chili, vinegar, and fermented foods</li><li>Pomegranate, coconut water, and rose-based herbal teas</li></ul>
                  <div className="dp-locked-bar">🔒 Full 7-day plan in your Pitta kit</div>
                </div>
                <div className="dp-card dp-pitta">
                  <div className="dp-label">Pitta · Movement Plan Preview</div>
                  <div className="dp-title">Release Without Pushing</div>
                  <div className="dp-desc">Pittas tend to over-exercise and push too hard. Your movement plan channels fire productively while preventing burnout from intensity.</div>
                  <ul className="dp-items"><li>Moon salutations over sun salutations</li><li>Swimming, cycling, and nature walks (not competitive runs)</li><li>Twisting poses to wring out stored heat in the liver and gut</li><li>Sitali breath (cooling pranayama) before and after sessions</li><li>Mandatory rest days built into the schedule</li></ul>
                  <div className="dp-locked-bar">🔒 Full 7-session plan in your Pitta kit</div>
                </div>
              </div>
              <div className="unlock-cta" style={{padding:0,marginTop:"1.5rem"}}>
                <div className="unlock-box" style={{background:"linear-gradient(135deg, #9e3e22 0%, #7a2f18 100%)"}}>
                  <h3>Get your Pitta kit</h3>
                  <p>7-day cooling meal plan, movement sessions built for fire types, and Pitta-specific herbal and ritual recommendations.</p>
                  {!successStates.pitta ? (
                    <div className="email-row">
                      <input type="email" className="email-input" placeholder="Your email address" value={emailValues.pitta} onChange={e => setEmailValues(s => ({...s, pitta: e.target.value}))} />
                      <button className="btn-unlock" onClick={() => submitEmail("pitta")} disabled={loadingStates.pitta}>{loadingStates.pitta ? "..." : "Join the Waitlist →"}</button>
                    </div>
                  ) : (
                    <div className="success-msg">✓ You&apos;re on the list. Your Pitta kit is coming.</div>
                  )}
                  <p className="privacy-note">No spam. Just your plan.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* KAPHA PANEL */}
        {activeDosha === "kapha" && (
          <div>
            <div style={{maxWidth:"760px",margin:"0 auto",padding:"0 2rem"}}>
              <div className="dosha-preview-grid">
                <div className="dp-card dp-kapha">
                  <div className="dp-label">Kapha · 7-Day Meal Plan Preview</div>
                  <div className="dp-title">Light, Warm &amp; Stimulating</div>
                  <div className="dp-desc">Kapha runs cool and slow. Your plan uses light, dry, spiced foods to kindle digestive fire and prevent the sluggishness Kaphas are prone to.</div>
                  <ul className="dp-items"><li>Light grains: millet, buckwheat, barley over wheat and rice</li><li>Strong spices: black pepper, ginger, mustard seed, fenugreek</li><li>Bitter greens, legumes, and astringent vegetables</li><li>Avoiding dairy, sugar, cold foods, and heavy oils</li><li>Honey (the only sweetener that doesn&apos;t aggravate Kapha)</li></ul>
                  <div className="dp-locked-bar">🔒 Full 7-day plan in your Kapha kit</div>
                </div>
                <div className="dp-card dp-kapha">
                  <div className="dp-label">Kapha · Movement Plan Preview</div>
                  <div className="dp-title">Move Every Day, Vary It</div>
                  <div className="dp-desc">Kaphas need consistent movement more than any other type — vigorous enough to generate heat and break stagnation.</div>
                  <ul className="dp-items"><li>Brisk morning walks before breakfast (essential for Kapha)</li><li>Dynamic sun salutations and vinyasa flow</li><li>Kapalabhati breath (bellows breathing) to clear congestion</li><li>Strength training to counter Kapha&apos;s tendency toward weight gain</li><li>Cold water exposure as a morning wake-up tool</li></ul>
                  <div className="dp-locked-bar">🔒 Full 7-session plan in your Kapha kit</div>
                </div>
              </div>
              <div className="unlock-cta" style={{padding:0,marginTop:"1.5rem"}}>
                <div className="unlock-box" style={{background:"linear-gradient(135deg, #4a6741 0%, #354e2d 100%)"}}>
                  <h3>Get your Kapha kit</h3>
                  <p>7-day stimulating meal plan, daily movement sessions built for earth types, and Kapha-specific herbs and morning rituals.</p>
                  {!successStates.kapha ? (
                    <div className="email-row">
                      <input type="email" className="email-input" placeholder="Your email address" value={emailValues.kapha} onChange={e => setEmailValues(s => ({...s, kapha: e.target.value}))} />
                      <button className="btn-unlock" onClick={() => submitEmail("kapha")} disabled={loadingStates.kapha}>{loadingStates.kapha ? "..." : "Join the Waitlist →"}</button>
                    </div>
                  ) : (
                    <div className="success-msg">✓ You&apos;re on the list. Your Kapha kit is coming.</div>
                  )}
                  <p className="privacy-note">No spam. Just your plan.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
