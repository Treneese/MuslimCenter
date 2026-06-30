# Muslim Center Server

The Muslim Center Server provides the backend services that power the Muslim Center platform. It manages community data, events, prayer schedules, donations, contact requests, and administrative operations through a centralized REST API.

---

# Purpose

The server serves as the central management system for the platform, connecting the public website with the administrative dashboard and database.

---

# Core Systems

## Authentication

- Administrator login
- Session management

---

## Prayer Management

- Prayer Times
- Iqamah Times
- Prayer schedule updates

---

## Event Management

- Create events
- Edit events
- Delete events
- Recurring events

---

## Community

- Contact submissions
- Announcements
- Program management

---

## Donations

- Donation integration
- Giving management

---

# Technology Stack

## Backend

- Python
- Flask
- Flask-RESTX
- SQLAlchemy

## Database

- SQLite

## APIs

- REST API
- Aladhan Prayer API

---

# Project Structure

```text
server/
│
├── models/
├── routes/
├── utils/
├── migrations/
├── app.py
├── config.py
└── README.md
```

---

# API Modules

- Authentication
- Prayer Times
- Iqamah
- Events
- Programs
- Contact
- Donations
- Administration

---

# Connected Applications

- Muslim Center Client

---

# Current Status

Active Development

The server continues to expand as additional administrative tools and community management features are introduced.

---

# Future Development

- Member accounts
- Volunteer management
- Email notifications
- Program registration
- Mobile API support
- Community analytics