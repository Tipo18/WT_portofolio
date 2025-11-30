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
            <p>CLIMBING WALL</p>
          </div>

          <div className="project_top_section">
            <div className="project_grid">

                <div className="project_item reveal">
                  <div className="texte">
                    <br></br>
                      With a team of 6 member of <a href="https://www.instagram.com/leoclimb/" target="_blank" rel="noopener noreferrer">LéoClimb</a> : the climbing club of our school, we builded a portable modular climbing wall, to create opportunities for student to climb more.
                      <br></br>
                      We had this idea of a free standing spray wall, with built-in autonomous electonics system to able to display an almost to infinite amount of climbing route. And we made it come to life with our works and the financial help of our sport departement and the Crous de Versaille
                  </div>
                </div>

                <div className="project_item reveal">
                  <div className="image"><img src="/mur.png" alt="Portable Climbing Wall" /></div>
                </div>

            </div>
          </div>

          <div className="project_images_row reveal delay-1">
            <img src="/wall_illu(1).png" alt="Camera illustration 1" />
            <img src="/wall_illu(2).gif" alt="Camera illustration 2" />
          </div>

        </div>
      </div>

      <footer className="footer">
        <p>2025 Timothée Darmaillacq</p>
      </footer>

    </div>
  );
}
