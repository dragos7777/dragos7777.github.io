import React, { useRef, useState } from "react";
import About from "./components/About";
import DotNavigation from "./components/DotNavigation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Section from "./components/Section";
import TechStack from "./components/TechStack";
import Timeline from "./components/Timeline";
import Window from "./components/Window";

function App() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const scroll1 = () => ref1.current.scrollIntoView();
  const scroll2 = () => ref2.current.scrollIntoView();
  const scroll3 = () => ref3.current.scrollIntoView();
  const scroll4 = () => ref4.current.scrollIntoView();
  const scroll5 = () => ref5.current.scrollIntoView();
  const scroll6 = () => ref6.current.scrollIntoView();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (position) => {
    setScrollPosition(position);
  };
  const scrollPoz = scrollPosition;
  return (
    <>
      <DotNavigation onScroll={handleScroll}>
        <Section
          ref={ref1}
          color="blue"
          scroll={scroll1}
          id="s1"
          title={"HOME"}
        >
          <Hero />
        </Section>
        <Section
          ref={ref2}
          color="red"
          scroll={scroll2}
          id="s2"
          title={"ABOUT"}
        >
          <Window title={"ABOUT ME"}>
            <About scrollPoz={scrollPoz} />
          </Window>
        </Section>
        <Section
          ref={ref3}
          color="green"
          scroll={scroll3}
          id="s3"
          title={"SKILLS"}
        >
          <Window title={"TECHNICAL SKILLS"}>
            <TechStack scrollPoz={scrollPoz} />
          </Window>
        </Section>
        <Section
          ref={ref4}
          color="orange"
          scroll={scroll4}
          id="s4"
          title={"EVOLUTION"}
        >
          <Window title={"EDUCATION & WORK EXPERIENCE"}>
            <Timeline scrollPoz={scrollPoz} />
          </Window>
        </Section>
        <Section
          ref={ref5}
          color="orange"
          scroll={scroll5}
          id="s5"
          title={"PROJECTS"}
        >
          <Window title={"PROJECTS"}>
            <Project scrollPoz={scrollPoz} />
          </Window>
        </Section>

        <Footer
          ref={ref6}
          color="orange"
          scroll={scroll6}
          id="s6"
          title={"CONTACT"}
        />
      </DotNavigation>
    </>
  );
}

export default App;
