import { useState } from 'react'

const WEB3FORMS_KEY = 'a74369b9-1c96-4b6a-8af9-825e1faecaf3'

function ApplicationForm({ openAutoCADPage }) {
  const [form, setForm] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    age: '',
    idno: '',
    education: '',
    educationOther: '',
    email: '',
    phone: '',
  })

  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const updateField = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const submitApplication = async (event) => {
    event.preventDefault()
    setError('')

    const required = ['firstname', 'lastname', 'age', 'idno', 'education', 'email', 'phone']

    if (form.education === 'Other' && !form.educationOther.trim()) {
    setError('Please specify your level of education.')
    return
    }
        for (const key of required) {
      if (!form[key].trim()) {
        setError('Please fill in all required fields marked * before submitting.')
        return
      }
    }

    try {
      setStatus('sending')

      const formData = new FormData()
      formData.append('access_key', WEB3FORMS_KEY)
      formData.append('subject', `New Application: ${form.firstname} ${form.lastname} — AutoCAD Fundamentals`)
      formData.append('from_name', 'Chora Academy Applications')
      formData.append('email', form.email)
      formData.append('Course', 'AutoCAD Fundamentals')
      formData.append('First Name', form.firstname)
      formData.append('Middle Name', form.middlename)
      formData.append('Last Name', form.lastname)
      formData.append('Age', form.age)
      formData.append('National ID No.', form.idno)
      formData.append(
        'Level of Education',
        form.education === 'Other' ? form.educationOther : form.education
      )
      formData.append('Phone Number', form.phone)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (!result.success) {
        throw new Error(result.message || 'Submission failed.')
      }

      setStatus('success')
    } catch {
      setStatus('idle')
      setError('Could not send your application right now. Please try again or contact us directly.')
    }
  }

  return (
    <section className="application-page">
      <div className="application-wrap">
        <div className="application-head">
          <div className="eyebrow">AutoCAD Fundamentals</div>
          <div className="form-rule"></div>

          <h1>Application Form</h1>

          <p>
            Fill in your details below and submit. We will review your application and respond within 48 hours.
          </p>
        </div>

        {status === 'success' ? (
          <div className="form-success">
            <h2>Application Submitted</h2>
            <p>Your application has been received. You will get a response within 48 hours.
                If you don't hear back, contact us at saugkimani@proton.me or call +254 710 828 254.
            </p>

            <button type="button" className="btn btn-gold" onClick={openAutoCADPage}>
              Back to AutoCAD
            </button>
          </div>
        ) : (
          <form className="application-form" onSubmit={submitApplication}>
            {error && <div className="form-error">{error}</div>}

            <div className="form-row two">
              <FormField
                label="First Name *"
                name="firstname"
                placeholder="e.g. John"
                value={form.firstname}
                onChange={updateField}
              />

              <FormField
                label="Middle Name"
                name="middlename"
                placeholder="e.g. Kamau"
                value={form.middlename}
                onChange={updateField}
              />
            </div>

            <FormField
              label="Last Name *"
              name="lastname"
              placeholder="e.g. Mwangi"
              value={form.lastname}
              onChange={updateField}
            />

            <div className="form-row two">
              <FormField
                label="Age *"
                name="age"
                type="number"
                placeholder="e.g. 24"
                value={form.age}
                onChange={updateField}
              />

              <FormField
                label="National ID No. *"
                name="idno"
                placeholder="e.g. 12345678"
                value={form.idno}
                onChange={updateField}
              />
            </div>

            <div className="form-field">
            <label htmlFor="education">Level of Education *</label>

            <select
                id="education"
                name="education"
                value={form.education}
                onChange={updateField}
                required
            >
                <option value="" disabled hidden>
                — Select your level —
                </option>
                <option value="High School / KCSE">High School / KCSE</option>
                <option value="Certificate">Certificate</option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                <option value="Master's Degree">Master&apos;s Degree</option>
                <option value="Other">Other</option>
            </select>
            </div>

            {form.education === 'Other' && (
            <FormField
                label="Specify Your Level of Education *"
                name="educationOther"
                placeholder="e.g. Professional certification"
                value={form.educationOther}
                onChange={updateField}
            />
            )}

            <FormField
              label="Email Address *"
              name="email"
              type="email"
              placeholder="e.g. john@example.com"
              value={form.email}
              onChange={updateField}
            />

            <FormField
              label="Phone Number *"
              name="phone"
              placeholder="e.g. +254 710 000 000"
              value={form.phone}
              onChange={updateField}
            />

            <div className="phone-note">
              Include country code, e.g. +254 for Kenya
            </div>

            <button type="submit" className="btn btn-gold submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Submitting...' : 'Submit Application'}
            </button>

            <button type="button" className="cancel-btn" onClick={openAutoCADPage}>
              Cancel — Go Back
            </button>
          </form>
        )}
      </div>

      <style>{`
        .application-page {
          min-height: 100vh;
          background: #070707;
          padding: 90px 0 80px;
        }

        .application-wrap {
          width: min(520px, calc(100% - 48px));
          margin: 0 auto;
        }

        .application-head {
          text-align: center;
          margin-bottom: 44px;
        }

        .application-head .eyebrow {
          font-size: 8px;
          letter-spacing: 7px;
        }

        .form-rule {
          width: 60px;
          height: 1px;
          margin: 18px auto 34px;
          background: linear-gradient(to right, transparent, var(--gold), transparent);
        }

        .application-head h1 {
          font-family: "Cormorant Garamond", serif;
          font-size: 42px;
          line-height: 1;
          color: var(--white);
          margin-bottom: 20px;
        }

        .application-head p {
          font-size: 11px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(255,255,255,0.32);
          max-width: 460px;
          margin: 0 auto;
        }

        .application-form {
          width: 100%;
        }

        .form-row.two {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .form-field {
          margin-bottom: 16px;
        }

        .form-field label {
          display: block;
          margin-bottom: 8px;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
        }

        .form-field input,
        .form-field select {
          width: 100%;
          height: 38px;
          background: #111100;
          border: 1px solid rgba(197,160,60,0.28);
          color: rgba(255,255,255,0.72);
          padding: 0 14px;
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          outline: none;
        }

        .form-field select {
          appearance: auto;
        }

        .form-field input::placeholder {
          color: rgba(255,255,255,0.22);
        }

        .form-field input:focus,
        .form-field select:focus {
          border-color: var(--gold);
        }

        .phone-note {
          margin-top: -8px;
          margin-bottom: 28px;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.26);
        }

        .submit-btn {
          width: 100%;
          height: 46px;
          padding: 0;
          font-size: 9px;
          letter-spacing: 6px;
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .cancel-btn {
          display: block;
          margin: 28px auto 0;
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.25);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 4px;
          text-transform: uppercase;
          cursor: pointer;
        }

        .cancel-btn:hover {
          color: var(--gold);
        }

        .form-error {
          margin-bottom: 22px;
          padding: 14px;
          border: 1px solid rgba(255,120,120,0.35);
          background: rgba(255,80,80,0.06);
          color: #ffb3b3;
          font-size: 11px;
          line-height: 1.7;
        }

        .form-success {
          text-align: center;
          border: 1px solid rgba(197,160,60,0.35);
          background: rgba(197,160,60,0.05);
          padding: 42px 32px;
        }

        .form-success h2 {
          font-family: "Cormorant Garamond", serif;
          font-size: 32px;
          color: var(--gold);
          margin-bottom: 12px;
        }

        .form-success p {
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
          margin-bottom: 28px;
        }

        @media (max-width: 640px) {
          .form-row.two {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .application-wrap {
            width: min(100%, calc(100% - 32px));
          }
        }
      `}</style>
    </section>
  )
}

function FormField({ label, name, value, onChange, type = 'text', placeholder = '' }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default ApplicationForm