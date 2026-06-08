export interface ContactEmailProps {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message: string;
}

/** Escapa texto del usuario para insertarlo de forma segura en el HTML. */
function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  return `<p style="font-size:14px;margin:6px 0;color:#475569;">
    <span style="font-weight:bold;color:#1e293b;">${esc(label)}: </span>
    <span style="color:#475569;">${esc(value)}</span>
  </p>`;
}

/**
 * Genera el HTML del email de contacto (sin react-email para evitar el render
 * de componentes React, que falla con Resend en Next 16). Mismo diseño/paleta.
 */
export function renderContactEmailHtml({
  name,
  phone,
  email,
  service,
  message,
}: ContactEmailProps): string {
  return `<!doctype html>
<html lang="es">
  <head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /></head>
  <body style="background-color:#eaf8ee;font-family:Arial,Helvetica,sans-serif;margin:0;padding:24px 0;">
    <div style="max-width:560px;margin:0 auto;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #dcf3e3;">
      <div style="background-color:#178a3a;padding:24px 28px;">
        <p style="color:#ffffff;font-size:18px;font-weight:bold;margin:0;">Clínica Hispana Nueva Salud La Porte</p>
        <p style="color:#dcf3e3;font-size:13px;margin:4px 0 0;">Nueva solicitud del formulario web</p>
      </div>
      <div style="padding:28px;">
        <h1 style="color:#1e293b;font-size:18px;margin:0 0 16px;">Datos del contacto</h1>
        ${row("Nombre", name)}
        ${row("Teléfono", phone)}
        ${email ? row("Correo", email) : ""}
        ${row("Servicio de interés", service || "Consulta general")}
        <hr style="border:none;border-top:1px solid #dcf3e3;margin:20px 0;" />
        <p style="font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#64748b;margin:0 0 6px;">Mensaje</p>
        <p style="font-size:14px;line-height:1.6;color:#1e293b;margin:0;white-space:pre-wrap;">${esc(message)}</p>
      </div>
      <div style="background-color:#f4fcf6;padding:16px 28px;border-top:1px solid #dcf3e3;">
        <p style="font-size:12px;color:#64748b;margin:0;">Responde a este correo para contactar al paciente.</p>
      </div>
    </div>
  </body>
</html>`;
}
