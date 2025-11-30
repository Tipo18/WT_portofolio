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
            <p>ML ECHO-CARDIO</p>
          </div>

          <div className="project_top_section">
            <div className="project_grid">

                <div className="project_item reveal">
                  <div className="texte">
                    <br></br>
                      I've reproduce the methodology and result of research paper of applied Machine Learning for medical purposes
                      <br></br>
                      <br></br>
                      <a href="https://www.creatis.insa-lyon.fr/~bernard/publis/tmi_2019_leclerc.pdf" target="_blank">Leclerc, S. et al. (2019). Deep learning for segmentation using an open large-scale dataset in 2d echocardiography. <i>IEEE Transactions on Medical Imaging</i>, 38(9), 2198–2210.</a>
                      <br></br>
                      <br></br>
                      <p>Here is the link to my academic submission: <br></br> <a href="Applied_Research_Darmaillacq_Timothee.pdf" target="_blank">View PDF</a></p> 
                  
                  </div>
                </div>

                <div className="project_item reveal">
                  <div className="image"><img src="/WT_portofolio/CNN.png" alt="illu cnn echo cardio" /></div>
                </div>
                
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
