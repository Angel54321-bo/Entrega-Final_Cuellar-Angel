// Variables globales
let estudiantes = [];
let reconocimientos = [];

// Inicialización cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar estadísticas
    inicializarEstadisticas();
    
    // Cargar grados escolares
    cargarGrados();
    
    // Configurar tema oscuro/claro
    configurarTema();
    
    // Configurar formulario de contacto
    configurarFormularioContacto();
    
    // Inicializar animaciones
    inicializarAnimaciones();
    
    // Simular datos iniciales
    simularDatosIniciales();
});

// Función para inicializar estadísticas
function inicializarEstadisticas() {
    // Obtener elementos de estadísticas
    const totalStudents = document.getElementById('totalStudents');
    const recognitionAccuracy = document.getElementById('recognitionAccuracy');
    const dailyRecognitions = document.getElementById('dailyRecognitions');
    const responseTime = document.getElementById('responseTime');
    
    // Valores iniciales
    let studentsCount = 0;
    let accuracy = 0;
    let recognitions = 0;
    let time = 0;
    
    // Animación de contadores
    const interval = setInterval(() => {
        studentsCount += 5;
        accuracy += 0.5;
        recognitions += 2;
        time += 0.01;
        
        if (studentsCount >= 300) studentsCount = 300;
        if (accuracy >= 98.5) accuracy = 98.5;
        if (recognitions >= 150) recognitions = 150;
        if (time >= 0.8) time = 0.8;
        
        totalStudents.textContent = studentsCount;
        recognitionAccuracy.textContent = accuracy.toFixed(1) + '%';
        dailyRecognitions.textContent = recognitions;
        responseTime.textContent = time.toFixed(2) + 's';
        
        if (studentsCount >= 300 && accuracy >= 98.5 && recognitions >= 150 && time >= 0.8) {
            clearInterval(interval);
        }
    }, 30);
}

// Función para cargar grados escolares
function cargarGrados() {
    const gradosContainer = document.getElementById('grados-container');
    
    const grados = [
        { id: 1, nombre: '1ro Secundaria', icono: 'fas fa-1', estudiantes: 45 },
        { id: 2, nombre: '2do Secundaria', icono: 'fas fa-2', estudiantes: 52 },
        { id: 3, nombre: '3ro Secundaria', icono: 'fas fa-3', estudiantes: 48 },
        { id: 4, nombre: '4to Secundaria', icono: 'fas fa-4', estudiantes: 50 },
        { id: 5, nombre: '5to Secundaria', icono: 'fas fa-5', estudiantes: 47 },
        { id: 6, nombre: '6to Secundaria', icono: 'fas fa-6', estudiantes: 55 }
    ];
    
    grados.forEach(grado => {
        const gradoCard = document.createElement('div');
        gradoCard.className = 'grado-card';
        gradoCard.innerHTML = `
            <div class="grado-icon">
                <i class="${grado.icono}"></i>
            </div>
            <h3 class="grado-title">${grado.nombre}</h3>
            <div class="grado-count">${grado.estudiantes} estudiantes</div>
        `;
        
        // Añadir evento de clic
        gradoCard.addEventListener('click', function() {
            mostrarDetallesGrado(grado);
        });
        
        gradosContainer.appendChild(gradoCard);
    });
}

// Función para mostrar detalles del grado
function mostrarDetallesGrado(grado) {
    // Aquí podrías abrir un modal con más detalles
    alert(`Grado: ${grado.nombre}\nEstudiantes: ${grado.estudiantes}\n\nFuncionalidad en desarrollo: Pronto podrás ver todos los detalles de este grado.`);
}

// Función para configurar el tema oscuro/claro
function configurarTema() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    // Verificar preferencia guardada
    const temaOscuro = localStorage.getItem('temaOscuro') === 'true';
    
    if (temaOscuro) {
        document.body.classList.add('dark-mode');
        icon.className = 'fas fa-sun';
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            icon.className = 'fas fa-sun';
            localStorage.setItem('temaOscuro', 'true');
        } else {
            icon.className = 'fas fa-moon';
            localStorage.setItem('temaOscuro', 'false');
        }
    });
}

// Estilos para modo oscuro
const darkModeStyles = `
    <style id="dark-mode-styles">
        body.dark-mode {
            background-color: #0F172A;
            color: #E2E8F0;
        }
        
        body.dark-mode .section-title {
            color: #F1F5F9;
        }
        
        body.dark-mode .feature-card,
        body.dark-mode .step-card,
        body.dark-mode .grado-card,
        body.dark-mode .contact-form {
            background-color: #1E293B;
            color: #E2E8F0;
        }
        
        body.dark-mode .feature-title,
        body.dark-mode .step-title,
        body.dark-mode .grado-title {
            color: #F1F5F9;
        }
        
        body.dark-mode .feature-description,
        body.dark-mode .step-description,
        body.dark-mode .grado-count {
            color: #94A3B8;
        }
        
        body.dark-mode .form-control,
        body.dark-mode .form-select {
            background-color: #334155;
            border-color: #475569;
            color: #E2E8F0;
        }
        
        body.dark-mode .form-control:focus,
        body.dark-mode .form-select:focus {
            background-color: #334155;
            border-color: #3B82F6;
            color: #E2E8F0;
        }
        
        body.dark-mode .form-label {
            color: #E2E8F0;
        }
    </style>
`;

// Añadir estilos de modo oscuro al documento
document.head.insertAdjacentHTML('beforeend', darkModeStyles);

// Función para configurar el formulario de contacto
function configurarFormularioContacto() {
    const formContacto = document.getElementById('formContacto');
    
    formContacto.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Validación simple
        if (!nombre || !email || !asunto || !mensaje) {
            mostrarAlerta('Por favor, completa todos los campos.', 'error');
            return;
        }
        
        // Simular envío
        mostrarAlerta('Mensaje enviado correctamente. Te contactaremos pronto.', 'success');
        
        // Resetear formulario
        formContacto.reset();
        
        // Registrar en la consola (en un caso real, enviarías a un servidor)
        console.log('Mensaje de contacto enviado:', {
            nombre,
            email,
            asunto,
            mensaje,
            fecha: new Date().toISOString()
        });
    });
}

// Función para mostrar alertas
function mostrarAlerta(mensaje, tipo) {
    // Crear elemento de alerta
    const alerta = document.createElement('div');
    alerta.className = `alert alert-${tipo === 'error' ? 'danger' : 'success'} alert-dismissible fade show`;
    alerta.setAttribute('role', 'alert');
    alerta.innerHTML = `
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Añadir al inicio del body
    document.body.insertBefore(alerta, document.body.firstChild);
    
    // Auto-eliminar después de 5 segundos
    setTimeout(() => {
        if (alerta.parentNode) {
            alerta.remove();
        }
    }, 5000);
}

// Función para inicializar animaciones
function inicializarAnimaciones() {
    // Animación de aparición al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animar
    document.querySelectorAll('.feature-card, .step-card, .grado-card').forEach(el => {
        observer.observe(el);
    });
}

// Función para simular datos iniciales
function simularDatosIniciales() {
    // Simular datos de estudiantes
    const nombres = ['Juan Pérez', 'María Gómez', 'Carlos López', 'Ana Martínez', 'Pedro Rodríguez'];
    const grados = ['1ro Secundaria', '2do Secundaria', '3ro Secundaria', '4to Secundaria', '5to Secundaria', '6to Secundaria'];
    
    for (let i = 1; i <= 50; i++) {
        const nombre = nombres[Math.floor(Math.random() * nombres.length)];
        const grado = grados[Math.floor(Math.random() * grados.length)];
        const fechaRegistro = new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
        
        estudiantes.push({
            id: i,
            nombre: `${nombre} ${i}`,
            grado,
            fechaRegistro,
            ultimoAcceso: new Date(),
            imagenUrl: `assets/estudiantes/estudiante${(i % 10) + 1}.jpg`
        });
    }
    
    // Simular reconocimientos de hoy
    const hoy = new Date();
    for (let i = 0; i < 20; i++) {
        const estudiante = estudiantes[Math.floor(Math.random() * estudiantes.length)];
        const hora = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate(), 
                              Math.floor(Math.random() * 12) + 7, Math.floor(Math.random() * 60));
        
        reconocimientos.push({
            estudianteId: estudiante.id,
            estudianteNombre: estudiante.nombre,
            hora,
            grado: estudiante.grado,
            precision: (Math.random() * 0.2 + 0.8).toFixed(2) // Entre 0.8 y 1.0
        });
    }
    
    console.log('Datos simulados cargados:', {
        totalEstudiantes: estudiantes.length,
        reconocimientosHoy: reconocimientos.length
    });
}

// Función para registrar un nuevo estudiante
function registrarEstudiante(datos) {
    // Validar datos
    if (!datos.nombre || !datos.grado) {
        return { success: false, message: 'Nombre y grado son requeridos' };
    }
    
    // Crear nuevo estudiante
    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        ...datos,
        fechaRegistro: new Date(),
        ultimoAcceso: null,
        imagenUrl: datos.imagenUrl || 'assets/estudiantes/default.jpg'
    };
    
    // Añadir a la lista
    estudiantes.push(nuevoEstudiante);
    
    // Actualizar estadísticas
    actualizarEstadisticas();
    
    return { 
        success: true, 
        message: 'Estudiante registrado correctamente',
        estudiante: nuevoEstudiante
    };
}

// Función para actualizar estadísticas
function actualizarEstadisticas() {
    const totalStudents = document.getElementById('totalStudents');
    if (totalStudents) {
        // Animar el cambio del número
        const current = parseInt(totalStudents.textContent);
        const target = estudiantes.length;
        
        animateNumber(totalStudents, current, target, 500);
    }
}

// Función para animar números
function animateNumber(element, start, end, duration) {
    let startTimestamp = null;
    
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    
    window.requestAnimationFrame(step);
}

// Función para simular reconocimiento facial
function simularReconocimiento() {
    // Seleccionar un estudiante aleatorio
    const estudiante = estudiantes[Math.floor(Math.random() * estudiantes.length)];
    const precision = (Math.random() * 0.15 + 0.85).toFixed(2); // Entre 0.85 y 1.0
    
    // Registrar reconocimiento
    const reconocimiento = {
        estudianteId: estudiante.id,
        estudianteNombre: estudiante.nombre,
        hora: new Date(),
        grado: estudiante.grado,
        precision: precision
    };
    
    reconocimientos.push(reconocimiento);
    
    // Actualizar último acceso del estudiante
    estudiante.ultimoAcceso = new Date();
    
    return reconocimiento;
}

// Función para obtener reporte diario
function obtenerReporteDiario() {
    const hoy = new Date();
    const inicioDia = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
    
    const reconocimientosHoy = reconocimientos.filter(r => 
        new Date(r.hora) >= inicioDia
    );
    
    const porGrado = {};
    reconocimientosHoy.forEach(r => {
        if (!porGrado[r.grado]) {
            porGrado[r.grado] = 0;
        }
        porGrado[r.grado]++;
    });
    
    return {
        fecha: hoy,
        totalReconocimientos: reconocimientosHoy.length,
        primerReconocimiento: reconocimientosHoy.length > 0 ? 
            new Date(Math.min(...reconocimientosHoy.map(r => new Date(r.hora)))) : null,
        ultimoReconocimiento: reconocimientosHoy.length > 0 ? 
            new Date(Math.max(...reconocimientosHoy.map(r => new Date(r.hora)))) : null,
        porGrado,
        estudiantesUnicos: [...new Set(reconocimientosHoy.map(r => r.estudianteId))].length
    };
}

// Función para exportar datos (simulada)
function exportarDatos(formato = 'json') {
    const datos = {
        estudiantes,
        reconocimientos,
        reporte: obtenerReporteDiario(),
        fechaExportacion: new Date().toISOString()
    };
    
    if (formato === 'json') {
        const datosStr = JSON.stringify(datos, null, 2);
        const blob = new Blob([datosStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `german-busch-datos-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        return { success: true, message: 'Datos exportados como JSON' };
    } else {
        return { success: false, message: 'Formato no soportado' };
    }
}

// Función para buscar estudiante
function buscarEstudiante(termino) {
    termino = termino.toLowerCase();
    
    return estudiantes.filter(estudiante => 
        estudiante.nombre.toLowerCase().includes(termino) ||
        estudiante.grado.toLowerCase().includes(termino) ||
        estudiante.id.toString().includes(termino)
    );
}

// Inicializar tooltips de Bootstrap
document.addEventListener('DOMContentLoaded', function() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Configurar eventos de navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Solo para enlaces internos
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});