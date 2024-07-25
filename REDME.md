# Header Parser Microservice

## Overview

This project is a Header Parser Microservice API built using Node.js and Express. It provides an endpoint to extract and return the user's IP address, preferred language, and software information from the request headers.

## Endpoints

### `/api/whoami`

- **Method**: GET
- **Description**: Returns a JSON object containing the user's IP address, preferred language, and software information from the request headers.
- **Responses**:
  ```json
  {
    "ipaddress": "123.45.67.89",
    "language": "en-US,en;q=0.9",
    "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
  }
  ```
