import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ミドルウェアの設定
app.use(cors());
app.use(express.json());

// 導通確認用ヘルスチェックAPI
app.use("/api/health", (req: Request, res: Response) => {
    res.status(200).json({ status: "ok", message: "はざいち API Server is running!" });
});

// サーバー起動
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});