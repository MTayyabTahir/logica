import { useEffect } from "react";
import useStore from "../Stores/useStores";
import ProjectCard from "./Projectcard";
import EditorPanel from "./Editorpannel";

export default function ProjectList() {
  const {
    projects,
    loading,
    error,
    fetchProjects,
    selectedProject,
    setSelectedProject,
  } = useStore();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  if (loading.projects) {
    return (
      <div className="h-125 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error.projects) {
    return (
      <div className="h-125 flex items-center justify-center text-red-500">
        {error.projects}
      </div>
    );
  }

  return (
    <div className="h-125  w-125 overflow-y-auto pr-2 custom-scroll">
      <div className="space-y-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
            isSelected={selectedProject?.id === project.id}
          />
        ))}
      </div>
      <EditorPanel />
    </div>
  );
}
