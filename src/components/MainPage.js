import Nav from "./Nav";
import Landing from "./Landing";
import CaseStudy from "./CaseStudy";
import Presentation from "./Presentation";
import OurTeam from "./OurTeam";
import { useEffect, useRef } from "react";

const MainPage = () => {
  const landingRef = useRef(null);
  const caseStudyRef = useRef(null);
  const presentationRef = useRef(null);
  const ourTeamRef = useRef(null);

  useEffect(() => {
    let observer;

    if (landingRef.current && caseStudyRef.current && presentationRef.current && ourTeamRef) {
      const options = {
        threshold: 0.5,
      };

      observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          console.log("entry is", entry);
          const navElement = document.querySelector(`a[href="/#${entry.target.id}"]`);

          if (entry.isIntersecting) {
            if (!navElement.classList.contains('active')) {
              navElement.classList.add('active')
            }
          } else if (navElement.classList.contains('active')) {
            navElement.classList.remove('active')
          }
        })
      }, options);

      observer.observe(landingRef.current);
      observer.observe(caseStudyRef.current);
      observer.observe(presentationRef.current);
      observer.observe(ourTeamRef.current);
    }
  }, [landingRef, caseStudyRef, presentationRef, ourTeamRef]);

  return (
    <div className="App">
      <Nav />
      <Landing />
      <CaseStudy />
      <Presentation />
      <OurTeam />
    </div>
  );
}

export default MainPage;