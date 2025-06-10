 // Contenido JSON embebido en el JavaScript
        const deportesContent = {
            "commitment": {
                "title": "Nuestro Compromiso con el Deporte",
                "description": "En la Fundación Santa Teresa, creemos que el deporte es una herramienta poderosa para el desarrollo integral de niños y jóvenes, especialmente en comunidades con menos recurso, a través de nuestro programa deportivo, Refuerza y Educa en el Deporte, estamos becando a niños y jóvenes talentosos para que reciban una formación de calidad en la filial de la Liga Deportiva Alajuelense en el cantón de Alvarado, esta alianza nos permite ofrecer a los estudiantes una preparación adecuada en el fútbol, fomentando su crecimiento personal y deportivo."
            },
            "support": {
                "description": "Contamos con el valioso apoyo de Don Rodolfo Arias Solano, conocido en el ámbito futbolístico como \"Fofi Arias\", quien aporta toda su experiencia acumulada a lo largo de los años, tanto a nivel nacional como internacional. Gracias a su liderazgo, nuestros jóvenes reciben una enseñanza profesional que va más allá de lo técnico, impulsando también valores como la disciplina, el trabajo en equipo y el respeto."
            },
            "disruptive": {
                "title": "Queremos ser disruptivos",
                "description": "Si algo no satisface nuestras expectativas de progreso, estamos decididos a construir los puentes necesarios para alcanzar nuestros objetivos, por eso, estamos organizando para el año 2025 el Torneo Primavera, un evento destinado a equipos de fútbol en categorías juveniles que, por falta de recursos, suelen quedar excluidos de los circuitos tradicionales, este torneo, que representa una metáfora de la \"primavera\" en la vida de los jugadores, busca ser una plataforma donde jóvenes talentos puedan destacar, independientemente de su condición económica o el tamaño de sus clubes."
            },
            "objective": {
                "description": "Nuestro objetivo es claro: brindar oportunidades reales a quienes más lo necesitan, fomentando el crecimiento de futuras promesas del deporte, queremos que cada joven, sin importar sus circunstancias, tenga la oportunidad de desarrollarse como persona y atleta, y estamos comprometidos a acompañarlos en este camino."
            },
            "futureAlliances": {
                "description": "Consideramos el deporte una actividad mucho más que lúdica, más bien una herramienta de desarrollo, y creemos que las alianzas nos beneficiarán, por ende, esperamos próximamente establecer alianzas con clubes, asociaciones deportivas, y otras organizaciones que nos permitan apoyar otras disciplinas deportivas más allá del fútbol."
            }
        };

        // Función para cargar el contenido de deportes
        function loadDeportesContent() {
            // Cargar compromiso con el deporte
            document.getElementById('commitment-title').textContent = deportesContent.commitment.title;
            document.getElementById('commitment-description').textContent = deportesContent.commitment.description;

            // Cargar apoyo de "Fofi Arias"
            document.getElementById('support-description').textContent = deportesContent.support.description;

            // Cargar sección disruptiva
            document.getElementById('disruptive-title').textContent = deportesContent.disruptive.title;
            document.getElementById('disruptive-description').textContent = deportesContent.disruptive.description;

            // Cargar objetivo
            document.getElementById('objective-description').textContent = deportesContent.objective.description;

            // Cargar alianzas futuras
            document.getElementById('future-alliances-description').textContent = deportesContent.futureAlliances.description;
        }

        // Cargar contenido cuando la página esté lista
        document.addEventListener('DOMContentLoaded', loadDeportesContent);