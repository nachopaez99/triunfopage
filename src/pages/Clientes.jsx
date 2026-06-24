import "../styles/pages/clientes.css";

function Clientes() {
  return (
    <main className="clientes-page">
      <section className="clientes-login">
        <div className="clientes-login__form-panel">
          <h1>Ingreso a Zona de Clientes:</h1>

          <form className="clientes-form">
            <div className="clientes-form__group">
              <label>Número de documento:</label>

              <div className="clientes-form__document-row">
                <select defaultValue="dni">
                  <option value="dni">DNI (Documento Nacional de Identidad)</option>
                  <option value="lc">LC</option>
                  <option value="le">LE</option>
                  <option value="pasaporte">Pasaporte</option>
                </select>

                <input type="text" placeholder="Número de documento" />
              </div>
            </div>

            <div className="clientes-form__group">
              <label>Contraseña:</label>

              <div className="clientes-form__password">
                <input type="password" placeholder="Contraseña" />
                <button type="button" aria-label="Mostrar contraseña">
                  ◉
                </button>
              </div>
            </div>

            <a href="#" className="clientes-form__recovery">
              Recuperar mi contraseña
            </a>

            <button type="submit" className="clientes-form__submit">
              Ingresar
            </button>

            <p className="clientes-form__register-text">
              Soy cliente, pero no tengo usuario.
            </p>

            <button type="button" className="clientes-form__register">
              Crear usuario
            </button>
          </form>
        </div>

        <div className="clientes-login__image-panel" aria-hidden="true" />
      </section>
    </main>
  );
}

export default Clientes;
