import express from 'express';
import { createJob, getJobStatus } from '../services/jobService.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const { videoUrl } = req.body;
  if (!videoUrl) return res.status(400).json({ error: 'videoUrl required' });
  const result = await createJob(videoUrl);
  res.json(result);
});

router.get('/:jobId', async (req, res) => {
  const status = await getJobStatus(req.params.jobId);
  res.json({ jobId: req.params.jobId, status });
});
export default router;