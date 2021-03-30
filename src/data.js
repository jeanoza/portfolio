import axios from "axios";

//About button images
export const btnImages = () => axios("/api/about/images");

//About-page > Competences
export const competenceApi = () => axios("/api/about/competences");

//About-page > Me
export const meApi = () => axios("/api/about/owner");

// about-page > SideProject
export const projectApi = () => axios("/api/about/projects");
