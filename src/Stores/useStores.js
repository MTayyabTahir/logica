// stores/useStore.js
import { create } from "zustand";
import {
  fetchProjects,
  fetchLeaderboard,
  fetchUser,
  submitNote,
} from "../services/api";

const useStore = create((set, get) => ({
  // ========== State ==========
  projects: [],
  leaderboard: [],
  user: null,
  selectedProject: null,
  notes: [], // not needed for POST, but could store local notes list
  loading: {
    projects: false,
    leaderboard: false,
    user: false,
    noteSubmit: false,
  },
  error: {
    projects: null,
    leaderboard: null,
    user: null,
    noteSubmit: null,
  },

  // ========== Actions ==========
  fetchProjects: async () => {
    set({
      loading: { ...get().loading, projects: true },
      error: { ...get().error, projects: null },
    });
    try {
      const data = await fetchProjects();
      set({ projects: data, loading: { ...get().loading, projects: false } });
    } catch (err) {
      set({
        error: { ...get().error, projects: err.message },
        loading: { ...get().loading, projects: false },
      });
    }
  },

  fetchLeaderboard: async () => {
    set({
      loading: { ...get().loading, leaderboard: true },
      error: { ...get().error, leaderboard: null },
    });
    try {
      const data = await fetchLeaderboard();
      set({
        leaderboard: data,
        loading: { ...get().loading, leaderboard: false },
      });
    } catch (err) {
      set({
        error: { ...get().error, leaderboard: err.message },
        loading: { ...get().loading, leaderboard: false },
      });
    }
  },

  fetchUser: async () => {
    set({
      loading: { ...get().loading, user: true },
      error: { ...get().error, user: null },
    });
    try {
      const data = await fetchUser();
      set({ user: data, loading: { ...get().loading, user: false } });
    } catch (err) {
      set({
        error: { ...get().error, user: err.message },
        loading: { ...get().loading, user: false },
      });
    }
  },

  setSelectedProject: (project) => set({ selectedProject: project }),

  submitNote: async (noteText, projectId) => {
    set({
      loading: { ...get().loading, noteSubmit: true },
      error: { ...get().error, noteSubmit: null },
    });
    try {
      await submitNote({
        text: noteText,
        projectId,
        timestamp: new Date().toISOString(),
      });
      set({ loading: { ...get().loading, noteSubmit: false } });
      return true; // success indicator
    } catch (err) {
      set({
        error: { ...get().error, noteSubmit: err.message },
        loading: { ...get().loading, noteSubmit: false },
      });
      return false;
    }
  },

  // Reset errors (optional)
  clearError: (key) => set({ error: { ...get().error, [key]: null } }),
}));

export default useStore;
