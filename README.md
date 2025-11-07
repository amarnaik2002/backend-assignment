# Async Video Job Processor

A minimal backend service that accepts video-processing jobs and handles them asynchronously with a Redis-backed queue (BullMQ). The API never blocks waiting for processing — POST returns immediately with `{ jobId, status: "queued" }` and a separate worker processes the job in the background.

This project follows the assignment requirements: Node.js + BullMQ + Redis, separate worker process, status lifecycle (queued → processing → completed). :contentReference[oaicite:1]{index=1}

---

## Features

- `POST /jobs` — enqueue a video-processing job (returns instantly)
- `GET /jobs/:jobId` — read current job status (`queued` | `processing` | `completed`)
- Queue implemented with BullMQ and Redis
- Worker is a separate process that picks jobs and simulates processing
- Docker Compose configuration to run Redis + API + worker

---

## Requirements

- Node.js (v16+ recommended)
- npm (or yarn)
- Docker & Docker Compose (if you prefer the containerized run)
- Redis (if not using Docker Compose)

---

## Quick start (local - npm)

1. Clone the repo:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
