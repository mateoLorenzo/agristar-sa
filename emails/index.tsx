import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  name?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  area?: string;
  message?: string;
}

export default function ContactFormEmail({
  name,
  lastName,
  email,
  phone,
  area,
  message,
}: ContactFormEmailProps) {
  // Mapeo de áreas para mostrar el nombre completo
  const areaNames: Record<string, string> = {
    tecnica: "Técnica",
    "comercial-cuyo": "Comercial Zona Cuyo (Mendoza, San Luis, San Juan)",
    // "comercial-sur-ba":
    "comercial-valle":
      "Comercial Zona Valle (Río Negro, Neuquén, Sur de Buenos Aires hasta Viedma)",
    "comercial-sur-ba":
      "Comercial Zona Sur Buenos Aires (Sudeste de Buenos Aires)",
    "comercial-ba-sf":
      "Comercial Zona Buenos Aires y Santa Fe (Cinturón Hortícola La Plata, San Pedro y Mar del Plata)",
  };

  const areaDisplay = area ? areaNames[area] || area : "No especificada";

  return (
    <Html>
      <Head />
      <Preview>
        Nueva consulta de contacto de {name || "un usuario"} {lastName || ""}
      </Preview>
      <Tailwind>
        <Body className="bg-[#F9FAFB] font-sans">
          <Container className="mx-auto w-full max-w-[600px] p-0">
            {/* Header */}
            <Section className="bg-white px-8 pt-8 pb-6">
              <Text className="m-0 font-semibold text-[#1a1a1a] text-xl">
                Agri Star S.A.
              </Text>
            </Section>

            {/* Content */}
            <Section className="bg-white px-8 py-6">
              <Text className="mt-0 mb-2 font-medium text-[#1a1a1a] text-base">
                Nueva consulta de contacto
              </Text>
              <Text className="my-0 text-[#6B7280] text-sm">
                Recibida desde el formulario web
              </Text>
            </Section>

            <Hr className="my-0" style={{ borderColor: "#E5E7EB" }} />

            {/* Datos del contacto */}
            <Section className="bg-white px-8 py-6">
              <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                <tr>
                  <td
                    style={{
                      paddingBottom: "12px",
                      verticalAlign: "top",
                      width: "140px",
                    }}
                  >
                    <Text className="m-0 font-medium text-[#6B7280] text-sm">
                      Nombre
                    </Text>
                  </td>
                  <td style={{ paddingBottom: "12px", verticalAlign: "top" }}>
                    <Text className="m-0 text-[#1a1a1a] text-sm">
                      {name} {lastName}
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      paddingBottom: "12px",
                      verticalAlign: "top",
                      width: "140px",
                    }}
                  >
                    <Text className="m-0 font-medium text-[#6B7280] text-sm">
                      Email
                    </Text>
                  </td>
                  <td style={{ paddingBottom: "12px", verticalAlign: "top" }}>
                    <Link
                      href={`mailto:${email}`}
                      className="text-[#1a1a1a] text-sm underline"
                    >
                      {email}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      paddingBottom: "12px",
                      verticalAlign: "top",
                      width: "140px",
                    }}
                  >
                    <Text className="m-0 font-medium text-[#6B7280] text-sm">
                      Teléfono
                    </Text>
                  </td>
                  <td style={{ paddingBottom: "12px", verticalAlign: "top" }}>
                    <Link
                      href={`tel:${phone}`}
                      className="text-[#1a1a1a] text-sm underline"
                    >
                      {phone}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "top", width: "140px" }}>
                    <Text className="m-0 font-medium text-[#6B7280] text-sm">
                      Área
                    </Text>
                  </td>
                  <td style={{ verticalAlign: "top" }}>
                    <Text className="m-0 text-[#1a1a1a] text-sm">
                      {areaDisplay}
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            <Hr className="my-0" style={{ borderColor: "#E5E7EB" }} />

            {/* Mensaje */}
            <Section className="bg-white px-8 py-6">
              <Text className="mt-0 mb-3 font-medium text-[#6B7280] text-sm">
                Mensaje
              </Text>
              <Text className="my-0 whitespace-pre-wrap text-[#1a1a1a] text-sm leading-relaxed">
                {message}
              </Text>
            </Section>

            {/* Footer */}
            <Section className="bg-white px-8 pt-6 pb-8">
              <Hr className="mb-6" style={{ borderColor: "#E5E7EB" }} />
              <Text className="my-0 text-[#9CA3AF] text-xs text-center">
                Agri Star S.A. · Buenos Aires, Argentina
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

ContactFormEmail.PreviewProps = {
  name: "Juan",
  lastName: "Pérez",
  email: "juan.perez@ejemplo.com",
  phone: "+54 9 11 1234-5678",
  area: "comercial-cuyo",
  message:
    "Buenos días,\n\nEstoy interesado en conocer más información sobre sus productos para el cultivo de tomates en la zona de Mendoza. Específicamente me gustaría saber sobre fungicidas y bioestimulantes recomendados.\n\nQuedo atento a su respuesta.\n\nSaludos cordiales.",
} satisfies ContactFormEmailProps;
