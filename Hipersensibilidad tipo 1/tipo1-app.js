document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DATOS BIBLIOGRÁFICA Y MOLECULAR ---
    const immunoData = {
        'sens_0': {
            title: 'Contacto Alergénico',
            superficial: 'El alérgeno (ej. ácaro del polvo Der p 1) entra en contacto con las barreras del organismo. Al ser el primer contacto, el paciente es asintomático.',
            cascade: `
                <div class="cascade-step"><strong>1. Actividad Enzimática:</strong> Alérgenos como Der p 1 poseen actividad proteasa endógena.</div>
                <div class="cascade-step"><strong>2. Ruptura de Barrera:</strong> Escisión de proteínas de las uniones estrechas (zonula occludens) como la ocludina y claudina.</div>
            `,
            biblio: 'Abbas, Inmunología Celular y Molecular, 9ª Ed. Cap. 20 (Trastornos por hipersensibilidad). Fainboin, Introducción a la Inmunología Humana, 6ª Ed.'
        },
        'sens_1': {
            title: 'Respuesta Epitelial (Alarminas)',
            superficial: 'El epitelio no es solo una barrera pasiva. Al sufrir daño o estrés por el alérgeno, secreta moléculas de alarma (alarminas) que instruyen al sistema inmune.',
            cascade: `
                <div class="cascade-step"><strong>1. Receptores PAR:</strong> Las proteasas del alérgeno activan Receptores Activados por Proteasas (PAR-2) en células epiteliales.</div>
                <div class="cascade-step"><strong>2. Secreción de Alarminas:</strong> Activación de vías NF-κB epiteliales → transcripción y liberación rápida de TSLP, IL-33 e IL-25.</div>
                <div class="cascade-step"><strong>3. Microambiente:</strong> Estas citocinas "condicionan" el tejido para una polarización Th2 estricta, inhibiendo respuestas Th1/IL-12.</div>
            `,
            biblio: 'Roitt, Inmunología Fundamentos, 12va Ed. Cap 23. Kuby, Inmunología, 6ta Ed.'
        },
        'sens_2': {
            title: 'Priming de la Célula Dendrítica',
            superficial: 'La Célula Dendrítica (APC) captura el alérgeno. Las alarminas alteran su maduración, programándola para enseñar al Linfocito T a volverse alérgico.',
            cascade: `
                <div class="cascade-step"><strong>1. Recepción de Alarminas:</strong> Unión de TSLP a TSLPR en la membrana de la DC.</div>
                <div class="cascade-step"><strong>2. Reprogramación Transcripcional:</strong> Supresión de IL-12 (clave para Th1) y fuerte up-regulación de OX40L y moléculas co-estimuladoras (CD80/86).</div>
                <div class="cascade-step"><strong>3. Migración:</strong> Expresión de CCR7 → quimiotaxis hacia los ganglios linfáticos drenantes siguiendo el gradiente de CCL19/CCL21.</div>
            `,
            biblio: 'Peakman, Inmunología Básica y Clínica, 2da Ed. Abbas, 9ª Ed.'
        },
        'sens_6': {
            title: 'Sinergia ILC2',
            superficial: 'Las Células Linfoides Innatas tipo 2 actúan como un amplificador temprano. Producen citocinas alérgicas mucho antes de que los linfocitos T entren en acción.',
            cascade: `
                <div class="cascade-step"><strong>1. Activación Innata:</strong> IL-33 y TSLP se unen a receptores ST2 y TSLPR en las ILC2 residentes en el tejido.</div>
                <div class="cascade-step"><strong>2. Vía GATA-3:</strong> Las ILC2 tienen expresión constitutiva alta del factor de transcripción GATA-3.</div>
                <div class="cascade-step"><strong>3. Explosión de Citocinas:</strong> Secreción masiva e inmediata de IL-4, IL-5 e IL-13, creando el nicho ecológico necesario para la diferenciación Th2 en el ganglio.</div>
            `,
            biblio: 'Male, Inmunología. Artículos recientes sobre Inmunidad Innata y Alergia.'
        },
        'sens_4': {
            title: 'Linfocito T Naïve',
            superficial: 'El Linfocito T CD4+ virgen (naïve) patrulla el ganglio linfático. Aún no tiene un fenotipo definido hasta que interactúa con la Dendrítica.',
            cascade: `
                <div class="cascade-step"><strong>1. Patrullaje:</strong> Ingreso al ganglio vía HEV mediado por L-selectina y CCR7.</div>
                <div class="cascade-step"><strong>2. Escaneo:</strong> Interacciones transitorias LFA-1 / ICAM-1 con múltiples DCs buscando su péptido afín.</div>
            `,
            biblio: 'Kuby, Inmunología, 6ta Ed.'
        },
        'sens_4_detail': {
            title: 'Sinapsis Inmunológica Th2',
            superficial: 'El momento crítico: La célula Dendrítica presenta el antígeno al Linfocito T, entregando las instrucciones químicas para crear la alergia.',
            cascade: `
                <div class="cascade-step"><strong>Señal 1 (Activación):</strong> El TCR reconoce el complejo péptido-MHC-II. Foforilación de ITAMs mediada por Lck → Activación de ZAP-70.</div>
                <div class="cascade-step"><strong>Señal 2 (Supervivencia):</strong> CD28 une a CD80/86. CRÍTICO: <strong>OX40L</strong> (de la DC condicionada) se une a <strong>OX40</strong> en el T.</div>
                <div class="cascade-step"><strong>Señal 3 (Diferenciación):</strong> Presencia de IL-4 (derivada de ILC2) en un medio con ausencia absoluta de IL-12.</div>
            `,
            biblio: 'Abbas, 9ª Ed. Cap. 20. Pavón Romero, Inmunología molecular, celular y traslacional.'
        },
        'sens_7': {
            title: 'Expansión del Clon Th2',
            superficial: 'El linfocito se convierte en Th2, una "fábrica" de citocinas (IL-4, IL-5, IL-13) que orquestan toda la respuesta alérgica.',
            cascade: `
                <div class="cascade-step"><strong>1. Vía JAK/STAT:</strong> La IL-4 extracelular se une a su receptor → fosforilación de STAT6 vía JAK1/JAK3.</div>
                <div class="cascade-step"><strong>2. Remodelación de Cromatina:</strong> STAT6 transloca al núcleo e induce la expresión de GATA-3. GATA-3 remodela epigenéticamente el <strong>Locus 5q31</strong>.</div>
                <div class="cascade-step"><strong>3. Producción Autocrina:</strong> Se transcriben masivamente los genes para IL-4 (loop autocrino), IL-5 (recluta eosinófilos) e IL-13.</div>
            `,
            biblio: 'Roitt, 12va Ed. Kuby, 6ta Ed.'
        },
        'sens_8': {
            title: 'Sinapsis B-T (Cambio de Isotipo)',
            superficial: 'El Linfocito B necesita ayuda del Th2 para dejar de producir IgM y empezar a producir el anticuerpo de la alergia: la IgE.',
            cascade: `
                <div class="cascade-step"><strong>1. Reconocimiento Vinculado:</strong> El Linfocito B (como APC) presenta el antígeno al Th2 activado.</div>
                <div class="cascade-step"><strong>2. Ligando CD40:</strong> El Th2 expresa CD40L, que se une al CD40 del Linfocito B (Señal indispensable).</div>
                <div class="cascade-step"><strong>3. Switch Genético:</strong> CD40L + IL-4 activan la enzima <strong>AID</strong> (Deaminasa Inducida por Activación). AID escinde el ADN en las regiones "switch", empalmando la región VDJ con el gen constante Cε.</div>
            `,
            biblio: 'Abbas, 9ª Ed. Roitt, 12va Ed.'
        },
        'sens_9': {
            title: 'Célula Plasmática (Fábrica IgE)',
            superficial: 'Fase final de la sensibilización: El Linfocito B se convierte en una célula plasmática que bombea anticuerpos IgE al torrente sanguíneo.',
            cascade: `
                <div class="cascade-step"><strong>1. Diferenciación Terminal:</strong> Factores de transcripción BLIMP-1 y XBP-1 dirigen la conversión morfológica (expansión del RER).</div>
                <div class="cascade-step"><strong>2. Secreción de IgE:</strong> Liberación sistémica de anticuerpos IgE específicos contra el alérgeno.</div>
                <div class="cascade-step"><strong>3. Destino Clínico:</strong> Esta IgE viajará a los tejidos (piel, pulmón, intestino) para unirse a los receptores FcεRI de los mastocitos, dejándolos "armados".</div>
            `,
            biblio: 'Abbas, 9ª Ed. Cap. 20. Fainboin, 6ta Ed.'
        }
    };

    // --- TOUR CINEMATOGRÁFICO ---
    const tourSteps = [
        { id: 'node-alergeno', dataId: 'sens_0' },
        { id: 'node-epitelio', dataId: 'sens_1' },
        { id: 'node-dc-tejido', dataId: 'sens_2' },
        { id: 'node-ilc2', dataId: 'sens_6' },
        { id: 'node-dc-ganglio', dataId: 'sens_4_detail' }, // Representa la sinapsis
        { id: 'node-th2', dataId: 'sens_7' },
        { id: 'node-bcell', dataId: 'sens_8' },
        { id: 'node-plasma', dataId: 'sens_9' }
    ];

    let currentTourIndex = -1;
    const canvasArea = document.getElementById('diagramCanvas');
    const infoPanel = document.getElementById('infoPanel');
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');
    const stepTitle = document.getElementById('tour-step-title');
    const stepCounter = document.getElementById('tour-step-counter');

    // Elementos de Animación
    const animActionArea = document.getElementById('animationActionArea');
    const btnPlayAnim = document.getElementById('btn-play-anim');
    const actorAllergen = document.getElementById('actor-allergen');
    let isAnimating = false;

    // Sincronizador de Flechas durante transiciones CSS (Panel Push)
    function syncLinesDuringTransition() {
        if (!window.lines) return;
        const start = performance.now();
        const duration = 700; // 700ms para cubrir los 0.6s de CSS transition
        function update(time) {
            window.lines.forEach(l => l.position());
            if (time - start < duration) {
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);
    }

    function openInfo(dataId) {
        const data = immunoData[dataId];
        if (!data) return;

        // Limpiar animaciones previas
        document.querySelector('.info-title').style.opacity = 0;
        setTimeout(() => {
            document.querySelector('.info-title').textContent = data.title;
            document.querySelector('.info-body').textContent = data.superficial;

            const cascadeSec = document.querySelector('.deep-cascade-section');
            if (data.cascade) {
                cascadeSec.style.display = 'block';
                document.querySelector('.info-cascade-content').innerHTML = data.cascade;
            } else {
                cascadeSec.style.display = 'none';
            }

            const biblioSec = document.querySelector('.info-biblio');
            if (data.biblio) {
                biblioSec.style.display = 'block';
                document.querySelector('.biblio-text').textContent = data.biblio;
            } else {
                biblioSec.style.display = 'none';
            }

            document.querySelector('.info-title').style.opacity = 1;
        }, 200);

        // Desplazar el panel (Push Effect)
        infoPanel.classList.add('active');
        document.body.classList.add('panel-open');
        syncLinesDuringTransition();
    }

    document.getElementById('infoPanelClose').addEventListener('click', () => {
        infoPanel.classList.remove('active');
        document.body.classList.remove('panel-open');
        exitTourMode();
        syncLinesDuringTransition();
    });

    // --- LÓGICA DEL TOUR CON PARALLAX Y ASSEMBLAGE ---
    function updateTourUI() {
        if (currentTourIndex < 0) {
            btnPrev.disabled = true;
            stepTitle.textContent = "Atlas Libre";
            stepCounter.textContent = "Selecciona una estructura biológica";
            return;
        }

        btnPrev.disabled = (currentTourIndex === 0);
        btnNext.textContent = (currentTourIndex === tourSteps.length - 1) ? "Finalizar Cascada" : "Siguiente Fase ➡";

        const step = tourSteps[currentTourIndex];
        const data = immunoData[step.dataId];
        stepTitle.textContent = data.title;
        stepCounter.textContent = `Fase ${currentTourIndex + 1} de ${tourSteps.length}`;

        // Efecto Cinemático en Canvas
        canvasArea.classList.add('tour-active');

        // Desenfocar todo
        document.querySelectorAll('.organic-node, .molecule-node, .anat-bg').forEach(n => {
            n.classList.remove('focused');
            n.classList.add('dimmed');
        });

        // Enfocar el actual
        const activeNode = document.getElementById(step.id);
        if (activeNode) {
            activeNode.classList.remove('dimmed');
            activeNode.classList.add('focused');
            // Hacer scroll con margen para la pantalla dividida
            activeNode.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }

        openInfo(step.dataId);

        // Control del botón de animación
        resetAnimations();
        if (currentTourIndex === 0 || currentTourIndex === 1 || currentTourIndex === 2) {
            animActionArea.style.display = 'block';
            btnPlayAnim.disabled = false;
            if (currentTourIndex === 0) {
                document.getElementById('play-anim-text').textContent = 'Ver Ingreso a Mucosa';
            } else if (currentTourIndex === 1) {
                document.getElementById('play-anim-text').textContent = 'Ver Daño Epitelial';
            } else {
                document.getElementById('play-anim-text').textContent = 'Ver Captura DC';
            }
        } else {
            animActionArea.style.display = 'none';
        }
    }

    function exitTourMode() {
        currentTourIndex = -1;
        canvasArea.classList.remove('tour-active');
        animActionArea.style.display = 'none';
        resetAnimations();
        document.querySelectorAll('.organic-node, .molecule-node, .anat-bg').forEach(n => {
            n.classList.remove('focused', 'dimmed');
        });
        updateTourUI();
    }

    btnNext.addEventListener('click', () => {
        if (currentTourIndex < tourSteps.length - 1) {
            currentTourIndex++;
            updateTourUI();
        } else {
            infoPanel.classList.remove('active');
            document.body.classList.remove('panel-open');
            exitTourMode();
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentTourIndex > 0) {
            currentTourIndex--;
            updateTourUI();
        }
    });

    // --- EVENTOS INTERACTIVOS (Drag & Click) ---
    document.querySelectorAll('.interactable, .route-node, .molecule-node').forEach(node => {
        // Inicializamos Drag
        const drag = new PlainDraggable(node, {
            onMove: () => { if (window.lines) window.lines.forEach(l => l.position()); },
            onDragEnd: () => {
                localStorage.setItem('pos_v3_' + node.id, JSON.stringify({ left: drag.left, top: drag.top }));
            }
        });

        // Forzar nuevo layout ignorando las posiciones corruptas anteriores
        const saved = localStorage.getItem('pos_v3_' + node.id);
        if (saved) {
            const pos = JSON.parse(saved);
            drag.left = pos.left;
            drag.top = pos.top;
        }

        // Evento de Click
        let isDragging = false;
        node.addEventListener('mousedown', () => isDragging = false);
        node.addEventListener('mousemove', () => isDragging = true);
        node.addEventListener('mouseup', () => {
            if (!isDragging) {
                exitTourMode(); // Salir del tour si hace clic libre
                openInfo(node.getAttribute('data-info'));

                // Efecto de foco temporal
                document.querySelectorAll('.organic-node').forEach(n => n.classList.remove('focused'));
                node.classList.add('focused');
            }
        });
    });

    // --- MOTOR DE ANIMACIONES FÍSICAS ---
    function getCenter(el) {
        // Se asume que el estilo left y top están en px relativos al canvas
        const left = parseFloat(el.style.left || 0);
        const top = parseFloat(el.style.top || 0);
        const rect = el.getBoundingClientRect();
        return { x: left + rect.width / 2, y: top + rect.height / 2 };
    }

    function resetAnimations() {
        isAnimating = false;
        actorAllergen.style.display = 'none';
        actorAllergen.classList.remove('phagocytized');
        document.getElementById('node-epitelio').classList.remove('effect-impact');
        document.getElementById('node-dc-tejido').classList.remove('effect-processing');
        btnPlayAnim.disabled = false;
    }

    btnPlayAnim.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;
        btnPlayAnim.disabled = true;

        actorAllergen.style.display = 'block';
        actorAllergen.style.transition = 'none'; // Desactivar para salto instantáneo
        actorAllergen.classList.remove('phagocytized');

        if (currentTourIndex === 0) { // Entrada del Alérgeno (Exterior a Mucosa)
            const startNode = document.getElementById('node-alergeno');
            const targetNode = document.getElementById('node-resp'); // Simula entrar por la nariz

            const startCenter = getCenter(startNode);
            actorAllergen.style.left = (startCenter.x - 20) + 'px';
            actorAllergen.style.top = (startCenter.y - 20) + 'px';

            void actorAllergen.offsetWidth;

            actorAllergen.style.transition = 'left 1.5s ease-in, top 1.5s ease-in, transform 0.8s';
            const targetCenter = getCenter(targetNode);
            actorAllergen.style.left = (targetCenter.x - 20) + 'px';
            actorAllergen.style.top = (targetCenter.y - 20) + 'px';

            setTimeout(() => {
                targetNode.classList.add('effect-processing'); // Brillo en la vía
                setTimeout(() => { isAnimating = false; btnPlayAnim.disabled = false; }, 1000);
            }, 1500);

        } else if (currentTourIndex === 1) { // Impacto Epitelial
            const startNode = document.getElementById('node-resp');
            const targetNode = document.getElementById('node-epitelio');

            // Inicio
            const startCenter = getCenter(startNode);
            actorAllergen.style.left = (startCenter.x - 20) + 'px';
            actorAllergen.style.top = (startCenter.y - 20) + 'px';

            // Forzar reflow para aplicar la posición sin transición
            void actorAllergen.offsetWidth;

            // Viaje (Reactivar transición)
            actorAllergen.style.transition = 'left 1s ease-in, top 1s ease-in, transform 0.8s';
            const targetCenter = getCenter(targetNode);
            actorAllergen.style.left = (targetCenter.x - 20) + 'px';
            actorAllergen.style.top = (targetCenter.y - 20) + 'px';

            setTimeout(() => {
                targetNode.classList.add('effect-impact');
                setTimeout(() => { isAnimating = false; btnPlayAnim.disabled = false; }, 1000);
            }, 1000);

        } else if (currentTourIndex === 2) { // Captura DC (Fagocitosis)
            const startNode = document.getElementById('node-epitelio');
            const targetNode = document.getElementById('node-dc-tejido');

            // Inicio en Epitelio
            const startCenter = getCenter(startNode);
            actorAllergen.style.left = (startCenter.x - 20) + 'px';
            actorAllergen.style.top = (startCenter.y - 20) + 'px';

            void actorAllergen.offsetWidth;

            // Viaje a la superficie de la DC
            actorAllergen.style.transition = 'left 1.2s ease-in-out, top 1.2s ease-in-out, transform 1s';
            const targetCenter = getCenter(targetNode);
            actorAllergen.style.left = (targetCenter.x - 20) + 'px';
            actorAllergen.style.top = (targetCenter.y - 80) + 'px'; // Ligeramente arriba (superficie)

            // Pausa (Binding) y luego Endocitosis
            setTimeout(() => {
                // Internalización
                actorAllergen.style.top = (targetCenter.y - 20) + 'px'; // Centro
                actorAllergen.classList.add('phagocytized'); // Se encoge
                targetNode.classList.add('effect-processing'); // Brillo de la DC

                setTimeout(() => { isAnimating = false; btnPlayAnim.disabled = false; }, 2000);
            }, 1200);
        }
    });

    // --- LÍNEAS DE CONEXIÓN ORGÁNICAS (LeaderLine) ---
    setTimeout(() => {
        window.lines = [];

        function connect(startId, endId, color, options = {}) {
            const start = document.getElementById(startId);
            const end = document.getElementById(endId);
            if (!start || !end) return;

            const line = new LeaderLine(start, end, {
                color: color,
                size: 2,
                path: 'fluid',
                startSocket: 'bottom',
                endSocket: 'top',
                dropShadow: false,
                ...options
            });
            window.lines.push(line);
            return line;
        }

        // Efecto Cinemático: Animación de "Pulsos" (Partículas fluyendo)
        const animPulse = { animation: true };
        // Color sutil para que no distraiga
        const baseColor = 'rgba(255, 255, 255, 0.15)';

        // Fase 1: Entrada y Epitelio
        connect('node-alergeno', 'node-epitelio', 'rgba(231, 76, 60, 0.4)', { path: 'fluid', dash: animPulse, startSocket: 'right', endSocket: 'left' });
        connect('node-resp', 'node-epitelio', baseColor, { path: 'straight', startSocket: 'right', endSocket: 'left' });
        connect('node-dig', 'node-epitelio', baseColor, { path: 'straight', startSocket: 'right', endSocket: 'left' });
        connect('node-piel', 'node-epitelio', baseColor, { path: 'straight', startSocket: 'right', endSocket: 'left' });

        // Fase 2: Alarminas
        connect('node-epitelio', 'node-tslp', 'rgba(231, 76, 60, 0.3)', { path: 'straight', startSocket: 'bottom', endSocket: 'top' });
        connect('node-epitelio', 'node-il33', 'rgba(230, 126, 34, 0.3)', { path: 'straight', startSocket: 'bottom', endSocket: 'top' });
        connect('node-epitelio', 'node-il25', 'rgba(241, 196, 15, 0.3)', { path: 'straight', startSocket: 'bottom', endSocket: 'top' });

        // Fase 3: Captura Innata (DC e ILC2)
        connect('node-tslp', 'node-dc-tejido', 'rgba(231, 76, 60, 0.5)', { dash: animPulse, path: 'fluid', startSocket: 'right', endSocket: 'left' });
        connect('node-il33', 'node-ilc2', 'rgba(230, 126, 34, 0.5)', { dash: animPulse, path: 'fluid', startSocket: 'right', endSocket: 'left' });

        // Fase 4: Migración
        const migrationLine = connect('node-dc-tejido', 'node-dc-ganglio', 'var(--c-purple)', { size: 3, dash: animPulse, path: 'fluid', startSocket: 'right', endSocket: 'left' });
        if (migrationLine) migrationLine.setOptions({ middleLabel: LeaderLine.captionLabel('Migración Linfática', { color: '#9B59B6', outlineColor: '#000' }) });

        const il4Line = connect('node-ilc2', 'synapse-labels', 'var(--c-orange)', { size: 2, dash: animPulse, path: 'fluid', startSocket: 'right', endSocket: 'left' });
        if (il4Line) il4Line.setOptions({ middleLabel: LeaderLine.captionLabel('IL-4 Temprana', { color: '#E67E22', outlineColor: '#000' }) });

        // Fase 5: Sinapsis y Diferenciación Th2
        // La sinapsis es física, solo apuntamos la DC madura al T Naive
        connect('node-dc-ganglio', 'node-t-naive', 'var(--c-blue)', { size: 4, dash: animPulse, path: 'straight', startSocket: 'right', endSocket: 'left' });

        // Diferenciación Th2
        connect('node-t-naive', 'node-th2', 'var(--c-blue)', { path: 'straight', dash: animPulse, startSocket: 'bottom', endSocket: 'top' });

        // Fase 6: Cooperación B y Producción IgE
        connect('node-th2', 'node-bcell', 'var(--c-purple)', { path: 'straight', dash: animPulse, startSocket: 'bottom', endSocket: 'top' });
        connect('node-bcell', 'node-plasma', 'var(--c-purple)', { path: 'straight', dash: animPulse, startSocket: 'bottom', endSocket: 'top' });

        // Actualizar al hacer scroll o redimensionar ventana
        document.getElementById('diagramWrapper').addEventListener('scroll', () => {
            window.lines.forEach(l => l.position());
        });
        window.addEventListener('resize', () => {
            window.lines.forEach(l => l.position());
        });

        // Primer trazado
        window.lines.forEach(l => l.position());

    }, 800);

});
