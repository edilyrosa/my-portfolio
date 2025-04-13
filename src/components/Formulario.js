"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

const Formulario = () => {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    console.log('funciona', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    
  }, []);

  const validarCampo = (name, value) => {
    let error = "";
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "name" && !nombreRegex.test(value)) error = "Nombre inválido";
    if (name === "email" && !emailRegex.test(value)) error = "Email inválido";
    if (name === "message" && value.length > 1000) error = "Máx. 1000 caracteres";

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const isValid = !Object.values(errors).some(Boolean);

    if (isValid) {
      try {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form
        );
        setSuccess(true);
        form.reset();
        setErrors({});
        setTimeout(() => setSuccess(false), 5000);
      } catch (error) {
        console.error("Error al enviar el email:", error);
        alert("Hubo un error al enviar el mensaje.");
      }
    }
  };

  return (
    <Box
      className="bg-gray-900"
      component="form"
      ref={formRef}
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        margin: "auto",
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {success && <Alert severity="success">¡Message sent successfully✅!</Alert>}

      <TextField
        fullWidth
        label="Your Name"
        name="name"
        margin="normal"
        InputProps={{style: { color: "white" } }}
        sx={{
            backgroundColor: "#000", // Fondo blanco del input
            "& .MuiInputBase-input": { color: "white" }, // Texto dentro del input blanco
            "& .MuiInputLabel-root": { color: "white" }, // Label flotante blanco
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" }, // Borde normal blanco
              "&:hover fieldset": { borderColor: "cyan" }, // Borde al pasar el mouse
              "&.Mui-focused fieldset": { borderColor: "cyan" }, // Borde al hacer focus
            },
          }}
        onBlur={(e) => validarCampo(e.target.name, e.target.value)}
        error={Boolean(errors.name)}
        helperText={errors.name}
      />

      <TextField
        fullWidth
        label="Your Email"
        name="email"
        type="email"
        margin="normal"
        InputProps={{style: { color: "white" } }}
        sx={{
            backgroundColor: "#000", // Fondo blanco del input
            "& .MuiInputBase-input": { color: "white" }, // Texto dentro del input blanco
            "& .MuiInputLabel-root": { color: "white" }, // Label flotante blanco
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" }, // Borde normal blanco
              "&:hover fieldset": { borderColor: "cyan" }, // Borde al pasar el mouse
              "&.Mui-focused fieldset": { borderColor: "cyan" }, // Borde al hacer focus
            },
          }}
        onBlur={(e) => validarCampo(e.target.name, e.target.value)}
        error={Boolean(errors.email)}
        helperText={errors.email}
      />

      <TextField
        fullWidth
        label="Your Message"
        name="message"
        multiline
        rows={4}
        margin="normal"
        sx={{
            backgroundColor: "#000", // Fondo blanco del input
            "& .MuiInputBase-input": { color: "white" }, // Texto dentro del input blanco
            "& .MuiInputLabel-root": { color: "white" }, // Label flotante blanco
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" }, // Borde normal blanco
              "&:hover fieldset": { borderColor: "cyan" }, // Borde al pasar el mouse
              "&.Mui-focused fieldset": { borderColor: "cyan" }, // Borde al hacer focus
            },
          }}
        InputProps={{style: { color: "white" } }}
        onBlur={(e) => validarCampo(e.target.name, e.target.value)}
        error={Boolean(errors.message)}
        helperText={errors.message}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          marginTop: 2,
          width: "100%",
          backgroundColor: "cyan",
          color: "#000",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#00bcd4" },
        }}
      >
        Send🚀
      </Button>
    </Box>
  );
};

export default Formulario;
