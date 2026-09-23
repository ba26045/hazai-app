// @ts-ignore express の型宣言が未インストールの環境でもコンパイルできるようにする
import express, { NextFunction, Request, Response } from 'express';
import { MaterialItem, mockItems } from './mockData';

const app = express();
const PORT = 5000;

// ミドルウェアの設定
app.use((_req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.json());

// 1. ヘルスチェック用 API
app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', message: 'はざいち API Server is running!' });
});

// 2. 商品一覧取得 API（カテゴリ絞り込み対応）
app.get('/api/items', (req: Request, res: Response) => {
    const category = req.query.category as string;

    if (category) {
        const filtered = mockItems.filter((item) => item.category === category);
        return res.json(filtered);
    }

    res.json(mockItems);
});

// 3. 商品詳細取得 API
app.get('/api/items/:id', (req: Request, res: Response) => {
    const item = mockItems.find((i) => i.id === req.params.id);

    if (!item) {
        return res.status(404).json({ message: '商品が見つかりません' });
    }

    res.json(item);
});

// 4. 新規商品出品 API
app.post('/api/items', (req: Request, res: Response) => {
    const newItem: MaterialItem = {
        id: String(Date.now()), // 簡易的なID生成
        ...req.body,
    };

    mockItems.unshift(newItem); // リストの先頭に追加
    res.status(201).json(newItem);
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});