import { RENDER_PAGE } from "../../constants/home/home";

export function renderPage(payload) {
    return { type: RENDER_PAGE, payload }
  };