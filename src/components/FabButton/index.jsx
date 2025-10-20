
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
    FaFileAlt,
    FaEye
} from "react-icons/fa";

function FabButton() {
    return (
        <div className="fab fab-flower">
            {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
            <div tabIndex={0} role="button" className="btn btn-lg btn-circle"><FaEye /></div>

            {/* Main Action button replaces the original button when FAB is open */}
            <button className="fab-main-action btn btn-circle btn-lg"></button>

            {/* buttons that show up when FAB is open */}
            <button className="btn btn-lg btn-circle">
                            <a
                            href="https://github.com/AdiyoFouad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform text-xl duration-500 hover:-rotate-15 hover:scale-125 "
                            >
                                <FaGithub />
                </a></button>
            
            <button className="btn btn-lg btn-circle">
                <a
                href="https://linkedin.com/in/adiyo-fouad-odjouoye"
                target="_blank"
                rel="noopener noreferrer"
                            className="transition-transform text-xl duration-500 hover:-rotate-15 hover:scale-125 "
                >
                    <FaLinkedin />
                </a></button>
            <button className="btn btn-lg btn-circle">
                <a
                href="mailto:fouad.odjouoye@etudiant.univ-rennes.fr"
                            className="transition-transform text-xl duration-500 hover:-rotate-15 hover:scale-125 "
                >
                    <FaEnvelope />
                </a></button>
            <button className="btn btn-lg btn-circle">
                <a
                href="cv_fouad_odjouoye.pdf"
                target="_blank"
                rel="noopener noreferrer"
                            className="transition-transform text-xl duration-500 hover:-rotate-15 hover:scale-125 "
                >
                    <FaFileAlt />
                </a> </button>
        </div>
    );
}

export default FabButton
