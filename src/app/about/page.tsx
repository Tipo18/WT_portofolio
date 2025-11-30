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
          <div className="text_about reveal">
            <p>
            If you're curious about my work or have questions about any of my projects,  
            I'd be glad to talk. Feel free to reach out anytime.</p>
          </div>

          <div className="contact_block reveal">
            <p className="contact_title">Contact</p>
            <p>
              Email: <a href="mailto:tim.darma@hotmail.fr">tim.darma@hotmail.fr</a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="little_bot">
        <p>Who doesn't like catching a sunset ?</p>
      </div>

        <footer className="footer">
          <p>2025 Timothée Darmaillacq</p>
        </footer>
    </div>
  );
}
