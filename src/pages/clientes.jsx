import "../styles/pages/clientes.css"

function Clientes() {
  return (
    <main className="clientes-page">
      <section className="clientes-hero">
        <div className="clientes-hero__content">
          <div className="clientes-hero__text">

            <h1>Ingreso a Zona de Clientes</h1>
            <p>
              Accedé a tus pólizas, pagos, documentación y gestiones desde un
              único lugar.
            </p>
          </div>

          <form className="clientes-login-card">
            <h2>Ingresá a tu cuenta</h2>

            <label>Número de documento</label>

            <div className="clientes-login-card__document">
              <select defaultValue="dni">
                <option value="dni">DNI</option>
                <option value="lc">LC</option>
                <option value="le">LE</option>
                <option value="pasaporte">Pasaporte</option>
              </select>

              <input type="text" placeholder="Número de documento" />
            </div>

            <label>Contraseña</label>

            <input type="password" placeholder="Contraseña" />

            <a href="#">Recuperar mi contraseña</a>

            <button type="submit" className="clientes-login-card__submit">
              Ingresar
            </button>

            <p>Soy cliente, pero no tengo usuario.</p>

            <button type="button" className="clientes-login-card__register">
              Crear usuario
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Clientes;