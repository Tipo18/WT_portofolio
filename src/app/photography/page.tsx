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
            <p>PHOTOGRAPHY</p>
          </div>

          <div className="project_top_section">
            <div className="project_grid">

                <div className="project_item reveal">
                  <div className="texte">
                    <br></br>
                    <br></br>
                      I stumbled across an old film camera that my grandfather had bought in Hong Kong and that my mom used back in the day. The mirror was stuck, so I tried fixing it myself but didn’t succeed, so I brought it to an old camera repair shop. After that, I used the leftover film that came with it, even though it was expired. I found it fun, so I kept going, and it’s something i really apreciate now.
                  </div>
                </div>

                <div className="project_item reveal">
                  <div className="image"><img src="photo.png" alt="photo" /></div>
                </div>
                
            </div>
          </div>

        <div className="photo_row reveal">
          <div className="photo_col">
            <img src="photo_illu(3).jpg" alt="photo 1" />
            <img src="photo_illu(5).jpg" alt="photo 2" />
          </div>

          <div className="photo_vertical">
            <img src="photo_illu(2).jpg" alt="photo 3 vertical" />
          </div>
        </div>

        <div className="photo_row reveal">
          <div className="photo_vertical">
            <img src="photo_illu(6).jpg" alt="photo 4 vertical" />
          </div>

          <div className="photo_col">
            <img src="photo_illu(1).jpg" alt="photo 5" />
            <img src="photo_illu(7).jpg" alt="photo 6" />
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
