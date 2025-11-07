import { Worker } from 'bullmq';
import redis, { bullConnection } from '../config/redis.js';

const worker = new Worker('video-processing', async job => {
  await redis.hset(`job:${job.id}`, 'status', 'processing');
  await new Promise(r => setTimeout(r, 15000));
  await redis.hset(`job:${job.id}`, 'status', 'completed');
}, { connection: bullConnection });

worker.on('failed', (job, err) => {
  redis.hset(`job:${job.id}`, 'status', 'failed');
  console.error(`Job ${job.id} failed`, err);
});

console.log('Worker running...');