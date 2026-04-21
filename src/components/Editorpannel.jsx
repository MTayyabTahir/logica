import { useState, useEffect } from "react";
import useStore from "../Stores/useStores";

export default function EditorPanel() {
  const { selectedProject, submitNote, submittingNote, noteError } = useStore();

  const [noteText, setNoteText] = useState("");
  const [localSuccess, setLocalSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-open modal when a project is selected
  useEffect(() => {
    if (selectedProject) {
      setIsModalOpen(true);
      // Reset note form when project changes
      setNoteText("");
      setLocalSuccess(false);
    }
  }, [selectedProject]); // Re-run when selectedProject changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedProject || !noteText.trim()) return;

    setLocalSuccess(false);
    await submitNote(selectedProject.id, noteText);
    if (!noteError) {
      setNoteText("");
      setLocalSuccess(true);
      setTimeout(() => setLocalSuccess(false), 3000);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  // If no project selected, render nothing (or a subtle hint)
  // But we still need the component to exist in the tree; it can return null.
  // However, to give visual feedback, we can show a small message.
  if (!selectedProject) {
    return (
      <div className="mt-6 text-center text-gray-400 text-sm">
        Click on a project to open editor
      </div>
    );
  }

  return (
    <>
      {/* Modal Overlay - auto-opens when selectedProject exists */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          {/* Modal Content */}
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6 relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
              aria-label="Close"
            >
              &times;
            </button>

            <h3 className="text-lg font-semibold mb-3">Project Details</h3>
            <div className="space-y-2 mb-4">
              <p>
                <strong>Name:</strong> {selectedProject.title}
              </p>
              <p>
                <strong>Description:</strong>{" "}
                {selectedProject.description || "—"}
              </p>
              {/* Add more fields as needed */}
            </div>

            <h4 className="font-medium mb-2">Add a Note</h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                rows="3"
                placeholder="Write your note here..."
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                disabled={submittingNote}
              />
              <button
                type="submit"
                disabled={submittingNote || !noteText.trim()}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
              >
                {submittingNote ? "Submitting..." : "Submit Note"}
              </button>
              {noteError && <p className="text-red-500 text-sm">{noteError}</p>}
              {localSuccess && (
                <p className="text-green-600 text-sm">Note submitted!</p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
