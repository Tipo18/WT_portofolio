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
            <p>SURFBOARD</p>
          </div>

          <div className="project_top_section">
            <div className="project_grid">

                <div className="project_item reveal">
                  <div className="texte">
                    <br></br>
                    With <a href="https://www.instagram.com/lavaguedevinci/" target="_blank" rel="noopener noreferrer">La Vague de Vinci</a>, the surfing club we recently launched at my university, we decided to shape our own surfboard. We reached out to professionals around Paris, and Gary from l’Atelier du Ride offered to guide us. Using the shared workspace he has with Polybus Surfboards, we began building our board.
                    <br></br>
                    <br></br>
                    We chose a short and chunky shape easy to ride and convenient to carry. Going through every step of the shaping and glassing process was fascinating. It's really a complex craft requiring precision in volume, symmetry, and technique.
                    <br></br>
                    <br></br>
                    This project completely changed how I look at the boards I already own. I now appreciate every detail—the lightness, channels, rail work—and riding a board we created ourselves was incredibly rewarding.
                      </div>
                </div>

                <div className="project_item reveal">
                  <div className="image"><img src="surf_illu(1).gif" alt="Shapping a surfboard" /></div>
                </div>
                
            </div>
          </div>

          <div className="project_images_row_surf reveal delay-1">
            <img src="surf_illu(2).png" alt="Camera illustration 1" />
            <div className="video-wrapper">
            <video controls preload="none" aria-label="Video player">
              <source src="surf_illu(3).mov" type="video/quicktime" />
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
