import * as React from "react";
import Header from "../components/header";
import Navigator from "../components/navigator";
import Project from "../components/projects";
import Blog from "../components/blog";
import Logos from "../components/logos";
import Contact from  "../components/contact";
import Footer from "../components/footer";
import "../styles/global.css"
import "../styles/style.css"

const IndexPage = () => {
  return (
    <main>
      <Header/>
      <Navigator/>
      <Project/>
      <Blog />
      <Logos/>
      <Contact />
      <Footer />
    </main>
  )
}

export default IndexPage