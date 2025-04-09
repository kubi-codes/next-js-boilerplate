import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

import _our_story_content_1 from "./_our_story.content_1";
import _our_story_content_2 from "./_our_story.content_2";
import _our_story_content_3 from "./_our_story.content_3";
import _our_story_content_4 from "./_our_story.content_4";
import _our_story_content_5 from "./_our_story.content_5";
import _our_story_content_8 from "./_our_story.content_8";
import _our_story_content_14 from "./_our_story.content_14";

function Our_story() {
  const scrollRef = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        direction: "horizontal", // Mengaktifkan horizontal scrolling
      });

      return () => {
        scroll.destroy();
      };
    })();
  }, [scrollRef]);

  return (
    <Box
      ref={scrollRef}
      sx={{
        display: "flex", // Untuk membuat efek horizontal scroll
        width: "1500vw", // Dua layar penuh (15x100vw)
        height: "100vh",
        overflow: "hidden",
      }}
      data-scroll-container
    >
      <_our_story_content_1 />
      <_our_story_content_2 />
      <_our_story_content_3 />
      <_our_story_content_4 />
      <_our_story_content_5 />
      <_our_story_content_8 />
      <_our_story_content_14 />
    </Box>
  );
}

export default Our_story;
