document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/docentes')
      .then((response) => response.json())
      .then((data) => {
        const tbody = document.querySelector('tbody');
        data.forEach((docente) => {