"use client";

import { useEffect } from "react";
import Link from "next/link";
import { sunset } from '@/app/sunset.js'
import { animation } from '@/app/animation.js'
import { cursor } from '@/app/cursor.js'

export default function Portfolio() {
sunset()
animation()
cursor()

  return (
    <div className="mainFrame">
      <div className="cursor-dot"></div>
      <div className="navbar">
        <p className="navEl">
          Timothée Darmaillacq
        </p>
        <div className="navEl" >
          <Link href="/">
            Home
          </Link>
          <Link href="/about">
            About
          </Link>
        </div>
      </div>

      <div className="body">
        <div className="full_page">
          <div id="glow"></div>

          <div className="titre_projet reveal">
            <p>CAMERA T-1</p>
          </div>

          <div className="project_top_section">
            <div className="project_grid">

                <div className="project_item reveal">
                  <div className="texte">
                    <br></br>
                    <br></br>
                      A camera that lets you travel through time by revealing archival photographs of the exact place where you stand.
                      By overlaying past images onto your present surroundings, it trys to offers a unique glimpse into how the world and the lives of those before us has evolved.
                  </div>
                </div>

                <div className="project_item reveal">
                  <div className="image"><img src="/cam.png" alt="Portable Climbing Wall" /></div>
                </div>
                
            </div>
          </div>

            <div className="project_images_col reveal delay-1">
              <img src="/cam_illu(1).png" alt="Camera illustration 1" />
              <img src="/cam_illu(2).png" alt="Camera illustration 2" />
            </div>

        </div>
      </div>

      <footer className="footer">
        <p>2025 Timothée Darmaillacq</p>
      </footer>

    </div>
  );
}
