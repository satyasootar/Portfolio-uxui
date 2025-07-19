import { useEffect } from "react";
import { NavbarWithDrawer } from "./components/NavbarWithDrawer";
import Routing from "./Routing/Routing";
import { Footer } from "./components/Footer";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { Analytics } from '@vercel/analytics/react';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div id="smooth-wrapper" className="cursor-none">
      {/* ✅ Sidebar fixed outside smooth-scroll area */}
      <NavbarWithDrawer />

      {/* ✅ ScrollSmoother applies only to content below */}
      <div id="smooth-content">
        <div className="px-[1.25rem] tablet:px-[4rem] laptop:pl-[15rem] laptop:ml-25">
          <div className="laptop:pt-[6rem] pt-[1.5rem] pr-4 laptop:min-w-[800px]">
            <Routing />
            <Footer />
           <Analytics mode="production" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
