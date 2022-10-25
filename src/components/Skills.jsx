import '../styles/skills.css';
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = ({theme}) => {
    return (
      <div id={theme}>
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My technical level</span>

          <div className="skills__container container grid">
            <Frontend />
            <Backend />
          </div>
        </section>
      </div>
    );
}

export default Skills