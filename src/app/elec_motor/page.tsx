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
            <p>ELECTRIC MOTOR</p>
          </div>

          <div className="project_top_section">
            <div className="project_grid">

                <div className="project_item reveal">
                  <div className="texte">
                    <br></br>
                      In my first year of engineering school, we were tasked with creating a rolling vehicle from scratch.
                    <br></br>
                    <br></br>
                      One of the main challenges was building an electric motor. We designed a three-phase motor with a coil rotor and a magnet stator, which, after multiple attempts, worked well engough
                  </div>
                </div>

                <div className="project_item reveal">
                  <div className="image"><img src="motor.png" alt="Portable Climbing Wall" /></div>
                </div>
                
            </div>
          </div>

          <div className="project_images_row reveal delay-1">
            <div className="video-wrapper">
            <video controls preload="none" aria-label="Video player">
              <source src="motor_illu(1).mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
            </div>
          </div>

        </div>
      </div>

      <footer className="footer">
        <p>2025 Timothée Darmaillacq</p>
      </footer>

    </div>
  );
}
