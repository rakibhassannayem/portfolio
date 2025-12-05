import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col min-h-screen bg-background-dark text-gray-200">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <h2 className="text-2xl font-bold">Project not found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-display bg-background-dark text-gray-200 min-h-screen flex flex-col">
      <div className="px-4 sm:px-10 md:px-20 lg:px-40 py-5">
        <Navbar />
      </div>

      <main className="flex-grow container mx-auto px-4 sm:px-10 md:px-20 lg:px-40 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/#projects" className="text-primary hover:text-primary/80 mb-6 inline-block font-semibold">
            &larr; Back to Projects
          </Link>

          <h1 className="text-4xl font-black mb-6 text-white">{project.title}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <img
                src={project.image}
                alt={project.alt}
                className="w-full rounded-xl shadow-lg border border-gray-700/50"
              />

              <div className="flex gap-4 mt-6">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors border border-gray-600"
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
                <p className="text-gray-400 leading-relaxed text-lg">{project.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Technology Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 text-primary rounded-full text-sm font-medium border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Challenges Faced</h2>
                <p className="text-gray-400 leading-relaxed">{project.challenges}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Future Plans</h2>
                <p className="text-gray-400 leading-relaxed">{project.futurePlans}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailsPage;
