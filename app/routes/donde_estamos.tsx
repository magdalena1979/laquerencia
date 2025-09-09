import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function DondeEstamos() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirigir automáticamente a la página de contacto
    navigate("/contacto", { replace: true });
  }, [navigate]);

  return null;
}
