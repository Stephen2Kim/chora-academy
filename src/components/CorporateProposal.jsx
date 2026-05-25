import { useState } from 'react'

const WEB3FORMS_KEY = 'a74369b9-1c96-4b6a-8af9-825e1faecaf3'

function CorporateProposal({ openHomePage }) {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    org: '',
    email: '',
    phone: '',
    note: '',
  })

  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const updateField = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const submitProposal = async (event) => {
    event.preventDefault()
    setError('')

    const required = ['firstname', 'lastname', 'org', 'email', 'phone', 'note']

    for (const key of required) {
      if (!form[key].trim()) {
        setError('Please fill in all required fields before submitting.')
        return
      }
    }

    const message = [
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      ' CHORA ACADEMY — Corporate Proposal Request',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '',
      'CONTACT NAME',
      `  ${form.firstname} ${form.lastname}`,
      '',
      'ORGANISATION',
      `  ${form.org}`,
      '',
      'EMAIL',
      `  ${form.email}`,
      '',
      'PHONE',
      `  ${form.phone}`,
      '',
      'TRAINING REQUIREMENTS',
      `  ${form.note}`,
      '',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      `Submitted: ${new Date().toUTCString()}`,
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    ].join('\n')

    try {
      setStatus('sending')

      const formData = new FormData()
      formData.append('access_key', WEB3FORMS_KEY)
      formData.append('subject', `Corporate Proposal — ${form.org} (${form.firstname} ${form.lastname})`)
      formData.append('from_name', 'Chora Academy — Corporate Enquiry')
      formData.append('email', form.email)
      formData.append('message', message)
      formData.append('botcheck', '')

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
      setError('Something went wrong. Email us at saugkimani@proton.me or call +254 710 828 254.')
    }
  }

  return (
    <section className="proposal-page">
      <div className="proposal-wrap">
        <button type="button" className="proposal-back" onClick={openHomePage}>
          ← Back
        </button>

        <div className="proposal-head">
          <div className="eyebrow">Corporate Training</div>
          <div className="proposal-rule"></div>

          <h1>Request a Proposal</h1>

          <p>
            Tell us about your organisation and training needs. We will respond
            within 48 hours with a tailored proposal.
          </p>
        </div>

        {status === 'success' ? (
          <div className="proposal-success">
            <div className="success-icon">✅</div>
            <h2>Request Sent!</h2>
            <p>
              Your corporate proposal request has been received. We will respond
              within 48 hours.
            </p>

            <button type="button" className="btn btn-gold" onClick={openHomePage}>
              Back to Home
            </button>
          </div>
        ) : (
          <form className="proposal-form" onSubmit={submitProposal}>
            {error && <div className="proposal-error">{error}</div>}

            <div className="proposal-row">
              <FormField
                label="First Name *"
                name="firstname"
                placeholder="e.g. John"
                value={form.firstname}
                onChange={updateField}
              />

              <FormField
                label="Last Name *"
                name="lastname"
                placeholder="e.g. Mwangi"
                value={form.lastname}
                onChange={updateField}
              />
            </div>

            <FormField
              label="Organisation *"
              name="org"
              placeholder="e.g. ABC Engineering Ltd"
              value={form.org}
              onChange={updateField}
            />

            <FormField
              label="Email Address *"
              name="email"
              type="email"
              placeholder="e.g. john@company.com"
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

            <div className="proposal-field">
              <label htmlFor="note">Training Requirements *</label>

              <textarea
                id="note"
                name="note"
                placeholder="Tell us the software, number of staff, preferred delivery mode, and any specific outcomes required."
                value={form.note}
                onChange={updateField}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-gold proposal-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send Proposal Request'}
            </button>
          </form>
        )}
      </div>

      <style>{`
        .proposal-page {
          min-height: 100vh;
          background: rgba(13,13,13,0.97);
          padding: 100px 0 80px;
        }

        .proposal-wrap {
          width: min(620px, calc(100% - 48px));
          margin: 0 auto;
        }

        .proposal-back {
          background: none;
          border: none;
          color: rgba(197,160,60,0.6);
          font-family: "Montserrat", sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          padding: 0;
          margin-bottom: 48px;
        }

        .proposal-back:hover {
          color: var(--gold);
        }

        .proposal-head {
          text-align: center;
          margin-bottom: 48px;
        }

        .proposal-rule {
          max-width: 200px;
          height: 1px;
          margin: 16px auto 36px;
          background: linear-gradient(to right, transparent, var(--gold), transparent);
        }

        .proposal-head h1 {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700;
          color: var(--white);
          margin-bottom: 12px;
        }

        .proposal-head p {
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          line-height: 1.9;
        }

        .proposal-form {
          background: var(--panel);
          border: 1px solid rgba(197,160,60,0.15);
          padding: 36px;
        }

        .proposal-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .proposal-field {
          margin-bottom: 18px;
        }

        .proposal-field label {
          display: block;
          margin-bottom: 8px;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
        }

        .proposal-field input,
        .proposal-field textarea {
          width: 100%;
          background: #080808;
          border: 1px solid rgba(197,160,60,0.2);
          color: var(--white);
          padding: 14px;
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          outline: none;
        }

        .proposal-field textarea {
          min-height: 150px;
          resize: vertical;
          line-height: 1.8;
        }

        .proposal-field input::placeholder,
        .proposal-field textarea::placeholder {
          color: rgba(255,255,255,0.22);
        }

        .proposal-field input:focus,
        .proposal-field textarea:focus {
          border-color: var(--gold);
        }

        .proposal-submit {
          width: 100%;
          margin-top: 14px;
          padding: 18px 52px;
          font-size: 10px;
          letter-spacing: 4px;
        }

        .proposal-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .proposal-error {
          background: rgba(255,80,80,0.08);
          border: 1px solid rgba(255,120,120,0.45);
          color: #ffb3b3;
          font-size: 12px;
          line-height: 1.7;
          padding: 16px;
          margin-bottom: 22px;
        }

        .proposal-success {
          background: rgba(197,160,60,0.08);
          border: 1.5px solid var(--gold);
          padding: 40px 32px;
          text-align: center;
        }

        .success-icon {
          font-size: 40px;
          margin-bottom: 16px;
        }

        .proposal-success h2 {
          font-family: "Cormorant Garamond", serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--gold);
          margin-bottom: 12px;
        }

        .proposal-success p {
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          line-height: 1.9;
          margin-bottom: 28px;
        }

        @media (max-width: 700px) {
          .proposal-form {
            padding: 28px 22px;
          }

          .proposal-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>
    </section>
  )
}

function FormField({ label, name, value, onChange, type = 'text', placeholder = '' }) {
  return (
    <div className="proposal-field">
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

export default CorporateProposal