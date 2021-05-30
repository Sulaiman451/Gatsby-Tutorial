import React from "react"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {children}
        {/* content for each page */}
        <p>Copyright 2021 Web Warrior</p>
      </div>
    </div>
  )
}
