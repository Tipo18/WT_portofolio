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
            <p>SATELITE SEARCH</p>
          </div>

          <div className="project_top_section">
            <div className="project_grid">

                <div className="project_item reveal">
                  <div className="texte">
                    <br></br>
                      In a group of 3 we created a dipole antenna using a tall stick, some metal wire cuted, and a cable connected to a USB key reader. To capture the correct wavelength, the wire needed to be a specific length and set at a specific angle ours was 120. 
                      <br></br>
                      With this setup, we were able to listen to radio signals, which was already pretty awesome. After that, we tracked down old weather satellites that transmit real-time images of Earth via radio signals.
                  </div>
                </div>

                <div className="project_item reveal">
                  <div className="image"><img src="/NOAA.png" alt="satelite image" /></div>
                </div>
                
            </div>
          </div>

          <div className="project_images_row_surf reveal delay-1">
            <img src="/NOAA_illu(3).jpeg" alt="satelite image illustration 1" />
            <img src="/NOAA_illu(1).png" alt="satelite image illustration 2" />
          </div>


          <div className="project_images_col reveal delay-1">
          <audio controls>
            <source src="/NOAA_illu(2).mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <p>An extract of the recieved signals, which encode the image</p>
          </div>

        </div>
      </div>

      <footer className="footer">
        <p>2025 Timothée Darmaillacq</p>
      </footer>

    </div>
  );
}
