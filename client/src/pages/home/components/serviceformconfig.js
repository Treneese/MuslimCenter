export const serviceFormConfig = {
  "marriage-counseling": {
    title: "Marriage Counseling Request",
    intro:
      "Please fill out the form below and our team will follow up with you about marriage counseling support.",
    successMessage:
      "✅ Your marriage counseling request was sent. We’ll be in touch soon.",
    submitLabel: "Request Marriage Counseling",
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "text" },
      {
        name: "preferredContactMethod",
        label: "Preferred Contact Method",
        type: "select",
        options: ["Phone", "Email", "Text Message"],
        required: true,
      },
      {
        name: "partnerName",
        label: "Spouse / Partner Name",
        type: "text",
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
        label: "Message",
        type: "textarea",
        required: true,
      },
    ],
  },

  "family-counseling": {
    title: "Family Counseling Request",
    intro:
      "Please fill out the form below and our team will follow up with you about family counseling support.",
    successMessage:
      "✅ Your family counseling request was sent. We’ll be in touch soon.",
    submitLabel: "Request Family Counseling",
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "text" },
      {
        name: "preferredContactMethod",
        label: "Preferred Contact Method",
        type: "select",
        options: ["Phone", "Email", "Text Message"],
        required: true,
      },
      {
        name: "familyCount",
        label: "Number of Family Members Involved",
        type: "text",
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
        label: "Message",
        type: "textarea",
        required: true,
      },
    ],
  },

  "new-shahada-support": {
    title: "New Shahada Support Request",
    intro:
      "If you are interested in shahada or would like support as a new Muslim, please fill out the form below.",
    successMessage:
      "✅ Your support request was sent. We’ll be in touch soon.",
    submitLabel: "Request Shahada Support",
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "text" },
      {
        name: "preferredContactMethod",
        label: "Preferred Contact Method",
        type: "select",
        options: ["Phone", "Email", "Text Message"],
        required: true,
      },
      {
        name: "interestedInShahada",
        label: "Are you interested in taking shahada?",
        type: "select",
        options: ["Yes", "No", "I’m not sure yet"],
      },
      {
        name: "newMuslim",
        label: "Are you newly Muslim?",
        type: "select",
        options: ["Yes", "No", "I’m learning"],
      },
      {
        name: "followUpSupport",
        label: "Would you like someone to follow up with you?",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        required: true,
      },
    ],
  },

  "janazah-services": {
    title: "Janazah Services Request",
    intro:
      "Please fill out the form below and someone from the center will follow up as soon as possible.",
    successMessage:
      "✅ Your janazah request was sent. Someone will follow up as soon as possible.",
    submitLabel: "Request Janazah Support",
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "text" },
      {
        name: "preferredContactMethod",
        label: "Preferred Contact Method",
        type: "select",
        options: ["Phone", "Email", "Text Message"],
        required: true,
      },
      {
        name: "deceasedName",
        label: "Name of Deceased",
        type: "text",
        required: true,
      },
      {
        name: "urgent",
        label: "Is this urgent?",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        name: "bestTimeToReach",
        label: "Best Time to Reach You",
        type: "text",
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        required: true,
      },
    ],
  },

  "general-counseling": {
    title: "General Counseling Request",
    intro:
      "Please fill out the form below and our team will follow up with you about counseling support.",
    successMessage:
      "✅ Your counseling request was sent. We’ll be in touch soon.",
    submitLabel: "Request Counseling",
    fields: [
      { name: "firstName", label: "First Name", type: "text", required: true },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "text" },
      {
        name: "preferredContactMethod",
        label: "Preferred Contact Method",
        type: "select",
        options: ["Phone", "Email", "Text Message"],
        required: true,
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
        label: "Message",
        type: "textarea",
        required: true,
      },
    ],
  },
};