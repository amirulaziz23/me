export default function Home() {
  return (
    <>
      <section className="container hero" id="about">
        <div>
          <h1 style={{fontSize:'56px',lineHeight:'1.1',marginBottom:'20px'}}>
            Projects, Marketing, Ads and a little bit of random thoughts and poems
          </h1>

          <p style={{fontSize:'18px',lineHeight:'1.8',maxWidth:'700px'}}>
            Based in Selangor. Passionate about projects, marketing, regional growth,
            partnerships and multi market expansion across Southeast Asia and Japan.
            And of course every culture's food scene.
          </p>

          <div className="buttons">
            <a href="#experience" className="button">My Experiences</a>
            <a href="#writings" className="button">Read Writing</a>
            <a href="mailto:amirul.aziz141018@gmail.com" className="button">Email Me</a>
          </div>
        </div>

        <img src="/images/profile.jpg" alt="Amirul Aziz" />
      </section>

      <section className="section-white" id="experience">
        <div className="container">
          <h2 style={{fontSize:'42px'}}>Working Experiences</h2>

          <div className="card">
            <h3>Yoowifi</h3>
            <p>Project and Brand Marketing Manager • Apr 2025 – Present</p>
          </div>

          <div className="card">
            <h3>TDCX Supporting Google Ads</h3>
            <p>Digital Campaign Specialist • Nov 2023 – Jul 2024</p>
          </div>

          <div className="card">
            <h3>RISE Media Asia</h3>
            <p>Media Consultant Intern • Jun 2021 – Sep 2021</p>
          </div>
        </div>
      </section>

      <section className="container" id="writings">
        <h2 style={{fontSize:'42px'}}>Writings & Poems</h2>

        <div className="card">
          <h3>Late Night Thoughts</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="card">
          <h3>A Small Poem</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </section>

      <section className="section-white" id="contact">
        <div className="container">
          <h2 style={{fontSize:'42px'}}>Contact</h2>

          <p>
            Open to collaborations, opportunities, partnerships and many more.
          </p>

          <div className="buttons">
            <a
              href="https://www.linkedin.com/in/amirulaziz23/"
              target="_blank"
              className="button"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}