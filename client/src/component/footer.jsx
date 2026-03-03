export default function Footer() {
  const iconStyle = {
    width: 22,
    height: 22,
    color: "#0b3d2e",
  };

  return (
    <footer style={{ borderTop: "1px solid #e5e7eb", marginTop: 60, background: "#fafafa" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 18px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {/* Left Section */}
          <div style={{ display: "grid", gap: 6 }}>
            <div style={{ fontWeight: 800, fontSize: 16 }}>Muslim Center</div>
            <div style={{ color: "#6b7280", fontSize: 13, maxWidth: 320 }}>
              Serving the community with prayer, education, and support.
            </div>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
              <a
                href="https://www.instagram.com/detroit_muslimcenter/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg style={iconStyle} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm4.25 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.75-2.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
              </a>

              <a
                href="https://www.facebook.com/groups/6806132086088224/?ref=share&mibextid=K35XfP&rdid=I1ZZv1f2xGOA2UWw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F8Z8zfE3B5aaGjBcg%2F%3Fmibextid%3DK35XfP#k.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg style={iconStyle} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H8.07V12h2.37V9.8c0-2.34 1.4-3.63 3.54-3.63 1.02 0 2.08.18 2.08.18v2.3h-1.17c-1.15 0-1.5.72-1.5 1.45V12h2.56l-.41 2.89h-2.15v6.99A10 10 0 0 0 22 12z"/>
                </svg>
              </a>

              <a
                href="https://chat.whatsapp.com/EMbtK894w9S3JORpWZ8dcZ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg style={iconStyle} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.4 0 0 5.4 0 12.05c0 2.13.56 4.22 1.63 6.06L0 24l6.05-1.59a11.98 11.98 0 0 0 6 1.63h.01c6.65 0 12.05-5.4 12.05-12.05 0-3.22-1.25-6.25-3.59-8.51zM12.06 21.6a9.46 9.46 0 0 1-4.82-1.32l-.35-.21-3.59.94.96-3.5-.23-.36a9.53 9.53 0 1 1 8.03 4.45zm5.39-7.13c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.33.22-.62.07-.29-.15-1.23-.45-2.34-1.45-.87-.78-1.45-1.74-1.62-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3 .14.19 2 3.05 4.85 4.28.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.35-.07-.12-.26-.19-.55-.34z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div style={{ color: "#6b7280", fontSize: 13 }}>
            © {new Date().getFullYear()} Muslim Center. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}