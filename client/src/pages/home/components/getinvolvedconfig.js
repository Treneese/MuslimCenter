export const getInvolvedConfig = {
  volunteer: {
    title: "Volunteer With Us",
    intro:
      "Interested in volunteering at the Muslim Center? Fill out the information below and someone from our team will be in touch shortly.",
    successMessage:
      "✅ Your volunteer request was sent. We’ll be in touch soon.",
    submitLabel: "Submit Volunteer Request",
    routeTo: "general", // backend can map this
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      {
        name: "subscribeUpdates",
        label: "Sign up for news and updates",
        type: "boolean",
      },
      { name: "phone", label: "Phone", type: "text", required: true },
      {
        name: "preferredContactMethod",
        label: "Preferred Method of Contact",
        type: "checkbox",
        options: ["Phone", "Email", "Text Message", "Other"],
      },
      {
        name: "volunteerAreas",
        label: "How would you like to volunteer?",
        type: "checkbox",
        options: [
          "Community Soup Kitchen",
          "Event Planning",
          "Community Programming",
          "Maintenance & Beautification",
          "Islamic Programming",
          "Development & Fundraising",
          "Other",
        ],
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        required: true,
      },
    ],
  },

  "space-rental": {
    title: "Event Space Rental Inquiries",
    intro:
      "Shukran (Thank you) for selecting the Muslim Center for your venue for your event. Please complete the inquiry form below and someone from our team will respond within 24–48 hours, InshaAllah. If you need immediate assistance, please send an email to contact@themuslimcenter.com.",
    successMessage:
      "✅ Your rental inquiry was sent. We’ll follow up about availability soon.",
    submitLabel: "Submit Rental Inquiry",
    routeTo: "general",
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "phone", label: "Phone", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      {
        name: "subscribeUpdates",
        label: "Sign up for news and updates",
        type: "boolean",
      },
      {
        name: "eventType",
        label: "Event Type",
        type: "text",
        required: true,
      },
      {
        name: "eventName",
        label: "Event Name",
        type: "text",
        required: true,
      },
      {
        name: "eventContactName",
        label: "Event Contact Name",
        type: "text",
        required: true,
      },
      {
        name: "eventContactEmail",
        label: "Event Contact Email",
        type: "email",
        required: true,
      },
      {
        name: "eventStartDate",
        label: "Event Start Date",
        type: "date",
        required: true,
      },
      {
        name: "eventEndDate",
        label: "Event End Date",
        type: "date",
      },
      {
        name: "eventStartTime",
        label: "Event Start Time",
        type: "time",
      },
      {
        name: "eventEndTime",
        label: "Event End Time",
        type: "time",
      },
      {
        name: "anticipatedAttendance",
        label: "Anticipated Attendance",
        type: "textarea",
        required: true,
      },
      {
        name: "childrenAttending",
        label: "Will children under the age of 17 be attending the event?",
        type: "checkbox",
        options: ["Yes", "No", "Undecided"],
      },
      {
        name: "requestedArea",
        label: "What area of the Muslim Center are you inquiring?",
        type: "checkbox",
        options: ["Classroom", "Halal Cafe", "Multipurpose Room", "Musala"],
      },
      {
        name: "eventBudget",
        label: "How much is your event budget?",
        type: "text",
      },
      {
        name: "setupHelp",
        label: "Would you like for the Muslim Center to set up your event?",
        type: "select",
        options: ["Select an option", "Yes", "No", "Maybe"],
      },
      {
        name: "equipmentNeeded",
        label: "Would you like to use any of the Muslim Center’s equipment?",
        type: "checkbox",
        options: [
          "Kitchen",
          "Tables",
          "Chairs",
          "Linen + Silverware",
          "Throne Chair",
        ],
      },
      {
        name: "message",
        label: "Please share any additional information that we should know about your event.",
        type: "textarea",
        required: true,
      },
    ],
  },

  partnership: {
    title: "Partner With Us",
    intro:
      "We welcome meaningful collaborations, sponsorships, and community partnerships. Fill out the form below and our partnership team will follow up with you.",
    successMessage:
      "✅ Your partnership inquiry was sent. We’ll be in touch soon.",
    submitLabel: "Submit Partnership Inquiry",
    routeTo: "partnership", // important
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "text" },
      {
        name: "organizationName",
        label: "Organization / Business Name",
        type: "text",
        required: true,
      },
      {
        name: "preferredContactMethod",
        label: "Preferred Method of Contact",
        type: "checkbox",
        options: ["Phone", "Email", "Text Message", "Other"],
      },
      {
        name: "partnershipType",
        label: "Type of Partnership",
        type: "select",
        options: [
          "Community Collaboration",
          "Sponsorship",
          "Program Partnership",
          "Business Partnership",
          "Other",
        ],
      },
      {
        name: "message",
        label: "Proposal / Message",
        type: "textarea",
        required: true,
      },
    ],
  },

  member: {
    title: "Become a Member",
    intro:
      "Interested in becoming a member? Fill out the form below and we’ll follow up with membership details and next steps.",
    successMessage:
      "✅ Your membership inquiry was sent. We’ll follow up soon.",
    submitLabel: "Submit Membership Inquiry",
    routeTo: "general",
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "text" },
      {
        name: "preferredContactMethod",
        label: "Preferred Method of Contact",
        type: "checkbox",
        options: ["Phone", "Email", "Text Message", "Other"],
      },
      {
        name: "message",
        label: "Questions / Interest",
        type: "textarea",
        required: true,
      },
    ],
  },

  appointment: {
    title: "Book an Appointment",
    intro:
      "Schedule a meeting or request support by filling out the form below. We’ll follow up with availability and next steps.",
    successMessage:
      "✅ Your appointment request was sent. We’ll be in touch soon.",
    submitLabel: "Submit Appointment Request",
    routeTo: "general",
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "text", required: true },
      {
        name: "preferredContactMethod",
        label: "Preferred Method of Contact",
        type: "checkbox",
        options: ["Phone", "Email", "Text Message", "Other"],
      },
      {
        name: "preferredDays",
        label: "Preferred Days",
        type: "checkbox",
        options: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      {
        name: "preferredTime",
        label: "Preferred Time",
        type: "select",
        options: ["Morning", "Afternoon", "Evening", "Flexible"],
      },
      {
        name: "message",
        label: "What is this appointment about?",
        type: "textarea",
        required: true,
      },
    ],
  },
};