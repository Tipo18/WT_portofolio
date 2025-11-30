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

      <div className="text_intro reveal">
        <p>
          I design and build interactive objects that use technology to invite
          people to explore and better understand the world around them
        </p>
      </div>

      <div className="body">
        <div id="glow"></div>

      <div className="featured_section">
        <div className="featured_grid">
            <a href="/WT_portofolio/WT_portofolio/cam_t-1" className="featured_item reveal delay-1">
              <div className="image"><img src="cam.png" alt="Camera T-1" /></div>
              <div className="texte">
                <div className="titre">Camera T-1</div>
                <div className="corps">
                  An archive-finding camera to travel through time in the place you are
                </div>
              </div>
            </a>

          <a href="/WT_portofolio/climbing_wall"className="featured_item reveal delay-2">
            <div className="image"><img src="mur.png" alt="Portable Climbing Wall" /></div>
            <div className="texte">
              <div className="titre">Portable Climbing Wall</div>
              <div className="corps">
                A free-standing spray wall with an autonomous electronics route system
              </div>
            </div>
          </a>

          <a href="/WT_portofolio/surf_shape"className="featured_item reveal delay-3">
            <div className="image"><img src="surf.png" alt="Shaping a Surfboard" /></div>
            <div className="texte">
              <div className="titre">Shaping a Surfboard</div>
              <div className="corps">
                Associative project of designing and creating our own surfboard
              </div>
            </div>
          </a>
        </div>
      </div>


        {/* Other Projects */}
        <div className="project reveal">
          <a href="/WT_portofolio/satelite_catching"className="image">
            <img src="NOAA.png" alt="satelite_catching" />
          </a>
          <a href="/WT_portofolio/satelite_catching" className="texte">
            <div className="titre">Catching Satelite</div>
            <div className="corps">
              DIY radio antenna to capture images from NOAA meteo satelite
            </div>
          </a>
        </div>

        <div className="project reveal">
          <a href="/WT_portofolio/photography" className="image">
            <img src="photo.png" alt="photography" />
          </a>
          <a href="/WT_portofolio/photography" className="texte">
            <div className="titre">Photography</div>
            <div className="corps">
              some photo made through the years when I felt like it
            </div>
          </a>
        </div>

        <div className="project reveal">
          <a href="/WT_portofolio/CNN_echocard" className="image">
            <img src="CNN.png" alt="CNN_echocard" />
          </a>
          <a href="/WT_portofolio/CNN_echocard" className="texte">
            <div className="titre">CNN for echocardiography</div>
            <div className="corps">
              Assembling of a microcontroler pcb and developpement of applications
            </div>
          </a>
        </div>

        <div className="project reveal">
          <a href="/WT_portofolio/elec_motor" className="image">
            <img src="motor.png" alt="elec_motor" />
          </a>
          <a href="/WT_portofolio/elec_motor" className="texte">
            <div className="titre">3D printed electric motor</div>
            <div className="corps">
              Assembling of a microcontroler pcb and developpement of applications
            </div>
          </a>
        </div>
      </div>



      <footer className="footer">
        <p>2025 Timothée Darmaillacq</p>
      </footer>
    </div>
  );
}