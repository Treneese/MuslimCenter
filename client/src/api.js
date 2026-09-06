const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

export function apiUrl(path) {
  return `${API_BASE}${path}`;
}

export function mediaUrl(path) {
  if (!path) return "";

  // Already a complete URL
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // Backend-relative uploaded file
  return `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
}