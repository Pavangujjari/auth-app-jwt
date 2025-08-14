import cors from "cors";

export const corsMiddleware = cors({
  origin: true, // Allow all origins
  credentials: true, // Allow credentials
});
