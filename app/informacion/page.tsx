import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function InformacionPage() {
  return (
    <main className="min-h-screen pt-[120px] pb-16 bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-4">
            Información
          </h1>
          <p className="text-lg text-[#6B7280]">
            Información Toxicológica y Centros de Asistencia
          </p>
        </div>

        {/* Información Toxicológica */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8 md:p-10 mb-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-6">
            Centros de Información, Asesoramiento y Asistencia Toxicológica
          </h2>
          <p className="text-[#6B7280] mb-8">
            Seleccione una ubicación geográfica para ver los centros
            disponibles:
          </p>

          <Accordion type="single" collapsible className="w-full">
            {/* BUENOS AIRES */}
            <AccordionItem value="buenos-aires">
              <AccordionTrigger className="text-lg font-medium px-2">
                Buenos Aires
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  {/* Centro Nacional de Intoxicaciones */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Centro Nacional de Intoxicaciones – Hospital Nacional
                      "Prof. Alejandro Posadas"
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Dra. María Rosa Llorens
                      </p>
                      <p>
                        <strong>Dirección:</strong> Av. Presidente Illia y
                        Marconi CP1706 – Haedo – Pcia. de Buenos Aires
                      </p>
                      <p>
                        <strong>Tel:</strong> (011) 4658-7777 / 4654-6648 /
                        4469-9300 int.1102
                      </p>
                      <p>
                        <strong>Línea gratuita:</strong> 0-800-333-0160
                      </p>
                      <p>
                        <strong>Email:</strong> cniposadas@intramed.net
                      </p>
                      <p>
                        <strong>Horario:</strong> Todos los días 24 hs.
                      </p>
                      <p className="text-[#659C39] font-medium mt-2">
                        ✓ Asistencia Personal y Telefónica
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* CIUDAD AUTONOMA DE BUENOS AIRES */}
            <AccordionItem value="caba">
              <AccordionTrigger className="text-lg font-medium px-2">
                Ciudad Autónoma de Buenos Aires
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  {/* Hospital Gutierrez */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Unidad de Toxicología – Hospital de Niños "Dr. Ricardo
                      Gutiérrez"
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Dr. Nelson Francisco
                        Albiano
                      </p>
                      <p>
                        <strong>Dirección:</strong> Sánchez de Bustamante 1399
                        CP 1425
                      </p>
                      <p>
                        <strong>Tel:</strong> (011) 4962-6666 / 4962-2247
                      </p>
                      <p>
                        <strong>Email:</strong> toxi-guti@yahoo.com.ar
                      </p>
                      <p>
                        <strong>Horario:</strong> Todos los días 24 hs.
                      </p>
                    </div>
                  </div>

                  {/* Hospital de Niños */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Servicio de Intoxicaciones – Hospital de Niños
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Dra. María Elisa Fernández
                      </p>
                      <p>
                        <strong>Dirección:</strong> Avda. Montes de Oca 40 CP
                        1270
                      </p>
                      <p>
                        <strong>Tel:</strong> (011) 4300-2115 / 4307-5842
                      </p>
                      <p>
                        <strong>Email:</strong> hetoxico@intramed.net.ar
                      </p>
                      <p>
                        <strong>Horario:</strong> Todos los días 24 hs.
                      </p>
                    </div>
                  </div>

                  {/* Hospital Fernández */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Unidad de Toxicología – Hospital General de Agudos "J. A.
                      Fernández"
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Prof. Dra. Norma Vallejo
                      </p>
                      <p>
                        <strong>Dirección:</strong> Cerviño 3356 CP 1425
                      </p>
                      <p>
                        <strong>Tel:</strong> (011) 4808-2655 / 4801-7767
                      </p>
                      <p>
                        <strong>Email:</strong> toxico_fernandez@yahoo.com
                      </p>
                      <p>
                        <strong>Horario:</strong> Todos los días 24 hs.
                      </p>
                    </div>
                  </div>

                  {/* Hospital Italiano */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Sección Toxicología – Hospital Italiano de Buenos Aires
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Dra. Flavia A. Vidal
                      </p>
                      <p>
                        <strong>Dirección:</strong> Gascón 450 CP 1181
                      </p>
                      <p>
                        <strong>Tel:</strong> (011) 4959-0311 / 0313
                      </p>
                      <p>
                        <strong>Línea gratuita:</strong> 0-800-444-4400
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        flavia.vidal@hospitalitaliano.com.ar
                      </p>
                      <p>
                        <strong>Horario:</strong> Telefónica: todos los días de
                        8 a 24 hs.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* PROVINCIA DE BUENOS AIRES */}
            <AccordionItem value="provincia-bsas">
              <AccordionTrigger className="text-lg font-medium px-2">
                Provincia de Buenos Aires
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  {/* Hospital La Plata */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Centro de Asesoramiento y Asistencia Toxicológica –
                      Hospital "Sor María Ludovica"
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Dra. Ana María Girardelli
                      </p>
                      <p>
                        <strong>Dirección:</strong> Calle 14, Nro.1631 CP 1900 –
                        La Plata
                      </p>
                      <p>
                        <strong>Tel:</strong> (0221) 451-5555 / 453-5901
                      </p>
                      <p>
                        <strong>Línea gratuita:</strong> 0-800-222-9911
                      </p>
                      <p>
                        <strong>Email:</strong> hntoxico@intramed.net.ar
                      </p>
                      <p>
                        <strong>Horario:</strong> Todos los días 24 hs.
                      </p>
                    </div>
                  </div>

                  {/* Hospital Pergamino */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Departamento de Toxicología – Hospital Interzonal de
                      Agudos San José
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Dra. Adriana Torriggino
                      </p>
                      <p>
                        <strong>Dirección:</strong> Liniers e Italia CP 2700
                        Pergamino
                      </p>
                      <p>
                        <strong>Tel:</strong> (02477) 42-9792 / 99 interno 259
                      </p>
                      <p>
                        <strong>Email:</strong> adrianatorriggino@hotmail.com
                      </p>
                      <p>
                        <strong>Horario:</strong> Lunes a viernes de 8 a 14 hs.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* CHUBUT */}
            <AccordionItem value="chubut">
              <AccordionTrigger className="text-lg font-medium px-2">
                Chubut
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Servicio de Toxicología – Hospital Zonal de Trelew
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Dra. Marcela Regnando
                      </p>
                      <p>
                        <strong>Dirección:</strong> 28 de Julio y Pellegrini –
                        CP 9120 – Trelew
                      </p>
                      <p>
                        <strong>Horario:</strong> Todos los días 24 hs.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* CÓRDOBA */}
            <AccordionItem value="cordoba">
              <AccordionTrigger className="text-lg font-medium px-2">
                Córdoba
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Centro de Información Toxicológica – Hospital de Niños
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Dirección:</strong> Hospital de Niños – Córdoba
                        Capital
                      </p>
                      <p>
                        <strong>Tel:</strong> (0351) 458-0120
                      </p>
                      <p>
                        <strong>Horario:</strong> Todos los días 24 hs.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* JUJUY */}
            <AccordionItem value="jujuy">
              <AccordionTrigger className="text-lg font-medium px-2">
                Jujuy
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Centro de Información Toxicológica
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Dirección:</strong> Jujuy
                      </p>
                      <p>
                        <strong>Horario:</strong> Consultar disponibilidad
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* MENDOZA */}
            <AccordionItem value="mendoza">
              <AccordionTrigger className="text-lg font-medium px-2">
                Mendoza
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Servicio de Toxicología – Hospital Central
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Dirección:</strong> Hospital Central – Mendoza
                      </p>
                      <p>
                        <strong>Tel:</strong> (0261) 449-0000
                      </p>
                      <p>
                        <strong>Horario:</strong> Todos los días 24 hs.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* SALTA */}
            <AccordionItem value="salta">
              <AccordionTrigger className="text-lg font-medium px-2">
                Salta
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Centro de Información Toxicológica
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Dirección:</strong> Salta
                      </p>
                      <p>
                        <strong>Horario:</strong> Consultar disponibilidad
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* SANTA FE */}
            <AccordionItem value="santa-fe">
              <AccordionTrigger className="text-lg font-medium px-2">
                Santa Fe
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Centro de Información Toxicológica
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Dirección:</strong> Santa Fe
                      </p>
                      <p>
                        <strong>Horario:</strong> Consultar disponibilidad
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* TUCUMÁN */}
            <AccordionItem value="tucuman">
              <AccordionTrigger className="text-lg font-medium px-2">
                Tucumán
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Departamento de Toxicología, Prevención y Lucha Contra la
                      Droga
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Dr. Alfredo Córdoba
                      </p>
                      <p>
                        <strong>Institución:</strong> Asistencia Pública y
                        Emergencia Médica – Municipalidad de San Miguel de
                        Tucumán
                      </p>
                      <p>
                        <strong>Dirección:</strong> Chacabuco 239 1er. P. CP
                        4000 – San Miguel de Tucumán
                      </p>
                      <p>
                        <strong>Tel:</strong> (0381) 430-5449 int 26
                      </p>
                      <p>
                        <strong>Email:</strong> cocajuarez@yahoo.com.ar
                      </p>
                      <p>
                        <strong>Horario:</strong> Lunes a viernes de 8 a 14 hs.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* CENTROS ESPECIALIZADOS */}
            <AccordionItem value="especializados">
              <AccordionTrigger className="text-lg font-medium px-2">
                Otros Centros Especializados
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  {/* CENATOXA */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      CENATOXA – Centro de Asesoramiento Toxicológico Analítico
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Dra. Edda Villamil
                      </p>
                      <p>
                        <strong>Institución:</strong> Fac. de Farmacia y
                        Bioquímica – UBA
                      </p>
                      <p>
                        <strong>Dirección:</strong> Junín 956 – 7º Piso – CP
                        1113 – CABA
                      </p>
                      <p>
                        <strong>Tel/Fax:</strong> (011) 4964-8283 / 84
                      </p>
                      <p>
                        <strong>Email:</strong> cenatoxa@ffyb.uba.ar /
                        evillaam@ffyb.uba.ar
                      </p>
                      <p>
                        <strong>Horario:</strong> Lunes a viernes de 9 a 12 y de
                        14 a 18 hs; sábados de 9 a 13 hs.
                      </p>
                    </div>
                  </div>

                  {/* CIMF */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      CIMF – Centro de Información de Medicamentos Farmacéutico
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Daniel Domosbian
                      </p>
                      <p>
                        <strong>Institución:</strong> Colegio de Farmacéuticos
                        de la Provincia de Buenos Aires
                      </p>
                      <p>
                        <strong>Dirección:</strong> Calle 5 Nº 966 C.P 1900 – La
                        Plata
                      </p>
                      <p>
                        <strong>Tel/Fax:</strong> (0221) 429-0900 / 422-4894
                      </p>
                      <p>
                        <strong>Email:</strong> cimf@colfarma.org.ar
                      </p>
                      <p>
                        <strong>Horario:</strong> Lunes a viernes de 8 a 16 hs.
                      </p>
                    </div>
                  </div>

                  {/* SNITV */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      SNITV – Servicio Nacional de Información Toxicológica
                      Veterinaria
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Dr. Alejandro Soraci –
                        Dra. Ofelia Tapia
                      </p>
                      <p>
                        <strong>Institución:</strong> Facultad de Veterinaria –
                        UNCPBA
                      </p>
                      <p>
                        <strong>Dirección:</strong> Paraje Arroyo Seco s/n –
                        Campus Universitario – CP 7000 – Tandil
                      </p>
                      <p>
                        <strong>Tel:</strong> (02293) 422357
                      </p>
                      <p>
                        <strong>Email:</strong> snitv@vet.unicen.edu.ar
                      </p>
                      <p>
                        <strong>Horario:</strong> Lunes a viernes de 8 a 18 hs.
                      </p>
                    </div>
                  </div>

                  {/* PREVENTOX */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      PREVENTOX – Centro de Información y Asesoramiento en
                      Toxicología Laboral
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Dr. Nelson Albiano
                      </p>
                      <p>
                        <strong>Institución:</strong> Superintendencia de
                        Riesgos del Trabajo
                      </p>
                      <p>
                        <strong>Dirección:</strong> Florida 537 Piso 10mo. – CP
                        1005 – CABA
                      </p>
                      <p>
                        <strong>Tel:</strong> (011) 4321-3500 int. 1062
                      </p>
                      <p>
                        <strong>Email:</strong> preventox@srt.gov.ar /
                        albiano@srt.gov.ar
                      </p>
                      <p>
                        <strong>Horario:</strong> Lunes a viernes de 12:30 a
                        18:00 hs.
                      </p>
                    </div>
                  </div>

                  {/* LINEA SALUD FETAL */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Línea Salud Fetal – Centro Nacional de Genética Médica
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Dr. Pablo Barbero
                      </p>
                      <p>
                        <strong>Institución:</strong> ANLIS – Ministerio de
                        Salud de la Nación
                      </p>
                      <p>
                        <strong>Dirección:</strong> Av. Las Heras 2670, 3er.
                        Piso – CP 1425 – CABA
                      </p>
                      <p>
                        <strong>Tel/Fax:</strong> (011) 4809-0799
                      </p>
                      <p>
                        <strong>Email:</strong> sfetal@genes.gov.ar
                      </p>
                      <p>
                        <strong>Horario:</strong> Lunes a viernes de 10 a 15 hs.
                      </p>
                    </div>
                  </div>

                  {/* SUPERINTENDENCIA DE BOMBEROS */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      Materiales Peligrosos – Superintendencia Federal de
                      Bomberos
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Ppal. Daniel A. Méndez
                      </p>
                      <p>
                        <strong>División:</strong> Protección Ambiental –
                        Brigada de Riesgos Especiales
                      </p>
                      <p>
                        <strong>Dirección:</strong> Manuel Porcel de Peralta 750
                        – Piso 3 – CP 1408 – CABA
                      </p>
                      <p>
                        <strong>Tel:</strong> (011) 4644-2768 (guardia) /
                        4644-2792 / 2795
                      </p>
                      <p>
                        <strong>Email:</strong> emerquim@infovia.com.ar
                      </p>
                      <p>
                        <strong>Horario:</strong> Todos los días 24 horas
                      </p>
                    </div>
                  </div>

                  {/* HAZMAT */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      HAZMAT – Centro de Información sobre Materiales Peligrosos
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Arturo Peyru – Dr. Walter
                        Paz
                      </p>
                      <p>
                        <strong>Dirección:</strong> Dr. Emilio Ravignani 1838 –
                        CP 1414 – CABA
                      </p>
                      <p>
                        <strong>Tel/Fax:</strong> (011) 4899-2291
                      </p>
                      <p>
                        <strong>Email:</strong> hazmat@interar.com.ar
                      </p>
                      <p>
                        <strong>Web:</strong> www.hazmatargentina.com
                      </p>
                      <p>
                        <strong>Horario:</strong> Todos los días 24 horas
                      </p>
                    </div>
                  </div>

                  {/* CITEFA */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      CITEFA – Centro de Investigaciones Toxicológicas
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsables:</strong> Dr. José Castro – Dr.
                        Gerardo Daniel Castro
                      </p>
                      <p>
                        <strong>Institución:</strong> CONICET
                      </p>
                      <p>
                        <strong>Dirección:</strong> Juan Bautista de La Salle
                        4397 – CP B1603ALO – Villa Martelli
                      </p>
                      <p>
                        <strong>Tel:</strong> (011) 4709-8100 int. 1139
                      </p>
                      <p>
                        <strong>Email:</strong> ceitox@dd.com.ar
                      </p>
                      <p>
                        <strong>Horario:</strong> Todos los días 24 horas
                      </p>
                    </div>
                  </div>

                  {/* CIQUIME */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      CIQUIME – Centro de Información Química para Emergencias
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Diego N. Gotelli
                      </p>
                      <p>
                        <strong>Dirección:</strong> Av. Juan Bautista Alberdi
                        2986 – C1406GSS – CABA
                      </p>
                      <p>
                        <strong>Tel Emergencias:</strong> (011) 4613-1100
                        (rotativas)
                      </p>
                      <p>
                        <strong>Tel Consultas:</strong> (011) 4612-6912
                      </p>
                      <p>
                        <strong>Email:</strong> consultas@ciquime.org.ar /
                        dgotelli@ciquime.org.ar
                      </p>
                      <p>
                        <strong>Web:</strong> www.ciquime.org.ar
                      </p>
                    </div>
                  </div>

                  {/* PRECOTOX */}
                  <div className="border-l-4 border-[#659C39] pl-6 py-2">
                    <h3 className="font-semibold text-[#1a1a1a] mb-2">
                      PRECOTOX – Programa Nacional de Prevención y Control de
                      Intoxicaciones
                    </h3>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <p>
                        <strong>Responsable:</strong> Dra. Susana I. García
                      </p>
                      <p>
                        <strong>Institución:</strong> Ministerio de Salud de la
                        Nación
                      </p>
                      <p>
                        <strong>Dirección:</strong> Av. 9 de Julio 1925 – CP
                        1330 – CABA
                      </p>
                      <p>
                        <strong>Tel:</strong> (011) 4379-9087 / 9060
                      </p>
                      <p>
                        <strong>Email:</strong> detoxico@msal.gov.ar
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Información de Emergencia */}
        {/* <div className="bg-[#659C39] rounded-2xl p-8 md:p-10 text-white">
          <div className="flex items-start gap-4">
            <svg
              className="w-8 h-8 flex-shrink-0 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Información Importante
              </h3>
              <p className="text-white/90 leading-relaxed">
                En caso de emergencia toxicológica, contacte inmediatamente con
                el centro más cercano. La mayoría de los centros ofrecen
                atención las 24 horas del día, todos los días del año. Mantenga
                siempre a mano el número de teléfono del centro de
                intoxicaciones de su zona.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
