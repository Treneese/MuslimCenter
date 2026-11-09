
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/proposal.css";


const proposalTypes = [
  "Islamic Educational Program/Class",
  "Youth Program",
  "Sisters/Women’s Program",
  "Brothers/Men’s Program",
  "Family/Community Event",
  "Social/Recreational Activity/Event/Class",
  "Outreach/Community Service",
  "Fundraiser",
  "Workshop/Training",
  "Suggestion",
  "Other",
];

const steps = [
  "Proposal Information",
  "Description & Audience",
  "Event Details",
  "Resources & Budget",
  "Coordination",
  "Review & Submit",
];


const audiences = [
  "Children", "Youth", "Adults", "Families",
  "Brothers", "Sisters", "Seniors",
  "General Community", "Other"
];

const frequencies = [
  "One-Time Event", "Weekly", "Monthly",
  "Quarterly", "Seasonal", "Other"
];

const resources = [
  "Classroom/Meeting Space",
  "Main Hall",
  "Musala",
  "Halal Cafe",
  "Classroom A (Main Hall)",
  "Classroom B (Security Corridor)",
  "Kitchen",
  "Audio/Visual Equipment",
  "Tables/Chairs",
  "Marketing/Promotion",
  "Food/Refreshments",
  "Transportation",
  "Other"
];

const promotionOptions = [
  "Social Media",
  "Flyer",
  "Website",
  "Email",
  "Announcements After Salah",
  "Word of Mouth",
  "Other"
];

const acknowledgements = [
  "Submission does not guarantee approval.",
  "The Muslim Center may request additional information or modifications.",
  "Programs and events must support the mission, values, safety, and well-being of The Muslim Center and its community.",
  "Islamic educational programs and Islamic-centered events may be reviewed for alignment with the Qur’an and authentic Sunnah.",
  "I agree to work with The Muslim Center leadership and designated departments regarding scheduling, facilities, finances, promotion, and other requirements."
];

function TextField({
  label, name, value, onChange, type = "text"
}) {
  return (
    <label className="proposalField">
      <span>{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </label>
  );
}

function TextArea({ label, name, value, onChange }) {
  return (
    <label className="proposalField">
      <span>{label}</span>
      <textarea
        name={name}
        rows={4}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </label>
  );
}

function CheckboxGroup({
  legend, options, selected, onToggle
}) {
  return (
    <fieldset className="proposalCheckboxGroup">
      <legend>{legend}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => onToggle(option)}
          />
          <span>{option}</span>
        </label>
      ))}
    </fieldset>
  );
}

function RadioGroup({
  legend, options, value, onChange
}) {
  return (
    <fieldset className="proposalRadioGroup">
      <legend>{legend}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={legend}
            checked={value === option}
            onChange={() => onChange(option)}
          />
          <span>{option}</span>
        </label>
      ))}
    </fieldset>
  );
}


export default function ProposalForm() {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  
const [formData, setFormData] = useState({
  programName: "",
  submittedBy: "",
  email: "",
  phone: "",
  department: "",
  proposalTypes: [],
  otherProposalType: "",

  // Description and audience
  description: "",
  purpose: "",
  communityNeeds: "",
  audience: [],
  otherAudience: "",
  communityBenefits: "",

  // Event details
  preferredDates: "",
  preferredTime: "",
  estimatedLength: "",
  expectedParticipants: "",
  requestedLocation: "",
  frequency: "",
  otherFrequency: "",

  // Resources and budget
  resourceStatus: "",
  resourcesNeeded: [],
  otherResources: "",
  volunteerStatus: "",
  estimatedCost: "",
  fundingStatus: "",
  revenueActivities: "",
  marketingStatus: "",
  promotionMethods: [],
  otherPromotion: "",

  // Coordination
  coordinatorName: "",
  coordinatorContact: "",
  dayOfSupervisor: "",
  outsidePartners: "",
  partnerDetails: "",

  // Islamic educational guidelines
  islamicGuidelines: "",

  // Acknowledgements
  acknowledgements: [],
  signature: "",
});


  const updateField = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleProposalType = (type) => {
    setFormData((prev) => ({
      ...prev,
      proposalTypes: prev.proposalTypes.includes(type)
        ? prev.proposalTypes.filter((item) => item !== type)
        : [...prev.proposalTypes, type],
    }));
  };


const toggleArrayField = (field, value) => {
  setFormData((prev) => ({
    ...prev,
    [field]: prev[field].includes(value)
      ? prev[field].filter((item) => item !== value)
      : [...prev[field], value],
  }));
};

const isIslamicEducation =
  formData.proposalTypes.includes(
    "Islamic Educational Program/Class"
  );



const validateStep = () => {
  const newErrors = {};

  if (step === 0) {
    if (!formData.programName.trim()) {
      newErrors.programName = "Program name is required.";
    }

    if (!formData.submittedBy.trim()) {
      newErrors.submittedBy = "Your name is required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    if (formData.proposalTypes.length === 0) {
      newErrors.proposalTypes = "Select at least one proposal type.";
    }
  }

  if (step === 1) {
    if (!formData.description.trim()) {
      newErrors.description = "Please describe your proposal.";
    }

    if (!formData.purpose.trim()) {
      newErrors.purpose = "Please explain the purpose.";
    }

    if (formData.audience.length === 0) {
      newErrors.audience = "Select an intended audience.";
    }
  }

  if (step === 5) {
    if (
      formData.acknowledgements.length !==
      acknowledgements.length
    ) {
      newErrors.acknowledgements =
        "Please accept all acknowledgements.";
    }

    if (!formData.signature.trim()) {
      newErrors.signature = "Your signature is required.";
    }
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
 
  const nextStep = () => {
  if (!validateStep()) return;

  setErrors({});
  setStep((prev) => Math.min(prev + 1, steps.length - 1));
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  const previousStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateStep()) return;

  setIsSubmitting(true);
  setErrors({});

  try {
    const response = await fetch(
      "https://formspree.io/f/mvkkjoep",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          proposalTypes: formData.proposalTypes.join(", "),
          audience: formData.audience.join(", "),
          resourcesNeeded: formData.resourcesNeeded.join(", "),
          promotionMethods: formData.promotionMethods.join(", "),
          acknowledgements: formData.acknowledgements.join(", "),
          _subject: `New Proposal: ${formData.programName}`,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Submission failed.");
    }

    setSubmitSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    setErrors({
      submission:
        "Unable to submit your proposal. Please try again.",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <main className="proposalPage">
      <Link to="/get-involved">← Get Involved</Link>

      <header className="proposalHeader">
        <h1>Program & Event Proposal</h1>
        <p>
          Share your ideas for programs, classes, activities,
          services, or events at The Muslim Center.
        </p>
      </header>

      <div className="proposalProgress">
        <p>
          Step {step + 1} of {steps.length}
        </p>

        <progress value={step + 1} max={steps.length} />

        <h2>{steps[step]}</h2>
      </div>

      {submitSuccess && (
  <div className="proposalSuccess" role="status">
    Your proposal has been submitted successfully.
    The Muslim Center will review your submission.
  </div>
)}

      <form onSubmit={handleSubmit}>
        {step === 0 && (
          <section className="proposalFields">
            <label>
              Program or Event Name
              <input
                type="text"
                value={formData.programName}
                onChange={(e) =>
                  updateField("programName", e.target.value)
                }
              />
            </label>

            <label>
              Your Name
              <input
                type="text"
                value={formData.submittedBy}
                onChange={(e) =>
                  updateField("submittedBy", e.target.value)
                }
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
              />
            </label>

            <label>
              Phone Number
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  updateField("phone", e.target.value)
                }
              />
            </label>

            <label>
              Department / Area of Interest
              <input
                type="text"
                value={formData.department}
                onChange={(e) =>
                  updateField("department", e.target.value)
                }
              />
            </label>

            <fieldset>
              <legend>Type of Proposal</legend>

              {proposalTypes.map((type) => (
                <label key={type}>
                  <input
                    type="checkbox"
                    checked={formData.proposalTypes.includes(type)}
                    onChange={() => toggleProposalType(type)}
                  />
                  {type}
                </label>
              ))}
            </fieldset>
          </section>
        )}


{Object.keys(errors).length > 0 && (
  <div className="proposalErrors" role="alert">
    <strong>Please complete the following:</strong>
    <ul>
      {Object.values(errors).map((error, index) => (
        <li key={index}>{error}</li>
      ))}
    </ul>
  </div>
)}


        
{/* STEP 2 — DESCRIPTION & AUDIENCE */}
{step === 1 && (
  <section className="proposalFields">
    <TextArea
      label="What is the program, event, or suggestion?"
      name="description"
      value={formData.description}
      onChange={updateField}
    />

    <TextArea
      label="What is the purpose or goal?"
      name="purpose"
      value={formData.purpose}
      onChange={updateField}
    />

    <TextArea
      label="What community needs does this address?"
      name="communityNeeds"
      value={formData.communityNeeds}
      onChange={updateField}
    />

    <CheckboxGroup
      legend="Who is the intended audience?"
      options={audiences}
      selected={formData.audience}
      onToggle={(value) =>
        toggleArrayField("audience", value)
      }
    />

    {formData.audience.includes("Other") && (
      <TextField
        label="Other audience"
        name="otherAudience"
        value={formData.otherAudience}
        onChange={updateField}
      />
    )}

    <TextArea
      label="How will this benefit The Muslim Center and the community?"
      name="communityBenefits"
      value={formData.communityBenefits}
      onChange={updateField}
    />

    {isIslamicEducation && (
      <TextArea
        label="Islamic educational guidelines / additional information"
        name="islamicGuidelines"
        value={formData.islamicGuidelines}
        onChange={updateField}
      />
    )}
  </section>
)}

{/* STEP 3 — EVENT DETAILS */}
{step === 2 && (
  <section className="proposalFields">
    <TextField
      label="Preferred Date(s)"
      name="preferredDates"
      value={formData.preferredDates}
      onChange={updateField}
    />

    <TextField
      label="Preferred Time"
      name="preferredTime"
      value={formData.preferredTime}
      onChange={updateField}
    />

    <TextField
      label="Estimated Length"
      name="estimatedLength"
      value={formData.estimatedLength}
      onChange={updateField}
    />

    <TextField
      label="Expected Number of Participants"
      name="expectedParticipants"
      type="number"
      value={formData.expectedParticipants}
      onChange={updateField}
    />

    <TextField
      label="Location Requested"
      name="requestedLocation"
      value={formData.requestedLocation}
      onChange={updateField}
    />

    <RadioGroup
      legend="How often should this program take place?"
      options={frequencies}
      value={formData.frequency}
      onChange={(value) =>
        updateField("frequency", value)
      }
    />

    {formData.frequency === "Other" && (
      <TextField
        label="Other frequency"
        name="otherFrequency"
        value={formData.otherFrequency}
        onChange={updateField}
      />
    )}
  </section>
)}

{/* STEP 4 — RESOURCES & BUDGET */}
{step === 3 && (
  <section className="proposalFields">
    <RadioGroup
      legend="Do you have the resources needed?"
      options={[
        "Yes",
        "No",
        "Need assistance with resources"
      ]}
      value={formData.resourceStatus}
      onChange={(value) =>
        updateField("resourceStatus", value)
      }
    />

    <CheckboxGroup
      legend="What resources will be needed?"
      options={resources}
      selected={formData.resourcesNeeded}
      onToggle={(value) =>
        toggleArrayField("resourcesNeeded", value)
      }
    />

    {formData.resourcesNeeded.includes("Other") && (
      <TextField
        label="Other resources"
        name="otherResources"
        value={formData.otherResources}
        onChange={updateField}
      />
    )}

    <RadioGroup
      legend="Do you have volunteers or a team?"
      options={[
        "Yes",
        "No",
        "Need assistance recruiting volunteers"
      ]}
      value={formData.volunteerStatus}
      onChange={(value) =>
        updateField("volunteerStatus", value)
      }
    />

    <TextField
      label="Estimated Cost ($)"
      name="estimatedCost"
      type="number"
      value={formData.estimatedCost}
      onChange={updateField}
    />

    <RadioGroup
      legend="Will you be funding the event?"
      options={[
        "Yes",
        "No",
        "Need assistance with funding"
      ]}
      value={formData.fundingStatus}
      onChange={(value) =>
        updateField("fundingStatus", value)
      }
    />

    <RadioGroup
      legend="Will there be registration fees, ticket sales, donations, or fundraising?"
      options={["Yes", "No"]}
      value={formData.revenueActivities}
      onChange={(value) =>
        updateField("revenueActivities", value)
      }
    />

    <RadioGroup
      legend="Do you have marketing materials available?"
      options={[
        "Yes",
        "No",
        "Need assistance creating marketing materials"
      ]}
      value={formData.marketingStatus}
      onChange={(value) =>
        updateField("marketingStatus", value)
      }
    />

    <CheckboxGroup
      legend="How would you like the event promoted?"
      options={promotionOptions}
      selected={formData.promotionMethods}
      onToggle={(value) =>
        toggleArrayField("promotionMethods", value)
      }
    />

    {formData.promotionMethods.includes("Other") && (
      <TextField
        label="Other promotion method"
        name="otherPromotion"
        value={formData.otherPromotion}
        onChange={updateField}
      />
    )}
  </section>
)}

{/* STEP 5 — COORDINATION */}
{step === 4 && (
  <section className="proposalFields">
    <TextField
      label="Event Coordinator Name"
      name="coordinatorName"
      value={formData.coordinatorName}
      onChange={updateField}
    />

    <TextField
      label="Coordinator Phone / Email"
      name="coordinatorContact"
      value={formData.coordinatorContact}
      onChange={updateField}
    />

    <TextField
      label="Who will oversee the event on the day?"
      name="dayOfSupervisor"
      value={formData.dayOfSupervisor}
      onChange={updateField}
    />

    <RadioGroup
      legend="Are outside speakers, organizations, vendors, or partners involved?"
      options={["Yes", "No"]}
      value={formData.outsidePartners}
      onChange={(value) =>
        updateField("outsidePartners", value)
      }
    />

    {formData.outsidePartners === "Yes" && (
      <TextArea
        label="Please provide details"
        name="partnerDetails"
        value={formData.partnerDetails}
        onChange={updateField}
      />
    )}
  </section>
)}

{/* STEP 6 — REVIEW & SUBMIT */}
{step === 5 && (
  <section className="proposalFields">
    <h3>Review Your Proposal</h3>

    <div className="proposalReview">
      {Object.entries(formData)
        .filter(([key]) =>
          !["acknowledgements", "signature"].includes(key)
        )
        .map(([key, value]) => (
          <div key={key}>
            <strong>
              {key.replace(/([A-Z])/g, " $1")}
            </strong>
            <p>
              {Array.isArray(value)
                ? value.join(", ") || "Not provided"
                : value || "Not provided"}
            </p>
          </div>
        ))}
    </div>

    <CheckboxGroup
      legend="Proposal Acknowledgement"
      options={acknowledgements}
      selected={formData.acknowledgements}
      onToggle={(value) =>
        toggleArrayField("acknowledgements", value)
      }
    />

    <TextField
      label="Electronic Signature (Type Full Name)"
      name="signature"
      value={formData.signature}
      onChange={updateField}
    />

    <p>
      By submitting this proposal, you acknowledge
      The Muslim Center's review and approval process.
    </p>

    <button type="submit" disabled={isSubmitting}>
  {isSubmitting ? "Submitting..." : "Submit Proposal"}
</button>
  </section>
)}


        <div className="proposalActions">
          {step > 0 && (
            <button type="button" onClick={previousStep}>
              Back
            </button>
          )}

          {step < steps.length - 1 && (
            <button type="button" onClick={nextStep}>
              Continue
            </button>
          )}
        </div>
      </form>
    </main>
  );
}
