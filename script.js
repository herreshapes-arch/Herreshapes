/* =========================================================
   PORTAFOLIO DANIEL HERRERA
   Para editar textos o proyectos, cambia los datos de abajo.
   Cada texto tiene versión es / en.
   ========================================================= */

/* ---------- 1. PROYECTOS ---------- */
const PROJECTS = [
  {
    id: "aguas",
    client: "Aguas Nacionales EPM",
    cats: ["utilities", "automation"],
    level: 5,
    title: { es: "Interventorías en campo", en: "Field supervision, automated" },
    hook: {
      es: "Técnicos en obra, líderes en oficina e informes semanales armados a mano. Lo conecté todo.",
      en: "Technicians on site, leaders at the office, and weekly reports built by hand. I connected it all."
    },
    challenge: {
      es: "Las interventorías de obra dependían de reportes diarios que cada técnico llenaba a su manera, y de un informe semanal que el líder tenía que consolidar a mano. Era difícil saber a tiempo qué frente estaba atrasado.",
      en: "Construction supervision relied on daily reports that every technician filled in their own way, plus a weekly report the leader had to put together by hand. Spotting a delayed work front in time was hard."
    },
    twist: {
      es: "Cada actividad (excavación, tubería, pavimento, concreto…) pide datos distintos, el técnico trabaja desde el celular en plena obra y el líder necesita ver 30+ frentes de un vistazo.",
      en: "Every activity (excavation, piping, paving, concrete…) needs different data, technicians work from a phone on site, and the leader needs to see 30+ work fronts at a glance."
    },
    solution: {
      es: [
        "<strong>Asistente de 5 pasos</strong> (Proyecto → Personal → Actividades → Fotos → Enviar) para que el reporte diario no se sienta como un formulario eterno.",
        "<strong>Campos que cambian según la actividad</strong>: si eliges excavación, pide profundidad y diámetro; si no, no estorba.",
        "<strong>Informe semanal pre-diligenciado</strong> desde los reportes diarios: el técnico solo revisa y ajusta.",
        "<strong>Dashboard del líder</strong> con semáforo de avance (verde ≥65 %, amarillo, rojo), alertas activas y rendimiento por contratista.",
        "Tres roles con su propia vista: técnico, líder y administrador."
      ],
      en: [
        "<strong>5-step wizard</strong> (Project → Staff → Activities → Photos → Send) so the daily report doesn't feel like an endless form.",
        "<strong>Fields that adapt to the activity</strong>: pick excavation and it asks for depth and diameter; otherwise it stays out of the way.",
        "<strong>Weekly report pre-filled</strong> from the daily ones: the technician just reviews and adjusts.",
        "<strong>Leader dashboard</strong> with a progress traffic light (green ≥65%, yellow, red), live alerts and performance by contractor.",
        "Three roles, each with its own view: technician, leader and admin."
      ]
    },
    tags: ["UX flows", "Dashboard", "Mobile-first", "Roles"],
    images: [
      { src: "img/aguas/1.webp", cap: { es: "Inicio del técnico: su semana en un vistazo", en: "Technician home: the week at a glance" } },
      { src: "img/aguas/2.webp", cap: { es: "Dashboard del líder con alertas y semáforo", en: "Leader dashboard with alerts and traffic light" } },
      { src: "img/aguas/3.webp", cap: { es: "Paso 3: campos condicionales por actividad", en: "Step 3: conditional fields per activity" } },
      { src: "img/aguas/4.webp", cap: { es: "Paso 4: carga de fotos de obra", en: "Step 4: site photo upload" } },
      { src: "img/aguas/5.webp", cap: { es: "Informe auto-generado listo para aprobar", en: "Auto-generated report ready to approve" } }
    ]
  },
  {
    id: "reclutamiento",
    client: "EPM",
    cats: ["ai", "automation"],
    level: 5,
    title: { es: "Reclutamiento con IA", en: "AI-powered recruiting" },
    hook: {
      es: "500 candidatos, 8 filtros y una IA que lee diplomas. El reto: que el reclutador siga teniendo el control.",
      en: "500 candidates, 8 filters and an AI that reads diplomas. The challenge: keeping the recruiter in control."
    },
    challenge: {
      es: "Cada convocatoria recibía cientos de postulaciones que había que validar una por una: preguntas, público objetivo, educación, experiencia, documentos y si la persona ya estaba en otros procesos.",
      en: "Each job opening received hundreds of applications that had to be checked one by one: screening questions, target group, education, experience, documents, and whether the person was already in other processes."
    },
    twist: {
      es: "La IA puede evaluar y extraer datos, pero se equivoca. El diseño tenía que mostrar <strong>qué decidió la IA, por qué, y dejar corregirlo</strong> sin perder trazabilidad.",
      en: "AI can evaluate and extract data, but it makes mistakes. The design had to show <strong>what the AI decided, why, and let people correct it</strong> without losing traceability."
    },
    solution: {
      es: [
        "<strong>Embudo visual de 8 etapas</strong> con contadores: el reclutador ve cuántos candidatos quedan en cada filtro.",
        "<strong>Evaluación de IA explicada</strong> en cada candidato y marcas visibles de qué datos extrajo la IA y cuáles corrigió una persona.",
        "<strong>Búsqueda con % de similitud</strong> para detectar al mismo candidato inscrito en varios procesos.",
        "Regla de negocio hecha interfaz: si quedan más de 50 candidatos, se omite la validación del jefe y el sistema lo explica.",
        "<strong>Administrador de prompts</strong> con variables, para que el equipo ajuste la IA sin tocar código."
      ],
      en: [
        "<strong>Visual 8-stage funnel</strong> with counters: the recruiter sees how many candidates remain at each filter.",
        "<strong>Explained AI evaluation</strong> on each candidate, with clear marks for what the AI extracted and what a person corrected.",
        "<strong>Similarity-% search</strong> to spot the same candidate applying to several openings.",
        "A business rule turned into UI: with more than 50 candidates left, the manager review is skipped and the system says why.",
        "<strong>Prompt manager</strong> with variables, so the team can tune the AI without touching code."
      ]
    },
    tags: ["UX for AI", "Human-in-the-loop", "Workflows", "Roles"],
    images: [
      { src: "img/reclutamiento/1.webp", cap: { es: "Embudo de validación de 8 etapas", en: "8-stage validation funnel" } },
      { src: "img/reclutamiento/2.webp", cap: { es: "Respuestas del candidato y evaluación con IA", en: "Candidate answers and AI evaluation" } },
      { src: "img/reclutamiento/3.webp", cap: { es: "Búsqueda con porcentaje de similitud", en: "Search with similarity percentage" } },
      { src: "img/reclutamiento/4.webp", cap: { es: "Validación final del jefe reclutador", en: "Final review by the hiring manager" } },
      { src: "img/reclutamiento/5.webp", cap: { es: "Edición de prompts con variables", en: "Prompt editing with variables" } }
    ]
  },
  {
    id: "alquiler",
    client: "EPM",
    cats: ["energy", "ai", "automation"],
    level: 4,
    title: { es: "Alquiler de infraestructura", en: "Infrastructure rental" },
    hook: {
      es: "Miles de postes, fotos de campo vs. Google Street View, y alguien tiene que decir cuál dato es el correcto.",
      en: "Thousands of utility poles, field photos vs. Google Street View, and someone has to decide which data is right."
    },
    challenge: {
      es: "EPM alquila su infraestructura eléctrica (postes) a otros operadores. Validar cada solicitud implicaba cruzar fotos, coordenadas GPS y los datos del sistema a mano.",
      en: "EPM rents its power infrastructure (poles) to other operators. Validating each request meant cross-checking photos, GPS coordinates and system records by hand."
    },
    twist: {
      es: "Los datos llegan en archivos comprimidos masivos, a veces no hay imagen de Street View y un mismo poste puede traer varios identificadores.",
      en: "Data arrives in bulk zip files, sometimes there is no Street View image, and a single pole can come with several IDs."
    },
    solution: {
      es: [
        "<strong>Carga masiva con estado de procesamiento</strong> (terminado, en proceso, no iniciado) para que nadie se quede adivinando.",
        "<strong>Matriz de comparación</strong>: foto original al lado de Street View, datos GPS vs. datos del sistema y una columna para corregir con un clic.",
        "Diseño de los casos difíciles: sin imagen disponible, o varios identificadores para un mismo poste.",
        "Administración de usuarios, roles y parámetros (como el umbral de similitud) sin depender de TI."
      ],
      en: [
        "<strong>Bulk upload with processing status</strong> (done, in progress, not started) so nobody is left guessing.",
        "<strong>Comparison matrix</strong>: original photo next to Street View, GPS vs. system data, and a column to correct with one click.",
        "Designed for the hard cases: no image available, or several IDs for the same pole.",
        "User, role and parameter admin (like the similarity threshold) without depending on IT."
      ]
    },
    tags: ["Data validation", "Bulk upload", "Edge cases"],
    images: [
      { src: "img/alquiler/1.webp", cap: { es: "Matriz de comparación: foto vs. Street View", en: "Comparison matrix: photo vs. Street View" } },
      { src: "img/alquiler/2.webp", cap: { es: "Ingreso al aplicativo", en: "App entry screen" } },
      { src: "img/alquiler/3.webp", cap: { es: "Estado de los archivos cargados", en: "Status of uploaded files" } },
      { src: "img/alquiler/4.webp", cap: { es: "Solicitudes por validar", en: "Requests to validate" } },
      { src: "img/alquiler/5.webp", cap: { es: "Roles y usuarios", en: "Roles and users" } }
    ]
  },
  {
    id: "fronteras",
    client: "XM",
    cats: ["energy"],
    level: 5,
    title: { es: "Fronteras comerciales", en: "Commercial meter points" },
    hook: {
      es: "Un trámite regulado por la CREG, con firmas, objeciones y correcciones. Aquí un clic de más tiene consecuencias legales.",
      en: "A process regulated by the national energy commission, with signatures, objections and corrections. One wrong click has legal consequences."
    },
    challenge: {
      es: "Los agentes del mercado eléctrico registran sus fronteras comerciales ante XM, y los analistas deben revisarlas, aprobarlas u objetarlas según la regulación. Muchos actores, muchos estados y cero margen de error.",
      en: "Power market agents register their commercial meter points with XM, and analysts must review, approve or object to them under the regulation. Many actors, many states, zero margin for error."
    },
    twist: {
      es: "Un registro tiene 7 bloques de información técnica, la firma es irreversible y cada objeción debe citar la causal regulatoria exacta.",
      en: "A registration has 7 blocks of technical data, signing is irreversible, and every objection must cite the exact regulatory ground."
    },
    solution: {
      es: [
        "<strong>Formulario por pestañas</strong> (requerimiento, frontera, equipo de medida, curva típica, certificaciones, adjuntos) para no abrumar.",
        "<strong>Firma con confirmación por correo</strong> y advertencias claras antes de un paso sin retorno.",
        "<strong>Bandeja del analista con contadores</strong>: por revisar (urgentes vs. pendientes), por aprobar, objeciones y correcciones.",
        "Objeciones con las <strong>causales regulatorias listadas</strong> y aceptación explícita de las implicaciones.",
        "Flujos para solicitar corrección, desistir y eliminar, cada uno con su confirmación."
      ],
      en: [
        "<strong>Tabbed form</strong> (request, meter point, metering equipment, load curve, certifications, attachments) so it doesn't overwhelm.",
        "<strong>Signing with email confirmation</strong> and clear warnings before an irreversible step.",
        "<strong>Analyst inbox with counters</strong>: to review (urgent vs. pending), to approve, objections and corrections.",
        "Objections with the <strong>regulatory grounds listed</strong> and explicit acceptance of the implications.",
        "Flows to request corrections, withdraw and delete, each with its own confirmation."
      ]
    },
    tags: ["Regulated flows", "Multi-role", "Complex forms"],
    images: [
      { src: "img/fronteras/1.webp", cap: { es: "Bandeja del analista con contadores", en: "Analyst inbox with counters" } },
      { src: "img/fronteras/2.webp", cap: { es: "Registro por pestañas y firma", en: "Tabbed registration and signing" } },
      { src: "img/fronteras/3.webp", cap: { es: "Objeción con causales regulatorias", en: "Objection with regulatory grounds" } },
      { src: "img/fronteras/4.webp", cap: { es: "Vista del agente", en: "Agent view" } },
      { src: "img/fronteras/5.webp", cap: { es: "Resumen de requerimientos", en: "Requests summary" } }
    ]
  },
  {
    id: "paratec",
    client: "XM",
    cats: ["energy", "data"],
    level: 4,
    title: { es: "PARATEC: el sistema eléctrico en un mapa", en: "PARATEC: the power grid on a map" },
    hook: {
      es: "Todas las plantas y líneas de transmisión de Colombia en un portal público. ¿Cómo haces eso navegable?",
      en: "Every power plant and transmission line in Colombia in a public portal. How do you make that navigable?"
    },
    challenge: {
      es: "PARATEC publica los parámetros técnicos del Sistema Interconectado Nacional. La información era enorme, muy técnica y difícil de explorar para usuarios con necesidades muy distintas.",
      en: "PARATEC publishes the technical parameters of Colombia's national grid. The information was huge, very technical and hard to explore for users with very different needs."
    },
    twist: {
      es: "Generación, transmisión e hidrología son mundos distintos, y cada planta (hidráulica, térmica, eólica, solar) tiene sus propios parámetros.",
      en: "Generation, transmission and hydrology are different worlds, and each plant type (hydro, thermal, wind, solar) has its own parameters."
    },
    solution: {
      es: [
        "<strong>Mapa interactivo de Colombia</strong> como puerta de entrada, con pestañas por generación, transmisión e hidrología.",
        "<strong>Interruptores por tecnología y nivel de tensión</strong> (57,5 a 500 kV) para encender y apagar capas.",
        "Informes con filtros, pestañas por tipo de dato y exportación.",
        "Sección de noticias con suscripción y un administrador de reportes y publicaciones."
      ],
      en: [
        "<strong>Interactive map of Colombia</strong> as the entry point, with tabs for generation, transmission and hydrology.",
        "<strong>Toggles by technology and voltage level</strong> (57.5 to 500 kV) to switch layers on and off.",
        "Reports with filters, tabs per data type, and export.",
        "News section with subscription, plus an admin for reports and posts."
      ]
    },
    tags: ["Data viz", "Maps", "Public portal"],
    images: [
      { src: "img/paratec/1.webp", cap: { es: "Mapa de generación por tecnología", en: "Generation map by technology" } },
      { src: "img/paratec/2.webp", cap: { es: "Transmisión por nivel de tensión", en: "Transmission by voltage level" } },
      { src: "img/paratec/3.webp", cap: { es: "Detalle de planta solar", en: "Solar plant detail" } },
      { src: "img/paratec/4.webp", cap: { es: "Informe de plantas térmicas", en: "Thermal plants report" } },
      { src: "img/paratec/5.webp", cap: { es: "Noticias del sector", en: "Sector news" } }
    ]
  },
  {
    id: "sintec",
    client: "ISA Intercolombia",
    cats: ["energy", "automation"],
    level: 3,
    title: { es: "Portal SINTEC", en: "SINTEC portal" },
    hook: {
      es: "Normas técnicas que pasan por 5 manos antes de publicarse. Hice que todos supieran en qué va cada documento.",
      en: "Technical standards that go through 5 hands before publishing. I made sure everyone knows where each document stands."
    },
    challenge: {
      es: "SINTEC organiza la documentación técnica para el mantenimiento de la red de transmisión. Crear, modificar o eliminar un documento pasaba por varias aprobaciones sin visibilidad clara del estado.",
      en: "SINTEC organizes the technical documentation used to maintain the transmission grid. Creating, editing or deleting a document went through several approvals with no clear view of its status."
    },
    twist: {
      es: "Cada persona tiene un papel distinto en el flujo (solicitar, revisar, aprobar, publicar) y los documentos tienen muchas clasificaciones.",
      en: "Each person plays a different role in the flow (request, review, approve, publish) and documents carry many classifications."
    },
    solution: {
      es: [
        "<strong>Línea de tiempo de seguimiento</strong>: Creada → Aceptada → Revisada → Aprobada → Publicada, con comentarios de cada revisor.",
        "<strong>“Mis tareas” con acciones por color</strong> (revisar, modificar, aprobar, publicar, eliminar): sabes qué te toca sin abrir nada.",
        "Solicitud guiada en 3 bloques para crear, modificar o eliminar documentos.",
        "Búsqueda con filtros avanzados para documentos normalizados y normas maestras."
      ],
      en: [
        "<strong>Tracking timeline</strong>: Created → Accepted → Reviewed → Approved → Published, with comments from each reviewer.",
        "<strong>“My tasks” with color-coded actions</strong> (review, edit, approve, publish, delete): you know what's on you without opening anything.",
        "Guided request in 3 blocks to create, edit or delete documents.",
        "Search with advanced filters for standard documents and master norms."
      ]
    },
    tags: ["Approval workflows", "Status tracking"],
    images: [
      { src: "img/sintec/1.webp", cap: { es: "Seguimiento de la solicitud", en: "Request tracking" } },
      { src: "img/sintec/2.webp", cap: { es: "Mis tareas con acciones por color", en: "My tasks with color-coded actions" } },
      { src: "img/sintec/3.webp", cap: { es: "Formulario guiado de solicitud", en: "Guided request form" } },
      { src: "img/sintec/4.webp", cap: { es: "Búsqueda con filtros", en: "Search with filters" } },
      { src: "img/sintec/5.webp", cap: { es: "Inicio del portal", en: "Portal home" } }
    ]
  },
  {
    id: "transelca",
    client: "ISA Transelca",
    cats: ["energy", "data"],
    level: 3,
    title: { es: "Tableros comerciales", en: "Commercial dashboards" },
    hook: {
      es: "Solicitudes de clientes y proyectos potenciales regados en varios lados. Los puse en dos tableros.",
      en: "Customer requests and potential projects scattered everywhere. I put them on two dashboards."
    },
    challenge: {
      es: "El equipo comercial necesitaba hacer seguimiento a las solicitudes de conexión de clientes y a las ofertas potenciales por subestación, pero la información no se podía leer de un vistazo.",
      en: "The sales team needed to track customer connection requests and potential offers by substation, but the information couldn't be read at a glance."
    },
    twist: {
      es: "Había que mezclar plazos, responsables, etapas y ubicación geográfica sin convertir la pantalla en un árbol de Navidad.",
      en: "It had to mix deadlines, owners, stages and geography without turning the screen into a Christmas tree."
    },
    solution: {
      es: [
        "<strong>Bitácora de solicitudes</strong> con cumplimiento de plazos (vigente, próxima a vencer, vencida) y carga por responsable.",
        "<strong>Mapa de proyectos por subestación</strong> con indicadores clave: inversión, ingreso estimado, número de proyectos y potencia.",
        "Filtros por líder, tipo de proyecto, estado, etapa, promotor y sector."
      ],
      en: [
        "<strong>Requests log</strong> with deadline compliance (on time, due soon, overdue) and workload per owner.",
        "<strong>Project map by substation</strong> with key indicators: investment, estimated revenue, number of projects and capacity.",
        "Filters by lead, project type, status, stage, promoter and sector."
      ]
    },
    tags: ["BI dashboards", "Data viz"],
    images: [
      { src: "img/transelca/1.webp", cap: { es: "Potencial de ofertas por subestación", en: "Offer potential by substation" } },
      { src: "img/transelca/2.webp", cap: { es: "Bitácora y cumplimiento de plazos", en: "Request log and deadline compliance" } }
    ]
  },
  {
    id: "certificados",
    client: { es: "Grupo empresarial (7 sociedades)", en: "Business group (7 companies)" },
    cats: ["finance", "automation"],
    level: 3,
    title: { es: "Certificados tributarios", en: "Tax certificates portal" },
    hook: {
      es: "Proveedores pidiendo certificados por correo a 7 empresas distintas. Lo volví autoservicio.",
      en: "Suppliers emailing 7 different companies for tax certificates. I made it self-service."
    },
    challenge: {
      es: "Los proveedores de un grupo empresarial con varias marcas pedían sus certificados de retención (en la fuente, ICA, IVA) por correo, y el equipo los generaba uno por uno.",
      en: "Suppliers of a multi-brand business group requested their withholding certificates (income tax, ICA, VAT) by email, and the team generated them one by one."
    },
    twist: {
      es: "Tres públicos muy distintos (proveedor externo, gestor interno y administrador), integración con SAP y necesidad de auditoría.",
      en: "Three very different audiences (external supplier, internal manager, admin), SAP integration and audit requirements."
    },
    solution: {
      es: [
        "<strong>Autoservicio para proveedores</strong>: un inicio con solo dos opciones, sin perderse.",
        "<strong>Descargas y cargas masivas</strong> para el gestor, por sociedad, tipo de certificado y rango de meses.",
        "Panel del administrador con sociedades y divisiones, roles, log de integración con SAP y <strong>auditoría de acciones</strong>."
      ],
      en: [
        "<strong>Self-service for suppliers</strong>: a home with just two options, impossible to get lost.",
        "<strong>Bulk downloads and uploads</strong> for managers, by company, certificate type and month range.",
        "Admin panel with companies and divisions, roles, SAP integration log and <strong>action auditing</strong>."
      ]
    },
    tags: ["Self-service", "Multi-role", "SAP"],
    images: [
      { src: "img/certificados/1.webp", cap: { es: "Consulta de certificados", en: "Certificate search" } },
      { src: "img/certificados/2.webp", cap: { es: "Inicio del proveedor: solo dos opciones", en: "Supplier home: just two options" } },
      { src: "img/certificados/3.webp", cap: { es: "Descargas masivas", en: "Bulk downloads" } },
      { src: "img/certificados/4.webp", cap: { es: "Parametrización de cargas", en: "Upload settings" } },
      { src: "img/certificados/5.webp", cap: { es: "Log de auditorías", en: "Audit log" } }
    ]
  },
  {
    id: "emdupar",
    client: "Emdupar",
    cats: ["utilities", "finance"],
    level: 2,
    title: { es: "Servicios en línea de agua", en: "Water utility online services" },
    hook: {
      es: "Pagar el agua no debería requerir un tutorial. Seis trámites, un mismo patrón.",
      en: "Paying your water bill shouldn't need a tutorial. Six tasks, one pattern."
    },
    challenge: {
      es: "Los usuarios de la empresa de servicios públicos de Valledupar necesitaban pagar, consultar saldos y hacer abonos en línea, y el público es muy diverso en edad y experiencia digital.",
      en: "Customers of Valledupar's public utility needed to pay, check balances and make partial payments online, for an audience very diverse in age and digital experience."
    },
    twist: {
      es: "Pagos diferidos, abonos con cupón, saldos a favor y en reclamo: muchos conceptos financieros para alguien que solo quiere pagar.",
      en: "Deferred payments, partial-payment coupons, credit and disputed balances: lots of financial concepts for someone who just wants to pay."
    },
    solution: {
      es: [
        "<strong>Inicio con 6 tarjetas grandes e ilustradas</strong>, una por trámite.",
        "<strong>Un mismo patrón de consulta</strong> en todos los trámites (contrato + tipo y número de documento → Consultar): se aprende una vez.",
        "Tablas de saldo resumidas, selección de diferidos a pagar y estados de error claros."
      ],
      en: [
        "<strong>Home with 6 large illustrated cards</strong>, one per task.",
        "<strong>The same lookup pattern</strong> on every task (contract + ID type and number → Search): learn it once.",
        "Summarized balance tables, picking which deferred items to pay, and clear error states."
      ]
    },
    tags: ["Citizen services", "Payments", "Accessibility"],
    images: [
      { src: "img/emdupar/1.webp", cap: { es: "Inicio con 6 trámites", en: "Home with 6 tasks" } },
      { src: "img/emdupar/2.webp", cap: { es: "Consulta de saldo", en: "Balance lookup" } },
      { src: "img/emdupar/3.webp", cap: { es: "Pago de diferidos", en: "Deferred payments" } },
      { src: "img/emdupar/4.webp", cap: { es: "Abono a factura con cupón", en: "Partial payment with coupon" } }
    ]
  }
];

/* Proyectos extra (solo nombre, sin caso detallado) */
const MORE = [
  ["XM", "Bankgar"], ["XM", "Sinergox"], ["XM", "SIO"],
  ["EPM", "Cuponeras"], ["EPM", "Análisis predial"], ["EPM", "GenIA"],
  ["Triple A", { es: "Junta directiva", en: "Board of directors" }],
  ["Global MVM", "MVM Energy Suite"], ["Global MVM", "UX Tool Kit"], ["Global MVM", { es: "Hojas de vida", en: "Resumes" }],
  ["Open Innovation", "Focus Safe"], ["Open Innovation", { es: "Cámara de Comercio de Ibagué", en: "Ibagué Chamber of Commerce" }]
];

const FILTERS = [
  { key: "all", es: "Todos", en: "All" },
  { key: "energy", es: "⚡ Energía", en: "⚡ Energy" },
  { key: "utilities", es: "💧 Agua y servicios", en: "💧 Water & utilities" },
  { key: "ai", es: "🤖 IA", en: "🤖 AI" },
  { key: "automation", es: "⚙️ Automatización", en: "⚙️ Automation" },
  { key: "data", es: "📊 Datos y mapas", en: "📊 Data & maps" },
  { key: "finance", es: "💳 Pagos y tributario", en: "💳 Payments & tax" }
];

const STEPS = [
  { e: "🔍", es: ["Entender", "Me siento con usuarios y negocio. Mapeo el proceso real, no el que dice el manual."], en: ["Understand", "I sit with users and the business. I map the real process, not the one in the manual."] },
  { e: "🧩", es: ["Co-crear", "Talleres de Design Thinking con stakeholders para alinear reglas, roles y prioridades."], en: ["Co-create", "Design Thinking workshops with stakeholders to align rules, roles and priorities."] },
  { e: "✏️", es: ["Prototipar", "Flujos, wireframes y prototipos de alta fidelidad en Figma, con componentes reutilizables."], en: ["Prototype", "Flows, wireframes and high-fidelity Figma prototypes built from reusable components."] },
  { e: "✅", es: ["Validar y entregar", "Pruebo, ajusto e itero con desarrollo hasta que la solución funcione en el día a día."], en: ["Validate & ship", "I test, adjust and iterate with developers until it works in everyday use."] }
];

const SKILLS = [
  { star: true, e: "⚡", es: "Mi superpoder", en: "My superpower", items: { es: ["UX para IA", "UX para automatización", "Plataformas empresariales", "Flujos operativos complejos", "Sistemas multi-rol"], en: ["UX for AI", "UX for automation", "Enterprise platforms", "Complex operational flows", "Multi-role systems"] } },
  { e: "🎯", es: "UX core", en: "Core UX", items: { es: ["Investigación con usuarios", "Arquitectura de información", "Diseño de interacción", "UI", "User & task flows"], en: ["User research", "Information architecture", "Interaction design", "UI", "User & task flows"] } },
  { e: "🧠", es: "Producto y estrategia", en: "Product & strategy", items: { es: ["Design Thinking", "Jobs to Be Done", "Customer Journey Map", "Talleres de co-creación", "Priorización funcional"], en: ["Design Thinking", "Jobs to Be Done", "Customer journey mapping", "Co-creation workshops", "Functional prioritization"] } },
  { e: "🛠️", es: "Herramientas", en: "Tools", items: { es: ["Figma", "Adobe XD", "Miro", "Azure DevOps", "Sistemas de diseño", "Español nativo · Inglés B2"], en: ["Figma", "Adobe XD", "Miro", "Azure DevOps", "Design systems", "Native Spanish · English B2"] } }
];

const TIMELINE = [
  { when: "2021 — 2026", es: ["UX/UI Designer", "Global MVM · Medellín", "Experiencias para plataformas complejas en energía y negocio: XM, EPM, ISA, Aguas Nacionales, Triple A, Emdupar. Investigación, flujos, prototipos y lineamientos de diseño, integrando analítica, automatización e IA."], en: ["UX/UI Designer", "Global MVM · Medellín", "Experiences for complex platforms in energy and business: XM, EPM, ISA, Aguas Nacionales, Triple A, Emdupar. Research, flows, prototypes and design guidelines, bringing in analytics, automation and AI."] },
  { when: "2020 — 2026", es: ["UX/UI Designer (freelance)", "Open Innovation S.A.S", "Facilitación de talleres de Design Thinking, identificación de oportunidades digitales y capacitación en Figma. Proyectos como Focus Safe y la Cámara de Comercio de Ibagué."], en: ["UX/UI Designer (freelance)", "Open Innovation S.A.S", "Facilitating Design Thinking workshops, spotting digital opportunities and Figma training. Projects such as Focus Safe and the Ibagué Chamber of Commerce."] },
  { when: "2019 — 2025", es: ["Prototipado de experiencias de iluminación", "Leds Do It · proyecto personal", "Diseño y montaje de iluminación para eventos. Sí, también diseño experiencias que se apagan y se prenden. 💡"], en: ["Lighting experience prototyping", "Leds Do It · personal project", "Designing and setting up lighting for events. Yes, I also design experiences that switch on and off. 💡"] },
  { when: "2023", es: ["Curso práctico de Diseño UX", "El Tiempo", ""], en: ["Practical UX Design course", "El Tiempo", ""] },
  { when: "2021", es: ["Diseñador Industrial", "Universidad Pontificia Bolivariana", "De diseñar objetos a diseñar sistemas: la misma obsesión por cómo la gente usa las cosas."], en: ["Industrial Designer", "Universidad Pontificia Bolivariana", "From designing objects to designing systems: the same obsession with how people use things."] }
];

/* ---------- 2. TEXTOS DE LA INTERFAZ ---------- */
const I18N = {
  es: {
    "skip": "Saltar a los proyectos",
    "nav.work": "Casos", "nav.approach": "Cómo trabajo", "nav.skills": "Power-ups", "nav.path": "Trayectoria", "nav.contact": "Hablemos",
    "hero.eyebrow": "Product Designer UX/UI · Medellín, Colombia",
    "hero.h1a": "Diseño software empresarial", "hero.h1b": "que la gente",
    "hero.lead": "Llevo más de 5 años entrando a procesos llenos de Excel, correos y reglas de negocio, y saliendo con <strong>flujos claros, pantallas limpias y equipos que adoptan la herramienta</strong>. Mi terreno: energía, servicios públicos, automatización e IA.",
    "hero.cta1": "Ver los casos ↓", "hero.cta2": "Descargar CV",
    "stats.years": "años diseñando", "stats.cases": "casos en este portafolio", "stats.clients": "clientes de energía y servicios públicos", "stats.excel": "hojas de Excel jubiladas",
    "manifesto": "Las plataformas empresariales tienen fama de feas y difíciles. <em>No tienen por qué.</em> Detrás de cada pantalla hay un técnico en campo, una analista con 200 solicitudes o un reclutador con 500 hojas de vida. <strong>Yo diseño para ellos</strong>, sin perder de vista las reglas del negocio ni la lógica técnica.",
    "work.eyebrow": "Casos resueltos", "work.title": "Problemas enredados, soluciones claras", "work.sub": "Cada tarjeta es un reto real. Haz clic para ver cómo lo resolví.",
    "more.title": "Y en la bodega también hay…",
    "approach.eyebrow": "Cómo trabajo", "approach.title": "Del caos al prototipo en 4 pasos",
    "skills.eyebrow": "Power-ups", "skills.title": "Lo que traigo en la mochila",
    "path.eyebrow": "Trayectoria", "path.title": "El camino hasta aquí",
    "contact.title": "¿Tienes un proceso <span class=\"hl\">enredado</span>?<br>Hablemos.",
    "contact.sub": "Respondo rápido. Prometo no mandarte un Excel.",
    "contact.copy": "Copiar correo", "contact.cv": "CV (PDF) ↓",
    "footer": "Hecho a mano, con café y un poco de voltaje.", "footer.hint": "Pista: haz clic 5 veces en el logo ⚡",
    // dinámicos
    rot: ["sí quiere usar.", "entiende a la primera.", "no odia los lunes.", "adopta sin capacitación eterna."],
    typed: ["cargando creatividad... 100%", "convirtiendo Excel en interfaces...", "conectando negocio + usuario + tecnología", "listo para tu próximo reto ⚡"],
    challenge: "El reto", twist: "Lo difícil", solution: "Cómo lo resolví", complexity: "Complejidad", view: "Ver caso →",
    prev: "← Anterior", next: "Siguiente →", copied: "¡Correo copiado! 📋", voltage: "⚡ Modo voltaje activado",
    level: ["", "Tranqui", "Moderado", "Intenso", "Muy intenso", "Jefe final"]
  },
  en: {
    "skip": "Skip to projects",
    "nav.work": "Cases", "nav.approach": "Approach", "nav.skills": "Power-ups", "nav.path": "Path", "nav.contact": "Let's talk",
    "hero.eyebrow": "Product Designer UX/UI · Medellín, Colombia",
    "hero.h1a": "I design enterprise software", "hero.h1b": "that people",
    "hero.lead": "For 5+ years I've walked into processes full of spreadsheets, emails and business rules, and walked out with <strong>clear flows, clean screens and teams that actually adopt the tool</strong>. My turf: energy, utilities, automation and AI.",
    "hero.cta1": "See the cases ↓", "hero.cta2": "Download CV",
    "stats.years": "years designing", "stats.cases": "cases in this portfolio", "stats.clients": "energy & utility clients", "stats.excel": "spreadsheets retired",
    "manifesto": "Enterprise platforms are known for being ugly and hard to use. <em>They don't have to be.</em> Behind every screen there's a field technician, an analyst with 200 requests or a recruiter with 500 resumes. <strong>I design for them</strong>, without losing sight of business rules or technical logic.",
    "work.eyebrow": "Solved cases", "work.title": "Tangled problems, clear solutions", "work.sub": "Every card is a real challenge. Click to see how I solved it.",
    "more.title": "And there's more in the warehouse…",
    "approach.eyebrow": "Approach", "approach.title": "From chaos to prototype in 4 steps",
    "skills.eyebrow": "Power-ups", "skills.title": "What's in my backpack",
    "path.eyebrow": "Path", "path.title": "How I got here",
    "contact.title": "Got a <span class=\"hl\">tangled</span> process?<br>Let's talk.",
    "contact.sub": "I reply fast. I promise not to send you a spreadsheet.",
    "contact.copy": "Copy email", "contact.cv": "CV (PDF) ↓",
    "footer": "Handmade, with coffee and a bit of voltage.", "footer.hint": "Hint: click the logo 5 times ⚡",
    rot: ["actually want to use.", "get on the first try.", "don't dread on Mondays.", "adopt without endless training."],
    typed: ["loading creativity... 100%", "turning spreadsheets into interfaces...", "connecting business + user + tech", "ready for your next challenge ⚡"],
    challenge: "The challenge", twist: "The hard part", solution: "How I solved it", complexity: "Complexity", view: "View case →",
    prev: "← Previous", next: "Next →", copied: "Email copied! 📋", voltage: "⚡ Voltage mode on",
    level: ["", "Chill", "Moderate", "Intense", "Very intense", "Final boss"]
  }
};

/* ---------- 3. LÓGICA ---------- */
const $ = (s, el = document) => el.querySelector(s);
const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] : v);
let lang = safeGet("lang") || "es";
let theme = safeGet("theme") || "dark";
let filter = "all";
let current = 0;

function safeGet(k) { try { return localStorage.getItem(k); } catch { return null; } }
function safeSet(k, v) { try { localStorage.setItem(k, v); } catch {} }

function applyLang() {
  document.documentElement.lang = lang;
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => { const v = dict[el.dataset.i18n]; if (v) el.textContent = v; });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => { const v = dict[el.dataset.i18nHtml]; if (v) el.innerHTML = v; });
  $("#langBtn").textContent = lang === "es" ? "EN" : "ES";
  $("#rotator").textContent = dict.rot[0];
  renderFilters(); renderGrid(); renderMore(); renderSteps(); renderSkills(); renderTimeline();
  if ($("#modal").open) openCase(current);
}

function renderFilters() {
  $("#filters").innerHTML = FILTERS.map((f) =>
    `<button role="tab" aria-selected="${f.key === filter}" data-f="${f.key}">${f[lang]}</button>`).join("");
}

function levelBolts(n) {
  return `<span class="level" title="${I18N[lang].complexity}: ${I18N[lang].level[n]}">` +
    [1,2,3,4,5].map((i) => `<span class="${i <= n ? "on" : "off"}">⚡</span>`).join("") + "</span>";
}

function renderGrid() {
  $("#grid").innerHTML = PROJECTS.map((p, i) => `
    <button class="card reveal ${filter !== "all" && !p.cats.includes(filter) ? "hide" : ""}" data-i="${i}" aria-haspopup="dialog">
      <div class="thumb"><img src="${p.images[0].src}" alt="" loading="lazy"><span class="client">${t(p.client)}</span></div>
      <div class="c-body">
        <h3>${t(p.title)}</h3>
        <p class="hook">${t(p.hook)}</p>
        <div class="meta">${levelBolts(p.level)} <span class="go">${I18N[lang].view}</span></div>
      </div>
    </button>`).join("");
  observeReveals();
}

function renderMore() {
  $("#moreList").innerHTML = MORE.map(([c, n]) => `<li><b>${t(n)}</b> · ${c}</li>`).join("");
}
function renderSteps() {
  $("#steps").innerHTML = STEPS.map((s, i) => `
    <li class="reveal"><span class="emoji">${s.e}</span><span class="num">0${i + 1}</span><h3>${s[lang][0]}</h3><p>${s[lang][1]}</p></li>`).join("");
  observeReveals();
}
function renderSkills() {
  $("#skillGroups").innerHTML = SKILLS.map((g) => `
    <div class="skill-group reveal ${g.star ? "star" : ""}"><h3><span>${g.e}</span>${g[lang]}</h3>
    <ul>${g.items[lang].map((x) => `<li>${x}</li>`).join("")}</ul></div>`).join("");
  observeReveals();
}
function renderTimeline() {
  $("#timeline").innerHTML = TIMELINE.map((x) => `
    <li class="reveal"><span class="when">${x.when}</span><h3>${x[lang][0]}</h3><div class="where">${x[lang][1]}</div>${x[lang][2] ? `<p>${x[lang][2]}</p>` : ""}</li>`).join("");
  observeReveals();
}

/* ----- Modal de caso ----- */
function visibleIdx() { return PROJECTS.map((p, i) => i).filter((i) => filter === "all" || PROJECTS[i].cats.includes(filter)); }

function openCase(i) {
  current = i;
  const p = PROJECTS[i], d = I18N[lang];
  $("#mBody").innerHTML = `
    <div class="m-head">
      <span class="client-tag">${t(p.client)}</span>
      <h2 id="mTitle">${t(p.title)}</h2>
      <div class="tags">${levelBolts(p.level)} ${p.tags.map((x) => `<span>${x}</span>`).join("")}</div>
    </div>
    <figure class="gallery">
      <div class="main"><img id="gMain" src="${p.images[0].src}" alt="${t(p.images[0].cap)}"></div>
      <figcaption id="gCap">${t(p.images[0].cap)}</figcaption>
      <div class="thumbs">${p.images.map((im, k) => `
        <button data-k="${k}" aria-current="${k === 0}" aria-label="${t(im.cap)}"><img src="${im.src}" alt="" loading="lazy"></button>`).join("")}</div>
    </figure>
    <div class="story">
      <div class="box challenge"><h4>🧨 ${d.challenge}</h4><p>${t(p.challenge)}</p></div>
      <div class="box twist"><h4>🌀 ${d.twist}</h4><p>${t(p.twist)}</p></div>
      <div class="box solution wide"><h4>💡 ${d.solution}</h4><ul>${p.solution[lang].map((s) => `<li>${s}</li>`).join("")}</ul></div>
    </div>
    <div class="m-nav">
      <button class="btn ghost" data-step="-1">${d.prev}</button>
      <button class="btn primary" data-step="1">${d.next}</button>
    </div>`;
  const m = $("#modal");
  if (!m.open) m.showModal();
  m.scrollTop = 0;
  history.replaceState(null, "", "#caso-" + p.id);
}

$("#mBody").addEventListener("click", (e) => {
  const th = e.target.closest("[data-k]");
  if (th) {
    const p = PROJECTS[current], k = +th.dataset.k;
    $("#gMain").src = p.images[k].src; $("#gMain").alt = t(p.images[k].cap);
    $("#gCap").textContent = t(p.images[k].cap);
    $("#mBody").querySelectorAll("[data-k]").forEach((b) => b.setAttribute("aria-current", b === th));
    $(".gallery .main").scrollTop = 0;
  }
  const st = e.target.closest("[data-step]");
  if (st) {
    const list = visibleIdx(), pos = list.indexOf(current);
    openCase(list[(pos + +st.dataset.step + list.length) % list.length]);
  }
});
function closeModal() { $("#modal").close(); }
$("#mClose").addEventListener("click", closeModal);
$("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") closeModal(); });
$("#modal").addEventListener("close", () => history.replaceState(null, "", "#work"));

$("#grid").addEventListener("click", (e) => { const c = e.target.closest(".card"); if (c) openCase(+c.dataset.i); });
$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  filter = b.dataset.f; renderFilters();
  document.querySelectorAll(".card").forEach((c) => {
    c.classList.toggle("hide", filter !== "all" && !PROJECTS[+c.dataset.i].cats.includes(filter));
  });
});

/* ----- Efecto 3D en tarjetas ----- */
$("#grid").addEventListener("mousemove", (e) => {
  const c = e.target.closest(".card"); if (!c || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
  c.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
});
$("#grid").addEventListener("mouseout", (e) => { const c = e.target.closest(".card"); if (c && !c.contains(e.relatedTarget)) c.style.transform = ""; });

/* ----- Aparición al hacer scroll + contadores ----- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    en.target.querySelectorAll?.(".count").forEach(countUp);
    io.unobserve(en.target);
  });
}, { threshold: .12 });
function observeReveals() { document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el)); }
function countUp(el) {
  const to = +el.dataset.to; let n = 0;
  const step = () => { n++; el.textContent = n; if (n < to) setTimeout(step, 900 / to); };
  step();
}

/* ----- Barra de "batería" y menú activo ----- */
const sections = ["work", "approach", "skills", "path", "contact"].map((id) => document.getElementById(id));
addEventListener("scroll", () => {
  const h = document.documentElement, p = h.scrollTop / (h.scrollHeight - h.clientHeight);
  $("#batteryFill").style.width = (p * 100).toFixed(1) + "%";
  let act = null; sections.forEach((s) => { if (s.getBoundingClientRect().top < 140) act = s.id; });
  document.querySelectorAll(".nav a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + act));
}, { passive: true });

/* ----- Texto rotativo y terminal ----- */
let ri = 0;
setInterval(() => {
  const r = $("#rotator"), list = I18N[lang].rot; ri = (ri + 1) % list.length;
  r.classList.remove("swap"); void r.offsetWidth; r.textContent = list[ri]; r.classList.add("swap");
}, 2800);
(function typeLoop() {
  let li = 0, ci = 0, del = false;
  (function tick() {
    const lines = I18N[lang].typed, line = lines[li % lines.length];
    ci += del ? -1 : 1; $("#typed").textContent = line.slice(0, ci);
    let wait = del ? 25 : 55;
    if (!del && ci >= line.length) { del = true; wait = 1600; }
    else if (del && ci <= 0) { del = false; li++; wait = 300; }
    setTimeout(tick, wait);
  })();
})();

/* ----- Controles ----- */
function applyTheme() {
  document.documentElement.dataset.theme = theme;
  $("#themeBtn").textContent = theme === "light" ? "🌙" : "☀️";
}
$("#themeBtn").addEventListener("click", () => { theme = theme === "light" ? "dark" : "light"; safeSet("theme", theme); applyTheme(); });
$("#langBtn").addEventListener("click", () => { lang = lang === "es" ? "en" : "es"; safeSet("lang", lang); applyLang(); });
$("#burger").addEventListener("click", () => {
  const open = $("#nav").classList.toggle("open"); $("#burger").setAttribute("aria-expanded", open);
});
$("#nav").addEventListener("click", (e) => { if (e.target.tagName === "A") { $("#nav").classList.remove("open"); $("#burger").setAttribute("aria-expanded", false); } });

function toast(msg) { const el = $("#toast"); el.textContent = msg; el.classList.add("show"); setTimeout(() => el.classList.remove("show"), 2200); }
$("#copyMail").addEventListener("click", () => {
  navigator.clipboard?.writeText("herreshapes@gmail.com").then(() => toast(I18N[lang].copied)).catch(() => {});
});

/* ----- Easter egg: 5 clics en el logo ----- */
let clicks = 0, clickTimer;
$("#logo").addEventListener("click", (e) => {
  clicks++; clearTimeout(clickTimer); clickTimer = setTimeout(() => (clicks = 0), 1200);
  if (clicks >= 5) {
    e.preventDefault(); clicks = 0;
    document.body.classList.add("zap"); setTimeout(() => document.body.classList.remove("zap"), 600);
    theme = document.documentElement.dataset.theme === "voltage" ? "dark" : "voltage";
    applyTheme(); toast(I18N[lang].voltage);
  }
});

/* ----- Inicio ----- */
$("#year").textContent = new Date().getFullYear();
applyTheme();
applyLang();
observeReveals();
const deep = location.hash.match(/^#caso-(.+)/);
if (deep) { const i = PROJECTS.findIndex((p) => p.id === deep[1]); if (i >= 0) openCase(i); }
