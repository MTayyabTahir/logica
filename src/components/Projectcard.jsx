export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-200  transition-all duration-300 
      rounded-2xl p-5 flex items-start gap-4 cursor-pointer"
    >
      {/* Avatar */}
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="avatar"
        className="w-12 h-12 rounded-full object-cover border-2 border-blue-400 shadow"
      />

      {/* Text */}
      <div>
        <h4 className="text-blue-400 font-bold text-lg">{project.title}</h4>
        <p className="text-gray-500 text-sm mt-1">{project.description}</p>
      </div>
    </div>
  );
}
