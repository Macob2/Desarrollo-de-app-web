const form = document.getElementById('loginForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formStatus = document.getElementById('formStatus');
    const togglePwd = document.getElementById('togglePwd');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');

    function validateEmail(){
      if(!email.value){ emailError.textContent = 'Ingresa tu correo.'; return false; }
      if(!email.checkValidity()){ emailError.textContent = 'Formato de correo no válido.'; return false; }
      emailError.textContent = ''; return true;
    }

    function validatePassword(){
      if(!password.value){ passwordError.textContent = 'Ingresa tu contraseña.'; return false; }
      if(password.value.length < 8){ passwordError.textContent = 'Debe tener al menos 8 caracteres.'; return false; }
      passwordError.textContent = ''; return true;
    }

    email.addEventListener('input', validateEmail);
    password.addEventListener('input', validatePassword);

    togglePwd.addEventListener('click', () => {
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      togglePwd.textContent = type === 'password' ? '👁️' : '🙈';
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const ok = validateEmail() & validatePassword();
      if(!ok) return;

      // Simula llamada a backend
      submitBtn.disabled = true; btnText.style.display='none'; btnSpinner.style.display='inline';
      formStatus.textContent = '';
      await new Promise(r => setTimeout(r, 1000));

      // Aquí reemplaza por tu lógica real de autenticación (fetch/axios)
      const remember = document.getElementById('remember').checked;
      formStatus.textContent = '✅ Sesión iniciada (demo).' + (remember ? ' (Recuerda activado)' : '');
      submitBtn.disabled = false; btnText.style.display='inline'; btnSpinner.style.display='none';

      // Navegación de ejemplo tras login exitoso
      // window.location.href = '/dashboard.html';
    });

    function demoLogin(provider){
      alert('Demo de OAuth con ' + provider + '. Integra tu proveedor en el backend.');
    }

    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Evita el envío normal del formulario
    
        // Aquí podrías validar usuario/contraseña antes de redirigir
        // Ejemplo rápido:
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
    
        if (email && password.length >= 8) {
            // Abre en otra pestaña
            window.open(href="interfaz.html");
        } else {
            alert("Por favor, completa los campos correctamente");
        }
    });

    document.querySelectorAll('.switch').forEach(sw=>{
        sw.addEventListener('click', ()=>{
          sw.classList.toggle('on');
          const status = sw.previousElementSibling;
          status.textContent = sw.classList.contains('on') ? 'On' : 'Off';
        });
      });