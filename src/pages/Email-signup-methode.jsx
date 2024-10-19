
const EmailSignupMethode = () => {
    return (
      <div className="flex h-screen w-screen flex-col items-center">
        <div className="mt-32 w-64">
          <h1 className="font-bold" style={{
            fontSize: 34
          }}>Votre email</h1>
          <p style={{
            fontSize: 14,
            lineHeight: 1.5
          }}>
            Veuillez entrer votre adresse mail. Nous vous enverrons un code à 4
            chiffres pour vérifier votre compte.
          </p>
        </div>
        <div className="mt-9">
          <form>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
            </div>
            <div>
                <button className="btn btn-wide text-white mt-16" style={{
                    backgroundColor: "#E94057"
                }}>Continuer</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default EmailSignupMethode;
