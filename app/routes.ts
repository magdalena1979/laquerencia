import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("servicios", "routes/servicios.tsx"), 
  route("quienes_somos", "routes/quienes_somos.tsx"),
  route("donde_estamos", "routes/donde_estamos.tsx"), 
  route("padrillos", "routes/padrillos.tsx"),
  route("contacto", "routes/contacto.tsx"),
] satisfies RouteConfig;
