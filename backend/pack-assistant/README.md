# Pack-Assistant — Travel Packing List App (MVP)

## Overview

**Pack-Assistant** is a mobile-first web application that helps users organize their packing lists for trips. It provides an intuitive interface based on Material Design 3, and allows users to manage multiple trips, organize items by categories, and track packing progress.

---

## Business Requirements

### Key Features (MVP)

- Create, edit, and delete trips
- Each trip contains item groups (categories like Clothing, Toiletries, etc.)
- Each group contains a list of items
- Items can be marked as packed or unpacked
- Visual progress indicator for each group (e.g., 3/6 packed)
- Add custom notes and quantities to items
- Filter to show only unpacked items
- Minimal, user-friendly mobile-first UI

---

## User Stories

- **As a user**, I want to create a packing list for my upcoming trip.
- **As a user**, I want to organize my items by category.
- **As a user**, I want to check off items as I pack them.
- **As a user**, I want to see how much of my packing is done.
- **As a user**, I want to filter and see only items I haven’t packed yet.
- **As a user**, I want to add and remove items easily.
- **As a user**, I want the interface to work well on mobile.

---

## Tech Stack

### Backend
- **Language:** Java 21+
- **Framework:** Spring Boot
- **GraphQL:** Netflix DGS
- **Database:** PostgreSQL (with Flyway for migrations)
- **ORM:** Spring Data JPA
- **Build Tool:** Gradle

### Frontend
- **Framework:** React
- **GraphQL Client:** Apollo Client
- **UI Library:** Material UI (MUI v5+)
- **Routing:** React Router
- **State Management:** React Context or Apollo Cache
