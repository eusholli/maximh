# maximH

Personal executive website for Geoff Hollingworth. Built with Next.js 15, deployed via Docker.

## Prerequisites

- **Node.js 20+** (for local development)
- **Docker** and **Docker Compose** (for containerised deployment)

## Local Development

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your EmailJS credentials

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## EmailJS Setup

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Add an Email Service (Gmail, Outlook, etc.) → note the **Service ID**
3. Create an Email Template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Copy your **Public Key** from Account → API Keys
5. Add to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Docker — Local Testing

```bash
# Build and run locally
docker compose up --build

# Site available at http://localhost:3000
# Stop with Ctrl+C, or:
docker compose down
```

## Docker — Production (Hetzner VPS)

### First-time setup

```bash
# SSH into your server
ssh root@your-server-ip

# Ensure the Traefik proxy network exists
docker network create webproxy

# Clone the repo
git clone https://github.com/eusholli/maximh.git
cd maximh

# Create environment file
cp .env.example .env.local
# Edit .env.local with your EmailJS credentials
nano .env.local
```

### Deploy

```bash
cd maximh

# Build and start in production mode
docker compose -f docker-compose.prod.yml up -d --build

# Check logs
docker logs maximh

# Check status
docker ps
```

### Update

```bash
cd maximh
git pull
docker compose -f docker-compose.prod.yml up -d --build
```

### DNS

Point `maximh.us` A record to your Hetzner VPS IP. Traefik will auto-provision a Let's Encrypt TLS certificate.

## Tech Stack

- **Next.js 15** (App Router, standalone output)
- **React 19**
- **Vanilla CSS** (dark minimalist theme)
- **Lucide React** (icons)
- **EmailJS** (contact form)
- **Docker** (multi-stage build, ~100MB image)
