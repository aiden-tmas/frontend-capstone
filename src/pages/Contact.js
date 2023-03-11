import "../styles/contact.scss";

export default function Contact() {
  const handleSubmit = (e) => {
    document.getElementById("contact-form").reset();
  };

  return (
    <div className="main-container">
      <div className="main-header">
        <h1>CONTACT US</h1>
      </div>
      <div className="form-container">
        <form
          className="contact-form"
          id="contact-form"
          onSubmit={() => handleSubmit}
        >
          <div className="contact-info">
            <div className="name">
              <div className="input-field">
                <input
                  className="first-name-field"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>

              <div className="input-field">
                <input
                  className="last-name-field"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="email-phone">
              <div className="input-field">
                <input
                  className="email-field"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="input-field">
                <input
                  className="phone-field"
                  type="text"
                  placeholder="Phone (optional)"
                />
              </div>
            </div>
          </div>

          <div className="input-field">
            <textarea
              className="comments-field"
              cols={75}
              rows={15}
              placeholder="Tell us what's on your mind..."
            />
          </div>

          <div className="submit-button-container">
            <button
              type="submit"
              className="submit-button"
              onClick={() => {
                document.getElementById("contact-form").reset();
                window.alert("Response sent successfully.");
              }}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
