import * as React from "react";
import type { MetaFunction } from "react-router";
import { Meta, Links, Scripts, ScrollRestoration, Outlet } from "react-router";
// import "./styles.css"; // Comentado temporalmente
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css"; // <- añadido

export const meta: MetaFunction = () => ([
  { charSet: "utf-8" },
  { title: "La Querencia" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
]);

export default function Root() {

  return (
    <html lang="es">
      <head>
        <Meta />
        {/* Roboto */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        <Links />
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Estilos responsive para el navbar */
            @media (min-width: 769px) {
              .nav-desktop {
                display: flex !important;
              }
              .nav-mobile-btn {
                display: none !important;
              }
            }
            @media (max-width: 768px) {
              .nav-desktop {
                display: none !important;
              }
              .nav-mobile-btn {
                display: inline-flex !important;
              }
            }
            
            /* Estilos responsive para el hero */
            @media (min-width: 769px) {
              .hero-section {
                height: 180vh !important;
              }
              .hero-title {
                font-size: 3rem !important; /* 5xl = 3rem */
                line-height: 1.1 !important;
                font-weight: 800 !important;
              }
              .hero-subtitle {
                font-size: 1.125rem !important; /* lg = 1.125rem */
              }
              .hero2-container {
                flex-direction: row !important;
                gap: 2.5rem !important;
                padding: 7rem 1rem !important;
              }
              .hero2-text {
                width: 58% !important;
                flex: none !important;
              }
              .hero2-image {
                width: 42% !important;
                flex: none !important;
              }
              .hero2-title {
                font-size: 6rem !important;
              }
              .hero2-buttons {
                flex-direction: row !important;
                gap: 1.5rem !important;
              }
            }
            @media (max-width: 768px) {
              .hero-section {
                height: 140vh !important;
              }
              .hero-title {
                font-size: 1.875rem !important; /* 3xl = 1.875rem */
                line-height: 1.1 !important;
                font-weight: 800 !important;
              }
              .hero-subtitle {
                font-size: 1rem !important; /* md = 1rem */
              }
              .hero2-container {
                flex-direction: column !important;
                gap: 2rem !important;
                padding: 5rem 1rem !important;
              }
              .hero2-text {
                width: 100% !important;
              }
              .hero2-image {
                width: 100% !important;
              }
              .hero2-title {
                font-size: 3rem !important;
              }
              .hero2-buttons {
                flex-direction: column !important;
                gap: 1rem !important;
              }
              .about-container {
                flex-direction: column !important;
                gap: 2rem !important;
                padding: 1.25rem !important;
              }
              .about-image {
                width: 100% !important;
              }
            }
            @media (min-width: 769px) {
              .about-container {
                flex-direction: row !important;
                gap: 3rem !important;
                padding: 2rem !important;
                align-items: center !important;
              }
              .about-image {
                width: 44% !important;
                flex-shrink: 0 !important;
              }
              .imagestrip-track {
                grid-auto-columns: 30% !important;
              }
              .imagestrip-arrow {
                opacity: 0 !important;
              }
              .imagestrip-group:hover .imagestrip-arrow {
                opacity: 0.95 !important;
              }
            }
            @media (max-width: 768px) {
              .imagestrip-track {
                grid-auto-columns: 75% !important;
              }
              .imagestrip-arrow {
                opacity: 0.85 !important;
              }
            }
            @media (min-width: 640px) and (max-width: 768px) {
              .imagestrip-track {
                grid-auto-columns: 55% !important;
              }
            }
            @media (min-width: 769px) and (max-width: 1024px) {
              .imagestrip-track {
                grid-auto-columns: 40% !important;
              }
            }
            
            /* Hover effects para ImageStrip */
            .imagestrip-track img:hover {
              transform: scale(1.035) !important;
              filter: brightness(1.03) !important;
            }
            
            /* Ocultar scrollbar */
            .imagestrip-track::-webkit-scrollbar {
              display: none !important;
            }
            
            /* Hover effects para las flechas */
            .imagestrip-arrow:hover {
              background-color: rgba(0, 0, 0, 0.5) !important;
            }
            .imagestrip-arrow:active {
              background-color: rgba(0, 0, 0, 0.6) !important;
            }
            
            /* Hover effects para navbar */
            .nav-link:hover {
              color: #15322D !important;
            }
            .nav-link-home:hover {
              color: #15322D !important;
            }
            .nav-link-dark:hover {
              color: #A8743F !important;
            }
            
            /* Tamaño del logo responsive con más padding */
            @media (min-width: 769px) {
              .navbar-logo {
                height: 96px !important;
                margin-top: 8px !important;
                margin-bottom: 8px !important;
              }
            }
            @media (max-width: 768px) {
              .navbar-logo {
                height: 72px !important;
                margin-top: 6px !important;
                margin-bottom: 6px !important;
              }
            }
            
            /* Ancho completo de la página y tipografía */
            html, body {
              width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
              font-family: 'Roboto', system-ui, -apple-system, sans-serif !important;
            }
            
            /* Asegurar que todos los elementos usen Roboto */
            * {
              font-family: 'Roboto', system-ui, -apple-system, sans-serif !important;
            }
            
            /* Hover effects para botones del hero */
            .hero-button-primary:hover {
              background-color: #A8743F !important;
            }
            .hero-button-outline:hover {
              background-color: rgba(255, 255, 255, 0.2) !important;
            }
          `
        }} />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <Footer />

        <ScrollRestoration />
        <Scripts />

        {/* (Opcional) este reload en pageshow puede generar saltos; probá quitarlo */}
        {/* 
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('pageshow', function (e) {
                if (e.persisted) location.reload();
              });
            `,
          }}
        />
        */}
      </body>
    </html>
  );
}
