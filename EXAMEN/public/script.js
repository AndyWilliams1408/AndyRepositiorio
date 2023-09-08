document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/docentes')
      .then((response) => response.json())
      .then((data) => {
        const tbody = document.querySelector('tbody');
        data.forEach((docente) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${docente.cedula}</td>
            <td>${docente.nombre}</td>
            <td>${docente.apellido}</td>
            <td>${docente.telefono}</td>
            <td>${docente.correo_electronico}</td>
            <td>${new Date(docente.fecha_registro).toLocaleDateString()}</td>
          `;
          tbody.appendChild(row);
        });
      })
      .catch((error) => console.error(error));
  });
  