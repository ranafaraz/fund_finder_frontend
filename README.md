# Fund Finder Frontend

This repository contains the frontend for the Fund Finder project, built with React.

## Setup Instructions

### Prerequisites
- Node.js 18+
- Docker (for containerized setup)

### Development

1. Clone the repository:
   ```bash
   git clone https://github.com/ranafaraz/fund_finder_frontend.git
   cd fund_finder_frontend
Install dependencies:


npm install

Start the development server:


npm start
Access the app at http://localhost:3001.

Docker Setup
Build and start the container:


docker-compose -f docker/compose.dev.yml up --build
Access the app at http://localhost:3001.

Environment Variables
Copy .env.example to .env and set the required values:


REACT_APP_BACKEND_URL=http://localhost:8080
REACT_APP_ENV=development


Add the `README.md` file and commit:

git add README.md
git commit -m "Add README for frontend setup"
git push origin dev

9. Set Up GitHub Branch Protections
Go to your GitHub repository: https://github.com/ranafaraz/fund_finder_frontend.
Navigate to Settings > Branches.
Add branch protection rules for dev, staging, and prod to enforce pull requests, code reviews, and testing.
10. Share Development Workflow

Developers should:

Clone the repo: git clone https://github.com/ranafaraz/fund_finder_frontend.git.
Work on feature branches: git checkout -b feature/<feature-name>.
Push changes and submit pull requests to dev.
Use the same CI/CD setup as the backend for testing and deployment.