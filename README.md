# Fa3el 5eir

<p align="center">
<img src="public/logo.png" width="200"/>

## Table of Contents

1. [🚀 Overview](#-project-overview)
2. [⚒️ Technologies and frameworks used](#%EF%B8%8F-technologies-and-frameworks-used)
3. [📚 Functional & non-functional requirements](#-functional--non-functional-requirements)
4. [🔥 Features & Demo](#-features--demo)
5. [⚙️ Setup](#%EF%B8%8F-setup-guide)

## 🚀 Project overview

This is a donation-based web application that involves three main stakeholders: Admin, Organization, and Donor. The application is designed to facilitate the process of donations, making it easy for organizations to request donations and for donors to make contributions.

## ⚒️ Technologies and frameworks used

This project is built with the following technologies:

- **Git**
- **ReactJS**
- **Prettier**
- **Material UI**
- **Tailwind CSS**
- **Google Maps API**
- **Google Geocoding API**

## 📚 Functional & non-Functional Requirements

https://docs.google.com/spreadsheets/d/1S2SWhGfkTPY6pxWl0vG2PORnrT7TWhJx0WDmCxUf-8Q/edit?usp=sharing

## 🔥 Features & Demo

<details>
   <summary>Admin</summary>

https://github.com/SeifAbbas/skrew-early/assets/20571619/5a5936df-d7d9-43e2-9c8c-021a0f2486c3
   
</details>

<details>
   <summary>Organization</summary>

https://github.com/SeifAbbas/skrew-early/assets/20571619/70404842-5d9c-40fd-b9ae-dfdc44fcb1a1
   
</details>

<details>
   <summary>Donor</summary>
   
https://github.com/SeifAbbas/skrew-early/assets/20571619/7b8b7360-3ed8-4da6-bc86-c79f54619ebb
   
</details>

## ⚙️ Setup Guide

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (version 14 or later)
- npm (version 6 or later)

### Steps

1. **Clone the repository**

   Open your terminal and run the following command:

   ```bash
   git clone https://github.com/username/skrew-early.git

   ```

2. **Navigate to the project directory**

   ```bash
   cd skrew-early
   ```

3. **Create a .env file**

   Create a new file in the root directory of the project named `.env`. This file will contain environment-specific variables. For example:

   ```bash
   touch .env
   ```

   Open the `.env` file and add your environment variables:

   ```bash
   nano .env
   ```

   Then add your variables:

   ```bash
   REACT_APP_GOOGLE_MAPS_API_KEY="api_key"
   REACT_APP_GOOGLE_MAPS_GEOCODING_API_KEY="api_key"
   ```

   Replace `api_key` with an actual api key obtained from google cloud, then save and close the file.

4. **Install the dependencies**

   ```bash
   npm i
   ```

5. **Start the application**

   ```bash
   npm run start
   ```

The application will start and can be accessed at http://localhost:3000 in your web browser.
