import { jobQueue } from '../../queue/jobQueue.js';
import redis from '../../config/redis.js';
export async function createJob(videoUrl) {
  const job = await jobQueue.add('process-video', { videoUrl });
  await redis.hset(`job:${job.id}`, 'status', 'queued');
  return { jobId: job.id, status: 'queued' };
}
export async function getJobStatus(jobId) {
  const status = await redis.hget(`job:${jobId}`, 'status');
  return status || 'not_found';
}