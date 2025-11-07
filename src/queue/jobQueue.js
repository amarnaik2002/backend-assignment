import { Queue } from 'bullmq';
import { bullConnection } from '../config/redis.js';

export const jobQueue = new Queue('video-processing', { connection: bullConnection });