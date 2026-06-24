import { useState } from "react";
import { quoteProducts } from "../../data/quoteProducts";
import "../../styles/components/MainForm.css"


function MainForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    product: "",
    name: "",
    postalCode: "",
    phone: "",
  });

  function handleProductSelect(productId) {
    setFormData((prevData) => ({
      ...prevData,
      product: productId,
    }));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleNextStep() {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  }

  function handlePreviousStep() {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Cotización enviada:", formData);
  }

  return (
    <section className="main-form-card">
      <h2 className="main-form-card__title">
        Contratá tu seguro<br /> 100% 
        Online
      </h2>

      <form className="main-form" onSubmit={handleSubmit}>
        <div className="main-form__steps">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`main-form__step ${
                currentStep >= step ? "main-form__step--active" : ""
              }`}
            >
              {step}
            </div>
          ))}

          <div className="main-form__steps-line">
            <span
              style={{
                width:
                  currentStep === 1
                    ? "0%"
                    : currentStep === 2
                    ? "50%"
                    : "100%",
              }}
            />
          </div>
        </div>

        {currentStep === 1 && (
          <div className="main-form__step-content">
            <h3>Elegí tu producto</h3>

            <div className="main-form__products">
              {quoteProducts.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  className={`main-form__product ${
                    formData.product === product.id
                      ? "main-form__product--selected"
                      : ""
                  }`}
                  onClick={() => handleProductSelect(product.id)}
                >
                  <span>{product.icon}</span>
                  {product.label}
                </button>
              ))}
            </div>

            <div className="main-form__fields">
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleInputChange}
              />

              <input
                type="text"
                name="postalCode"
                placeholder="Código postal"
                value={formData.postalCode}
                onChange={handleInputChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="main-form__step-content">
            <h3>Datos adicionales</h3>
            <p>Este paso queda preparado para completar luego.</p>
          </div>
        )}

        {currentStep === 3 && (
          <div className="main-form__step-content">
            <h3>Confirmación</h3>
            <p>Revisá los datos antes de enviar la cotización.</p>
          </div>
        )}

        <div className="main-form__actions">
          {currentStep > 1 && (
            <button type="button" onClick={handlePreviousStep}>
              Atrás
            </button>
          )}

          {currentStep < 3 ? (
            <button type="button" onClick={handleNextStep}>
              Continuar
            </button>
          ) : (
            <button type="submit">Enviar cotización</button>
          )}
        </div>
      </form>
    </section>
  );
}

export default MainForm;