const BASE_PATH = import.meta.env.VITE_BASE_PATH;
const BACKEND_BASE_PATH = import.meta.env.VITE_BACKEND_BASE_PATH ?? "http://localhost:8080";

export default {
	BASE_PATH,
	BACKEND_BASE_PATH
};
