document.getElementById('boton-idiomas').addEventListener('click', function() {
	const idi= document.getElementById('idiomas');
	if(idi.style.height==="80px"){
		idi.style.height="0px";
		idi.style.opacity="0";
		idi.innerHTML="";
		} else {
			idi.style.height="80px";
			idi.innerHTML="<ul><li>Español nativo</li><li>Inglés: Nivel Avanzado</li><li>Portugués: Nivel Intermedio</li><li>Italiano: Nivel Básico</li></ul>";				
			idi.style.opacity="1";			
		}
});
document.getElementById('boton-habilidades').addEventListener('click', function() {
	const hab= document.getElementById('habilidades');
	if(hab.style.height==="190px"){
		hab.style.height="0px";
		hab.style.opacity="0";
		hab.innerHTML="";
		} else {
			hab.style.height="190px";
			hab.innerHTML="<ul><li>Buen manejo de AutoCad</li><li>Diseño mecánico</li><li>Cálculos de estructuras y de elementos de máquinas</li><li>Elaboración de reportes</li><li>Optimización de procesos productivos</li><li>Capacidad organizativa</li><li>Resolución de problemas</li><li>Trabajo en equipo</li></ul>";
			hab.style.opacity="1";
		}
});
document.getElementById('boton-softwares').addEventListener('click', function() {
	const sof= document.getElementById('softwares')
	if(sof.style.height==="140px"){
		sof.style.height="0px";
		sof.style.opacity="0";
		sof.innerHTML="";
		} else {
			sof.style.height="140px";
			sof.innerHTML="<ul><li>AutoCad: Dominio Avanzado</li><li>SolidWork: Dominio Intermedio</li><li>Catia: Dominio Intermedio</li><li>Microsoft Office (Word-Excel-Access): Dominio Intermedio</li></ul>";				sof.style.opacity="1";			
		}
});
