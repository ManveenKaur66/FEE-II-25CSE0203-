import React from 'react'

const projects = () => {
  const projects = [
    { id: 1, title: "Study Planner", skills: "React" },
    { id: 2, title: "E-commerce App", skills: "JavaScript" },
    { id: 3, title: "Stock UI", skills: "HTML and CSS" }
  ]

  return (
    <>
      <h2>Projects</h2>
      <ol>
        {
          projects.map((project) => {
            return <li key={project.id}>{project.title}</li>
          })
        }
      </ol>
    </>
  )
}

export default projects